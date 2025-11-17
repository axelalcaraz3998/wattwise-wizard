package hackstreetboys.wattwisewizard.backend.domain.datasources;

import hackstreetboys.wattwisewizard.backend.domain.entities.SolarResponse;

public abstract class SolarDatasource {
    public abstract double getTemperature(double lat, double lon) throws Exception;
    public abstract double getGhiAnnual(double lat, double lon) throws Exception;
    public abstract SolarResponse calculate(double temp, double ghi) throws Exception;
    public abstract double getPricePerKwh() throws Exception;
}
