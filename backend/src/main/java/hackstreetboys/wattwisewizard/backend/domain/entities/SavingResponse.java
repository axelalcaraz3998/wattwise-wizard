package hackstreetboys.wattwisewizard.backend.domain.entities;

public class SavingResponse {
    
    private String portentialSavings;
    private String carbonEmissionImpact;

    public String getPortentialSavings() {
        return portentialSavings;
    }
    public void setPortentialSavings(String portentialSavings) {
        this.portentialSavings = portentialSavings;
    }
    public String getCarbonEmissionImpact() {
        return carbonEmissionImpact;
    }
    public void setCarbonEmissionImpact(String carbonEmissionImpact) {
        this.carbonEmissionImpact = carbonEmissionImpact;
    }
    
}
