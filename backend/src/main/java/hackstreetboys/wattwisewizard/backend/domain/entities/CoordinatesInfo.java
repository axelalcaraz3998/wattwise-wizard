package hackstreetboys.wattwisewizard.backend.domain.entities;

public class CoordinatesInfo {
    
    private double longitude;
    private double latitude;

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    @Override
    public String toString() {
        return "CoordinatesInfo [longitude=" 
            + longitude + ", latitude=" + latitude + "]";
    }

}
