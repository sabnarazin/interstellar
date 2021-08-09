package za.co.discovery.assignment.sabnaRazinNizarudeen.dataManager;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import za.co.discovery.assignment.sabnaRazinNizarudeen.entity.Planet;
import za.co.discovery.assignment.sabnaRazinNizarudeen.entity.Route;
import za.co.discovery.assignment.sabnaRazinNizarudeen.entity.Traffic;
import za.co.discovery.assignment.sabnaRazinNizarudeen.repository.PlanetRepository;
import za.co.discovery.assignment.sabnaRazinNizarudeen.repository.RouteRepository;
import za.co.discovery.assignment.sabnaRazinNizarudeen.repository.TrafficRepository;
import za.co.discovery.assignment.sabnaRazinNizarudeen.service.ShortestPathService;
import za.co.discovery.assignment.sabnaRazinNizarudeen.service.ShotestFinderService;
import za.co.discovery.assignment.sabnaRazinNizarudeen.utility.PathDrawer;
import za.co.discovery.assignment.sabnaRazinNizarudeen.utility.PathObject;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
/**
 * Created by Sabna Razin Nizarudeen on 09-Aug-2021.
 */
@RestController
@CrossOrigin
public class DataHandlerController {

    String excelFilePath = "interstellar.xlsx";

    @Autowired
    PlanetRepository planetRepository;

    @Autowired
    RouteRepository routeRepository;

    @Autowired
    TrafficRepository trafficRepository;

    @Autowired
    ShotestFinderService shotestFinderService;

    @Autowired
    ShortestPathService shortestPathService;


    //@GetMapping("/loaddata")


    @GetMapping("/viewPlanetData")
    public List<Planet> getPlanetDetails(){
        return (List<Planet>) planetRepository.findAll();
    }


    @GetMapping("/viewRouteData")
    public List<Route> getRouteDetails(){
        return routeRepository.findAll();
    }

    @GetMapping("/viewTrafficData")
    public List<Traffic> getTrafficDetails(){
        return trafficRepository.findAll();
    }

    @RequestMapping("/createPlanet")
    public String savePlanet(@RequestBody Planet planet){
        planetRepository.save(planet);
        return "New Planet added successfully";
    }

    @RequestMapping("/createRoute")
    public String saveRoute(@RequestBody Route route){
        routeRepository.save(route);
        return "New Route added successfully";
    }

    @RequestMapping("/createTraffic")
    public String saveTrafic(@RequestBody Traffic traffic){
        trafficRepository.save(traffic);
        return "New Traffic added successfully";
    }

    @RequestMapping("/deletePlanet/{planet}")
    public String deletePlanet(@PathVariable Integer planet){
        planetRepository.deleteById(planet);
        return "New Planet deleted successfully";
    }

    @RequestMapping("/deleteRoute/{route}")
    public String deleteRoute(@PathVariable Double route){
        routeRepository.deleteById(route);
        return "New Route deleted successfully";
    }

    @RequestMapping("/deleteTraffic/{tarffic}")
    public String deleteTrafic(@PathVariable Double tarffic){
        trafficRepository.deleteById(tarffic);
        return "New Traffic deleted successfully";
    }
    @PostMapping("/shortestpath")
    public String shortestSubmit(@RequestBody PathObject pathObject) throws IOException{
        //LoadDataFromExcel();
        StringBuilder path = new StringBuilder();
        PathDrawer pathDrawer = shotestFinderService.selectPathForDraw();
        if (pathObject.isTrafficAllowed()) {
            pathDrawer.setTrafficAllowed(true);
        }
        if (pathObject.isUndirectedGraph()) {
            pathDrawer.setUndirectedGraph(true);
        }
        shortestPathService.initializePlanets(pathDrawer);
        Planet source = planetRepository.findByPlanetName(pathObject.getVertexName());

        Planet destination = planetRepository.findByPlanetNode(pathObject.getSelectedVertex());
        //
        shortestPathService.run(source);
        LinkedList<Planet> paths = shortestPathService.getPath(destination);
        if (paths != null) {
            for (Planet planet : paths) {
                path.append(">");
                path.append(planet.getPlanetName() + " (" + planet.getPlanetId() + ")");

            }
        } else if (source != null && destination != null && source.getPlanetId().equals(destination.getPlanetId())) {
            path.append("PATH_NOT_NEEDED" + source.getPlanetName());
        } else {
            path.append("PATH_NOT_AVAILABLE");
        }
        pathObject.setThePath(path.toString());
        pathObject.setSelectedVertexName(destination.getPlanetName());
        //model.addAttribute("shortest", pathModel);
        return path.toString().substring(1);
    }


}
