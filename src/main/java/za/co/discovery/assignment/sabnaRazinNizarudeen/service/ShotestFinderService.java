package za.co.discovery.assignment.sabnaRazinNizarudeen.service;

import org.hibernate.graph.Graph;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import za.co.discovery.assignment.sabnaRazinNizarudeen.entity.Planet;
import za.co.discovery.assignment.sabnaRazinNizarudeen.entity.Route;
import za.co.discovery.assignment.sabnaRazinNizarudeen.entity.Traffic;
import za.co.discovery.assignment.sabnaRazinNizarudeen.repository.PlanetRepository;
import za.co.discovery.assignment.sabnaRazinNizarudeen.repository.RouteRepository;
import za.co.discovery.assignment.sabnaRazinNizarudeen.repository.TrafficRepository;
import za.co.discovery.assignment.sabnaRazinNizarudeen.utility.PathDrawer;

import java.io.File;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.List;
/**
 * Created by Sabna Razin Nizarudeen on 09-Aug-2021.
 */
@Service
public class ShotestFinderService {
    @Autowired
    PlanetRepository planetRepository;

    @Autowired
    RouteRepository routeRepository;

    @Autowired
    TrafficRepository trafficRepository;

    public PathDrawer selectPathForDraw() {
        List<Planet> planetList = (List<Planet>) planetRepository.findAll();
        List<Route> routeList = routeRepository.findAll();
        List<Traffic> trafficList = trafficRepository.findAll();
        PathDrawer pathDrawer = new PathDrawer(planetList, routeList, trafficList);
        return pathDrawer;
    }

}
