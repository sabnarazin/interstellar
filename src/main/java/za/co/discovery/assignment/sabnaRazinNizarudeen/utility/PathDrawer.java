package za.co.discovery.assignment.sabnaRazinNizarudeen.utility;

import org.springframework.stereotype.Component;
import za.co.discovery.assignment.sabnaRazinNizarudeen.entity.Planet;
import za.co.discovery.assignment.sabnaRazinNizarudeen.entity.Route;
import za.co.discovery.assignment.sabnaRazinNizarudeen.entity.Traffic;

import java.util.ArrayList;
import java.util.List;
/**
 * Created by Sabna Razin Nizarudeen on 09-Aug-2021.
 */
@Component
public class PathDrawer {

        private List<Planet> planetList;
        private List<Route> routeList;
        private List<Traffic> trafficList;
        private boolean undirectedGraph;
        private boolean trafficAllowed;

        public PathDrawer(List<Planet> planetList, List<Route> routeList, List<Traffic> trafficList) {
            this.planetList = planetList;
            this.routeList = routeList;
            this.trafficList = trafficList;
        }

        public List<Traffic> getTrafficList() {
            return trafficList;
        }

        public List<Planet> getPlanetList() {
            return planetList;
        }

        public List<Route> getRouteList() {
            return routeList;
        }

        public boolean isUndirectedGraph() {
            return undirectedGraph;
        }

        public void setUndirectedGraph(boolean undirectedGraph) {
            this.undirectedGraph = undirectedGraph;
        }

        public boolean isTrafficAllowed() {
            return trafficAllowed;
        }

        public void setTrafficAllowed(boolean trafficAllowed) {
            this.trafficAllowed = trafficAllowed;
        }

        public void processTraffics() {
            if (trafficList != null && !trafficList.isEmpty()) {
                for (Traffic traffic : trafficList) {
                    for (Route route : routeList) {
                        if (checkObjectsEqual(route.getRouteId(), traffic.getRoute().getRouteId())) {
                            if (checkObjectsEqual(route.getPlanetOrigin(), traffic.getRoute().getPlanetOrigin()) && checkObjectsEqual(route.getPlanetDestination(), traffic.getRoute().getPlanetDestination())) {
                                route.setDistance(traffic.getDelay());
                            }
                        }
                    }
                }
            }
        }

        public List<Route> getUndirectedEdges() {
            List<Route> undirectedEdges = new ArrayList();
            for (Route fromRoute : routeList) {
                Route toRoute = copyAdjacentEdge(fromRoute);
                undirectedEdges.add(fromRoute);
                undirectedEdges.add(toRoute);
            }
            return undirectedEdges;
        }

        public Route copyAdjacentEdge(Route fromRoute) {
            Route toRoute = new Route();
            toRoute.setRouteId(fromRoute.getRouteId());
            toRoute.setPlanetOrigin(fromRoute.getPlanetDestination());
            toRoute.setPlanetDestination(fromRoute.getPlanetOrigin());
            toRoute.setDistance(fromRoute.getDistance());
            toRoute.setTimeDelay(fromRoute.getTimeDelay());
            return toRoute;
        }

        public boolean checkObjectsEqual(Object object, Object otherObject) {
            if (object == null && otherObject == null) {
                //Both objects are null
                return true;
            } else if (object == null || otherObject == null) {
                //One of the objects is null
                return false;
            } else if (object instanceof String && otherObject instanceof String) {
                return ((String) object).equalsIgnoreCase((String) otherObject);
            } else {
                //Both objects are not null
                return object.equals(otherObject);
            }

        }
    }


