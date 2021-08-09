package za.co.discovery.assignment.sabnaRazinNizarudeen.utility;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import za.co.discovery.assignment.sabnaRazinNizarudeen.entity.Planet;
import za.co.discovery.assignment.sabnaRazinNizarudeen.entity.Route;
import za.co.discovery.assignment.sabnaRazinNizarudeen.entity.Traffic;
import za.co.discovery.assignment.sabnaRazinNizarudeen.repository.PlanetRepository;
import za.co.discovery.assignment.sabnaRazinNizarudeen.repository.RouteRepository;
import za.co.discovery.assignment.sabnaRazinNizarudeen.repository.TrafficRepository;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
/**
 * Created by Sabna Razin Nizarudeen on 09-Aug-2021.
 */
@Service
public class DataLoader {
    String excelFilePath = "interstellar.xlsx";

    @Autowired
    PlanetRepository planetRepository;

    @Autowired
    RouteRepository routeRepository;

    @Autowired
    TrafficRepository trafficRepository;
    public String LoadDataFromExcel() throws IOException {
        FileInputStream inputStream = new FileInputStream(excelFilePath);

        Workbook workbook = new XSSFWorkbook(inputStream);

        Sheet firstSheet = workbook.getSheetAt(0);
        Sheet secondSheet = workbook.getSheetAt(1);
        Sheet thirdSheet = workbook.getSheetAt(2);
        Iterator<Row> rowIterator = firstSheet.iterator();

        rowIterator.next();
        List<Planet> planetList = new ArrayList<Planet>();
        Planet planetTemp;
        while (rowIterator.hasNext()) {
            Row nextRow = rowIterator.next();
            Iterator<Cell> cellIterator = nextRow.cellIterator();
            planetTemp = new Planet();
            while (cellIterator.hasNext()) {
                Cell nextCell = cellIterator.next();
                int columnIndex = nextCell.getColumnIndex();
                switch (columnIndex) {
                    case 0:
                        planetTemp.setPlanetNode(nextCell.getStringCellValue());
                        break;
                    case 1:
                        planetTemp.setPlanetName(nextCell.getStringCellValue());
                        break;
                }
            }
            planetList.add(planetTemp);
        }
        planetRepository.saveAll(planetList);
        rowIterator = secondSheet.iterator();
        rowIterator.next();

        List<Route> routeList = new ArrayList<Route>();
        Route routeTemp;
        while (rowIterator.hasNext()) {
            Row nextRow = rowIterator.next();
            Iterator<Cell> cellIterator = nextRow.cellIterator();
            routeTemp = new Route();
            while (cellIterator.hasNext()) {
                Cell nextCell = cellIterator.next();
                int columnIndex = nextCell.getColumnIndex();
                switch (columnIndex) {
                    case 1:
                        routeTemp.setPlanetOrigin(nextCell.getStringCellValue());
                        break;
                    case 2:
                        routeTemp.setPlanetDestination(nextCell.getStringCellValue());
                        break;
                    case 3:
                        routeTemp.setDistance(nextCell.getNumericCellValue());
                        //routeTemp.setDistance(nextCell.getStringCellValue());
                        break;
                }
            }
            routeList.add(routeTemp);
        }

        rowIterator = thirdSheet.iterator();
        rowIterator.next();
        List<Traffic> trafficList = new ArrayList<Traffic>();
        Traffic trafficTemp;
        while (rowIterator.hasNext()) {
            Row nextRow = rowIterator.next();
            Iterator<Cell> cellIterator = nextRow.cellIterator();
            routeTemp = new Route();
            trafficTemp = new Traffic();
            while (cellIterator.hasNext()) {
                Cell nextCell = cellIterator.next();
                int columnIndex = nextCell.getColumnIndex();
                switch (columnIndex) {
                    case 0:
                        routeTemp.setRouteId((int) nextCell.getNumericCellValue());
                        break;
                    case 1:
                        routeTemp.setPlanetOrigin(nextCell.getStringCellValue());
                        break;
                    case 2:
                        routeTemp.setPlanetDestination(nextCell.getStringCellValue());
                        break;
                    case 3:
                        trafficTemp.setDelay(nextCell.getNumericCellValue());
                        break;
                }
                trafficTemp.setRoute(routeTemp);
            }
            trafficList.add(trafficTemp);
        }

        planetRepository.saveAll(planetList);
        routeRepository.saveAll(routeList);
        trafficRepository.saveAll(trafficList);
        //trafficRepository.saveAllAndFlush(trafficList);
        return "Successfully loaded .. ";
    }
}
