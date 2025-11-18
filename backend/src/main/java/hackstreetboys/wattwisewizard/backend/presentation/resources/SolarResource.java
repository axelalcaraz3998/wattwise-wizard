package hackstreetboys.wattwisewizard.backend.presentation.resources;

import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.io.InputStream;

import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;

import hackstreetboys.wattwisewizard.backend.domain.datasources.SolarDatasource;
import hackstreetboys.wattwisewizard.backend.domain.entities.CoordinatesInfo;
import hackstreetboys.wattwisewizard.backend.domain.entities.SolarResponse;
import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;

@Path("/solar")
public class SolarResource {

    @Inject
    SolarDatasource solarDatasource;

    @POST
    @Path("/estimate")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response estimate(SolarRequest solarRequest) {
        try {
            CoordinatesInfo coordinatesInfo = solarDatasource
                .getCoordinates(solarRequest.getAddress());

            System.out.println("Address: " + solarRequest.getAddress());
            System.out.println(coordinatesInfo);

            double temp = solarDatasource
                .getTemperature(coordinatesInfo.getLatitude(), coordinatesInfo.getLongitude());
            double ghi = solarDatasource
                .getGhiAnnual(coordinatesInfo.getLatitude(), coordinatesInfo.getLongitude());

            SolarResponse resp = solarDatasource
                .calculate(temp, ghi, Double.parseDouble(solarRequest.getCeilingArea()));
            return Response.ok(resp).build();

        } catch (Exception e) {
            System.out.println(e.getMessage());
            return Response.serverError()
                    .entity("Error calculando potencia solar: " + e.getMessage())
                    .build();
        }
    }

    // @POST
    // @Path("/estimate-pdf")
    // @Consumes(MediaType.MULTIPART_FORM_DATA)
    // @Produces(MediaType.APPLICATION_JSON)
    // public Response estimatePdf(
    //     @FormDataParam("file") InputStream pdfStream,
    //     @FormDataParam("file") FormDataContentDisposition fileMeta
    // ) {
    //     try {

    //         if(pdfStream == null){
    //             throw new Exception("Pdf file not provided");
    //         }

    //         System.out.println(fileMeta.getFileName());
    //         System.out.println(pdfStream.toString());
    //         byte[] pdfFileBytes = pdfStream.readAllBytes();

    //         SolarRequest req = new SolarRequest();
    //         req.lat = 20.641696;
    //         req.lon = -103.416307;

    //         double temp = solarDatasource.getTemperature(req.lat, req.lon);
    //         double ghi = solarDatasource.getGhiAnnual(req.lat, req.lon);

    //         SolarResponse resp = solarDatasource.calculate(temp, ghi);
    //         return Response.ok(resp).build();

    //     } catch (Exception e) {
    //         return Response.serverError()
    //                 .entity("Error calculando potencia solar: " + e.getMessage())
    //                 .build();
    //     }
    // }
}