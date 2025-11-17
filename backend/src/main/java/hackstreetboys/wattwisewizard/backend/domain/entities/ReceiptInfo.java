package hackstreetboys.wattwisewizard.backend.domain.entities;

public class ReceiptInfo {
    
    private String address;
    private String currentConsume;
    private String historicalConsume;
    private String cost;
    private String totalCost;

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCurrentConsume() {
        return currentConsume;
    }

    public void setCurrentConsume(String currentConsume) {
        this.currentConsume = currentConsume;
    }

    public String getHistoricalConsume() {
        return historicalConsume;
    }

    public void setHistoricalConsume(String historicalConsume) {
        this.historicalConsume = historicalConsume;
    }

    public String getCost() {
        return cost;
    }

    public void setCost(String cost) {
        this.cost = cost;
    }

    public String getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(String totalCost) {
        this.totalCost = totalCost;
    }
}
