package za.co.discovery.assignment.sabnaRazinNizarudeen.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import za.co.discovery.assignment.sabnaRazinNizarudeen.entity.Planet;
/**
 * Created by Sabna Razin Nizarudeen on 09-Aug-2021.
 */
import java.util.List;

public interface PlanetRepository extends CrudRepository<Planet, Integer> {
    Planet findByPlanetName(String planetName);
    Planet findByPlanetId(Integer planetId);
    Planet findByPlanetNode(String planetNode);

}
