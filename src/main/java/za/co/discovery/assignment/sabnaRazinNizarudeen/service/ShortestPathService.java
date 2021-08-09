package za.co.discovery.assignment.sabnaRazinNizarudeen.service;

import org.springframework.stereotype.Service;
import za.co.discovery.assignment.sabnaRazinNizarudeen.entity.Planet;
import za.co.discovery.assignment.sabnaRazinNizarudeen.entity.Route;
import za.co.discovery.assignment.sabnaRazinNizarudeen.utility.PathDrawer;

import java.util.*;
/**
 * Created by Sabna Razin Nizarudeen on 09-Aug-2021.
 */
@Service
public class ShortestPathService {

    private List<Planet> planetList;
    private List<Route> routeList;
    private Set<Planet> visitedPlanet;
    private Set<Planet> unvisitedPlanet;
    private Map<Planet, Planet> previousPaths;
    private Map<Planet, Double> distance;

    public ShortestPathService() {
    }

    public ShortestPathService(PathDrawer pathDrawer) {
        this.planetList = new ArrayList<>(pathDrawer.getPlanetList());
        if (pathDrawer.isTrafficAllowed()) {
            pathDrawer.processTraffics();
        }
        if (pathDrawer.isUndirectedGraph()) {
            this.routeList = new ArrayList<>(pathDrawer.getUndirectedEdges());
        } else {
            this.routeList = new ArrayList<>(pathDrawer.getRouteList());
        }
    }

    public void initializePlanets(PathDrawer graph) {
        this.planetList = new ArrayList<>(graph.getPlanetList());
        if (graph.isTrafficAllowed()) {
            graph.processTraffics();
        }
        if (graph.isUndirectedGraph()) {
            this.routeList = new ArrayList<>(graph.getUndirectedEdges());
        } else {
            this.routeList = new ArrayList<>(graph.getRouteList());
        }
    }

    public void run(Planet sourcePlanet) {
        distance = new HashMap<>();
        previousPaths = new HashMap<>();
        visitedPlanet = new HashSet<>();
        unvisitedPlanet = new HashSet<>();
        distance.put(sourcePlanet, 0.0);
        unvisitedPlanet.add(sourcePlanet);
        while (unvisitedPlanet.size() > 0) {
            Planet currentVertex = getVertexWithLowestDistance(unvisitedPlanet);
            visitedPlanet.add(currentVertex);
            unvisitedPlanet.remove(currentVertex);
            evaluateNeighborsWithMinimalDistances(currentVertex);
        }
    }

    private Planet getVertexWithLowestDistance(Set<Planet> planetList) {
        Planet lowestPlanet = null;
        for (Planet planet : planetList) {
            if (lowestPlanet == null) {
                lowestPlanet = planet;
            } else if (getShortestDistance(planet) < getShortestDistance(lowestPlanet)) {
                lowestPlanet = planet;
            }
        }
        return lowestPlanet;
    }

    private void evaluateNeighborsWithMinimalDistances(Planet currentPlanet) {
        List<Planet> adjacentVertices = getNeighbors(currentPlanet);
        for (Planet target : adjacentVertices) {
            Double alternateDistance = getShortestDistance(currentPlanet) + getDistance(currentPlanet, target);
            if (alternateDistance < getShortestDistance(target)) {
                distance.put(target, alternateDistance);
                previousPaths.put(target, currentPlanet);
                unvisitedPlanet.add(target);
            }
        }
    }

    private List<Planet> getNeighbors(Planet currentPlanet) {
        List<Planet> neighbors = new ArrayList<>();
        for (Route route : routeList) {
            Planet destination = fromId(route.getPlanetDestination());
            if (route.getPlanetOrigin().equals(currentPlanet.getPlanetNode()) && !isVisited(destination)) {
                neighbors.add(destination);
            }
        }
        return neighbors;
    }

    public Planet fromId(final String str) {
        for (Planet planet : planetList) {
            if (planet.getPlanetNode().equalsIgnoreCase(str)) {
                return planet;
            }
        }
        Planet islandVertex = new Planet();
        islandVertex.setPlanetName(str);
        islandVertex.setPlanetName("Island " + str);
        return islandVertex;
    }

    private boolean isVisited(Planet planet) {
        return visitedPlanet.contains(planet);
    }

    private Double getShortestDistance(Planet destination) {
        Double d = distance.get(destination);
        if (d == null) {
            return Double.POSITIVE_INFINITY;
        } else {
            return d;
        }
    }

    private Double getDistance(Planet source, Planet target) {
        for (Route route : routeList) {
            if (route.getPlanetOrigin().equals(source.getPlanetNode()) && route.getPlanetDestination().equals(target.getPlanetNode())) {
                return  route.getDistance();
            }
        }
        return 0.0;
       
    }

    public LinkedList<Planet> getPath(Planet target) {
        LinkedList<Planet> path = new LinkedList<>();
        Planet step = target;

        if (previousPaths.get(step) == null) {
            return null;
        }
        path.add(step);
        while (previousPaths.get(step) != null) {
            step = previousPaths.get(step);
            path.add(step);
        }

        Collections.reverse(path);
        return path;
    }

}
