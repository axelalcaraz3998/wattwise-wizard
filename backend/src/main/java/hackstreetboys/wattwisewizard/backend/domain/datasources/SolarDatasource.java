package hackstreetboys.wattwisewizard.backend.domain.datasources;

import hackstreetboys.wattwisewizard.backend.domain.entities.CoordinatesInfo;
import hackstreetboys.wattwisewizard.backend.domain.entities.SolarResponse;

public abstract class SolarDatasource {
    public abstract CoordinatesInfo getCoordinates(String address) throws Exception; 
    public abstract double getTemperature(double lat, double lon) throws Exception;

    /**
     * GHI = Global Horizontal Irradiation
     * This is the amount of solar energy that reaches per square meter per year on a horizontal surface (your roof).
     * It indicates how much useful sunlight your panels will receive.
     * @param lat Latitude
     * @param lon Longtiude
     * @return GHI per year in double
     * @throws Exception
     */
    public abstract double getGhiAnnual(double lat, double lon) throws Exception;

    public abstract SolarResponse calculate(double temp, double ghi, double ceilingArea) throws Exception;
    public abstract double getPricePerKwh() throws Exception;
}
