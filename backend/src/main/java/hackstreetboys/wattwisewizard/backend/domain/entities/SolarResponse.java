package hackstreetboys.wattwisewizard.backend.domain.entities;

public class SolarResponse {
    private double temperature;
    private double solarPotentialKwhYear;
    private double estimatedSavingsUsdYear;
    private double co2ReductionTonsYear;
    
    public double getTemperature() {
        return temperature;
    }
    public void setTemperature(double temperature) {
        this.temperature = temperature;
    }
    public double getSolarPotentialKwhYear() {
        return solarPotentialKwhYear;
    }
    public void setSolarPotentialKwhYear(double solarPotentialKwhYear) {
        this.solarPotentialKwhYear = solarPotentialKwhYear;
    }
    public double getEstimatedSavingsUsdYear() {
        return estimatedSavingsUsdYear;
    }
    public void setEstimatedSavingsUsdYear(double estimatedSavingsUsdYear) {
        this.estimatedSavingsUsdYear = estimatedSavingsUsdYear;
    }
    public double getCo2ReductionTonsYear() {
        return co2ReductionTonsYear;
    }
    public void setCo2ReductionTonsYear(double co2ReductionTonsYear) {
        this.co2ReductionTonsYear = co2ReductionTonsYear;
    }

    
}