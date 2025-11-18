package hackstreetboys.wattwisewizard.backend.presentation.resources;

public class SolarRequest {

    private String address;
    private String kwHour;
    private String ceilingArea;
    private CeilingType ceilingType;

    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getKwHour() {
        return kwHour;
    }
    public void setKwHour(String kwHour) {
        this.kwHour = kwHour;
    }
    public String getCeilingArea() {
        return ceilingArea;
    }
    public void setCeilingArea(String ceilingArea) {
        this.ceilingArea = ceilingArea;
    }
    public CeilingType getCeilingType() {
        return ceilingType;
    }
    public void setCeilingType(CeilingType ceilingType) {
        this.ceilingType = ceilingType;
    }
    
}