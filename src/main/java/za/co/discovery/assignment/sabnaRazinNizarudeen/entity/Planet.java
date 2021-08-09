package za.co.discovery.assignment.sabnaRazinNizarudeen.entity;

import javax.persistence.*;
/**
 * Created by Sabna Razin Nizarudeen on 09-Aug-2021.
 */
@Entity
@Table(name="Planet")
public class Planet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer planetId;
    private String planetNode;
    private String planetName;

    public Integer getPlanetId() {
        return planetId;
    }

    public void setPlanetId(Integer planetId) {
        this.planetId = planetId;
    }

    public String getPlanetNode() {
        return planetNode;
    }

    public void setPlanetNode(String planetNode) {
        this.planetNode = planetNode;
    }

    public String getPlanetName() {
        return planetName;
    }

    public void setPlanetName(String planetName) {
        this.planetName = planetName;
    }
}
