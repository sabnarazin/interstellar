package za.co.discovery.assignment.sabnaRazinNizarudeen.entity;

import javax.persistence.*;
/**
 * Created by Sabna Razin Nizarudeen on 09-Aug-2021.
 */
@Entity
@Table(name="Route")
public class Route {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer routeId;
    private String planetOrigin;
    private String planetDestination;
    private Double distance;
    private Double timeDelay;

    public Double getTimeDelay() {
        return timeDelay;
    }

    public void setTimeDelay(Double timeDelay) {
        this.timeDelay = timeDelay;
    }



    public Integer getRouteId() {
        return routeId;
    }

    public void setRouteId(Integer routeId) {
        this.routeId = routeId;
    }

    public String getPlanetOrigin() {
        return planetOrigin;
    }

    public void setPlanetOrigin(String planetOrigin) {
        this.planetOrigin = planetOrigin;
    }

    public String getPlanetDestination() {
        return planetDestination;
    }

    public void setPlanetDestination(String planetDestination) {
        this.planetDestination = planetDestination;
    }

    public Double getDistance() {
        return distance;
    }

    public void setDistance(Double distance) {
        this.distance = distance;
    }
}
