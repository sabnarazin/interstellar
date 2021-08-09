package za.co.discovery.assignment.sabnaRazinNizarudeen.entity;

import javax.persistence.*;
/**
 * Created by Sabna Razin Nizarudeen on 09-Aug-2021.
 */
@Entity
@Table(name="Traffic")
public class Traffic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne
    private Route route;

    private Double delay;

    public Double getDelay() {
        return delay;
    }

    public void setDelay(Double delay) {
        this.delay = delay;
    }
    /*    @OneToOne(mappedBy = "planetId")
    private Planet planet;*/

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Route getRoute() {
        return route;
    }

    public void setRoute(Route route) {
        this.route = route;
    }
}
