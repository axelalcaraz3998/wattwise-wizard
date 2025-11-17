package hackstreetboys.wattwisewizard.backend.infrastructure.datasources;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.function.Supplier;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.oracle.bmc.ConfigFileReader;
import com.oracle.bmc.ConfigFileReader.ConfigFile;
import com.oracle.bmc.aidocument.AIServiceDocumentClient;
import com.oracle.bmc.aidocument.model.AnalyzeDocumentDetails;
import com.oracle.bmc.aidocument.model.DocumentKeyValueExtractionFeature;
import com.oracle.bmc.aidocument.model.InlineDocumentDetails;
import com.oracle.bmc.aidocument.requests.AnalyzeDocumentRequest;
import com.oracle.bmc.aidocument.responses.AnalyzeDocumentResponse;
import com.oracle.bmc.auth.AuthenticationDetailsProvider;
import com.oracle.bmc.auth.SimpleAuthenticationDetailsProvider;
import com.oracle.bmc.auth.SimplePrivateKeySupplier;

import hackstreetboys.wattwisewizard.backend.domain.datasources.SolarDatasource;
import hackstreetboys.wattwisewizard.backend.domain.entities.ReceiptInfo;
import hackstreetboys.wattwisewizard.backend.domain.entities.SolarResponse;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class SolarDatasourceImpl extends SolarDatasource {

    private static final ObjectMapper mapper = new ObjectMapper();
    private static final HttpClient client = HttpClient.newHttpClient();

    @Override
    public double getTemperature(double lat, double lon) throws Exception {
        String url = String.format(
            "https://api.open-meteo.com/v1/forecast?latitude=%f&longitude=%f&current_weather=true",
            lat, lon
        );

        HttpRequest req = HttpRequest.newBuilder().uri(URI.create(url)).build();
        HttpResponse<String> res = client.send(req, HttpResponse.BodyHandlers.ofString());
        JsonNode json = mapper.readTree(res.body());

        return json.get("current_weather")
            .get("temperature")
            .asDouble();
    }

    @Override
    public double getGhiAnnual(double lat, double lon) throws Exception {
        String url = String.format(
            "https://power.larc.nasa.gov/api/temporal/daily/point?parameters=ALLSKY_SFC_SW_DWN&community=RE&longitude=%s&latitude=%s&format=json&start=20241030&end=20251030",
            lon, lat
        );

        HttpRequest req = HttpRequest.newBuilder().uri(URI.create(url)).build();
        HttpResponse<String> res = client.send(req, HttpResponse.BodyHandlers.ofString());

        JsonNode json = mapper.readTree(res.body());
        JsonNode days = json.get("properties").get("parameter").get("ALLSKY_SFC_SW_DWN");

        double total = 0;
        for (JsonNode day : days) {
            total += day.asDouble();
        }

        return total; // suma anual de GHI
    }

    @Override
    public SolarResponse calculate(double temp, double ghi) throws Exception{
        SolarResponse resp = new SolarResponse();

        resp.setTemperature(temp);

        // Factor: eficiencia panel * área * pérdidas (puedes personalizar)
        double efficiency = 0.18;  
        double area = 20; // m² de paneles → ejemplo
        double systemLosses = 0.85;

        double annualKwh = ghi * area * efficiency * systemLosses;

        resp.setSolarPotentialKwhYear(annualKwh);
        resp.setEstimatedSavingsUsdYear(annualKwh * getPricePerKwh());
        resp.setCo2ReductionTonsYear(annualKwh * 0.0004); // 0.4 kg = 0.0004 t

        return resp;
    }

    @Override
    public double getPricePerKwh() throws Exception{
        // Datos de conexión (ajustar según tu entorno)
        String url = "jdbc:oracle:thin:@//HOST:PORT/SERVICENAME";
        String user = "YOUR_USERNAME";
        String pass = "YOUR_PASSWORD";

        String sql = "SELECT PRICE_KWH FROM KWH_PRICES WHERE COUNTRY_CODE = ?";

        try (Connection conn = DriverManager.getConnection(url, user, pass);
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, "MX");  // Buscar México

            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    double price = rs.getDouble("PRICE_KWH");
                    System.out.println("El precio por kWh en México es: " + price);
                    return price;
                } else {
                    System.out.println("No se encontró registro para MX.");
                    return 0.15;
                }
            }

        } catch (SQLException e) {
            e.printStackTrace();

            return 0.15;
        }
        
    }

    public ReceiptInfo getDocumentReceiptInfo(byte[] pdfStreamByte) {
        ConfigFile config = null;
        File pdfFile = null;
        byte[] pdfBytes = null;

        try {
            // Carga el archivo ~/.oci/config
            config = ConfigFileReader.parse("~/.oci/config", "DEFAULT");
            pdfFile = new File("/Users/sebas/Downloads/recibo_cfe.pdf");
        } catch (Exception e) {
            ReceiptInfo receiptInfo = new ReceiptInfo();
            receiptInfo.setAddress("Could not load file");
            return receiptInfo;
        }

        try (FileInputStream fis = new FileInputStream(pdfFile)) {
            pdfBytes = fis.readAllBytes();
            System.out.println("Bytes leídos: " + pdfBytes.length);
        } catch (Exception e) {
            ReceiptInfo receiptInfo = new ReceiptInfo();
            receiptInfo.setAddress("Could not load file");
            return receiptInfo;
        }

        Supplier<InputStream> privateKeySupplierFromConfigEntry = 
            new SimplePrivateKeySupplier(config.get("key_file"));

        AuthenticationDetailsProvider provider = 
            SimpleAuthenticationDetailsProvider.builder()
                .tenantId(config.get("tenancy"))
                .userId(config.get("user"))
                .fingerprint(config.get("fingerprint"))
                .privateKeySupplier(privateKeySupplierFromConfigEntry)
                .build();

        AIServiceDocumentClient client = AIServiceDocumentClient.builder().build(provider);

        AnalyzeDocumentDetails analyzeDocumentDetails =
            AnalyzeDocumentDetails.builder()
            .features(new ArrayList<>(Arrays.asList(
                DocumentKeyValueExtractionFeature
                    .builder()
                    .tenancyId(config.get("tenancy"))
                    .build()
                ))
            )
            .document(
                InlineDocumentDetails.builder().data(pdfBytes).build()
            )
            .build();
        
        AnalyzeDocumentRequest analyzeDocumentRequest = 
            AnalyzeDocumentRequest.builder()
            .analyzeDocumentDetails(analyzeDocumentDetails)
            // .ifMatch("EXAMPLE-ifMatch-Value")
            // .opcRequestId("6KJQUDQVXAB8RVZF2CXM<unique_ID>")
            .build();

        AnalyzeDocumentResponse response = 
            client.analyzeDocument(analyzeDocumentRequest);

        System.out.println(response);

        ReceiptInfo receiptInfo = new ReceiptInfo();
        receiptInfo.setAddress("Oracle Address funciono");
        return receiptInfo;

        // AnalyzeDocumentDetails analyzeDocumentDetails = AnalyzeDocumentDetails.builder()
		// .features(new ArrayList<>(Arrays.asList(DocumentClassificationFeature.builder()
		// 		.maxResults(196)
		// 		.modelId("ocid1.test.oc1..<unique_ID>EXAMPLE-modelId-Value")
		// 		.tenancyId("ocid1.test.oc1..<unique_ID>EXAMPLE-tenancyId-Value").build())))
		// .document(InlineDocumentDetails.builder()
		// 	.data(pdfBytes)
		// 	.pageRange(new ArrayList<>(Arrays.asList("EXAMPLE--Value"))).build())
        // .build();


        // AnalyzeDocumentRequest analyzeDocumentRequest = AnalyzeDocumentRequest.builder()
		// .analyzeDocumentDetails(analyzeDocumentDetails)
		// .ifMatch("EXAMPLE-ifMatch-Value")
		// .opcRequestId("6KJQUDQVXAB8RVZF2CXM<unique_ID>").build();

        // AnalyzeDocumentResponse response = client.analyzeDocument(analyzeDocumentRequest);

        // System.out.println(response);
    }
    
}
