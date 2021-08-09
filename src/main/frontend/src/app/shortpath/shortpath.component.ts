import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
//import { UiService } from 'src/app/services/ui/ui.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { route } from '../model/route'
import { planet } from '../model/planet';
import { pathobject } from '../model/pathobject';
import { responsepath } from '../model/responsepath';



@Component({
  selector: 'app-addplanet',
  templateUrl: './shortpath.component.html',
  styleUrls: ['./shortpath.component.css']
})
export class ShortpathComponent implements OnInit {
  public planetFormGroup: FormGroup;
  public dataSource: any;
  //routedata = new route();
  //planetOrigin = new planet();
  pathobject = new pathobject();

  routeList:  any;
  path: any;
  //planetOrigin: String;
  planetDestination = new planet();
  earth: String;
  routeForm1 = new FormControl();
  responsepath = new responsepath();
  pathList: string[];
  //routeForm2 = new FormControl();
  constructor(private router: Router, private changeDetectorRefs: ChangeDetectorRef, private http: HttpClient, private formBuilder: FormBuilder) {

    this.planetFormGroup = this.formBuilder.group({
      planetnode: ['', [Validators.required, Validators.minLength(5)]],
      planetname: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  ngOnInit() {
    this.getPlanetDetails();
    this.earth = "Earth";
  }

  getPlanetDetails() {
    var headers = new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
    this.http.get('http://localhost:8080/viewPlanetData').subscribe(response => {
      console.log(response);
      this.routeList = response;
      //this.dataSource = this.ConvertToJSON(JSON.stringify(response));
    });
  }
  findPath(): void {
    //console.log("Planet added in " + sessionStorage.getItem('username'));
    //this.planetOrigin = this.routeForm1.value;
    this.planetDestination = this.routeForm1.value;
    this.pathobject.selectedPlanet = this.planetDestination.planetNode;
    this.pathobject.selectedPlanetName = this.planetDestination.planetName;
    this.pathobject.planetId = "";
    this.pathobject.planetName = "Earth";
    this.pathobject.path = "";
    this.pathobject.sourcePlanet = null;
    this.pathobject.destinationPlanet = null;
    this.pathobject.undirectedPath = false;
    this.pathobject.trafficAllowed = false;


    console.log(this.pathobject);
    var headers = new HttpHeaders({ 'Content-type': 'application/json' });
    this.http.post('http://localhost:8080/shortestpath', this.pathobject, {responseType: 'text'})
        .subscribe(response => {
          this.path = response;
          console.log(this.path);
          this.pathList = this.path.split('>');
          console.log(this.pathList);
          //console.log(response);
      //localStorage.setItem('respons', JSON.stringify(response));
    });
   this.changeDetectorRefs.detectChanges();
   //this.responsepath = this.path.thePath;
   //console.log(this.path);
   //console.log(this.ConvertToJSON(this.path));
   //alert("Shortest Path -->"+this.responsepath);

    //this.planetFormGroup.reset()
    //this.routeForm1.reset();
    //alert("Shortest Path -->"+this.path);

    //this.router.navigate(['home']);

  }

  ConvertToJSON(product: any) {
    return JSON.parse(product);
  }

}
