package za.co.discovery.assignment.sabnaRazinNizarudeen.utility;

import org.springframework.stereotype.Component;

import java.io.Serializable;
/**
 * Created by Sabna Razin Nizarudeen on 09-Aug-2021.
 */
public class PathObject {

    private String selectedPlanet;
    private String selectedPlanetName;
    private String planetId;
    private String planetName;
    private String path;
    private String sourcePlanet;
    private String destinationPlanet;
    private boolean undirectedPath;
    private boolean trafficAllowed;

    public PathObject(String selectedPlanet,String selectedPlanetName,String planetId,String planetName,String path, String sourcePlanet, String destinationPlanet, boolean undirectedPath, boolean trafficAllowed){
        this.selectedPlanet = selectedPlanet;
        this.selectedPlanetName = selectedPlanetName;
        this.planetId = planetId;
        this.planetName = planetName;
        this.path = path;
        this.sourcePlanet = sourcePlanet;
        this.destinationPlanet = destinationPlanet;
        this.undirectedPath = undirectedPath;
        this.trafficAllowed = trafficAllowed;
    }

    public String getSelectedVertex() {
        return selectedPlanet;
    }

    public void setSelectedVertex(String selectedVertex) {
        this.selectedPlanet = selectedVertex;
    }

    public String getVertexId() {
        return planetId;
    }

    public void setVertexId(String vertexId) {
        this.planetId = vertexId;
    }

    public String getVertexName() {
        return planetName;
    }

    public void setVertexName(String vertexName) {
        this.planetName = vertexName;
    }

    public String getThePath() {
        return path;
    }

    public void setThePath(String path) {
        this.path = path;
    }

    public String getSelectedVertexName() {
        return selectedPlanetName;
    }

    public void setSelectedVertexName(String selectedVertexName) {
        this.selectedPlanetName = selectedVertexName;
    }

    public String getSourceVertex() {
        return sourcePlanet;
    }

    public void setSourceVertex(String sourceVertex) {
        this.sourcePlanet = sourceVertex;
    }

    public String getDestinationVertex() {
        return destinationPlanet;
    }

    public void setDestinationVertex(String destinationVertex) {
        this.destinationPlanet = destinationVertex;
    }

    public boolean isUndirectedGraph() {
        return undirectedPath;
    }

    public void setUndirectedGraph(boolean undirectedGraph) {
        this.undirectedPath = undirectedGraph;
    }

    public boolean isTrafficAllowed() {
        return trafficAllowed;
    }

    public void setTrafficAllowed(boolean trafficAllowed) {
        this.trafficAllowed = trafficAllowed;
    }
}
