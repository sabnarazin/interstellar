import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
//import { UiService } from 'src/app/services/ui/ui.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { traffic } from '../model/traffic'
import { planet } from '../model/planet';
import { route } from '../model/route';

@Component({
  selector: 'app-addplanet',
  templateUrl: './addtraffic.component.html',
  styleUrls: ['./addtraffic.component.css']
})
export class AddTrafficComponent implements OnInit {
  public planetFormGroup: FormGroup;
  public dataSource: any;
  routedata = new traffic();
  planetOrigin = new planet();
  route = new route();
  routeList:  any;
  //planetOrigin: String;
  planetDestination = new planet();
  delay: String;
  routeForm1 = new FormControl();
  routeForm2 = new FormControl();
  constructor(private router: Router, private changeDetectorRefs: ChangeDetectorRef, private http: HttpClient, private formBuilder: FormBuilder) {


  }
  ngOnInit() {
    this.getPlanetDetails();
  }

  getPlanetDetails() {
    var headers = new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
    this.http.get('http://localhost:8080/viewPlanetData').subscribe(response => {
      console.log(response);
      this.routeList = response;
      //this.dataSource = this.ConvertToJSON(JSON.stringify(response));
    });
  }
  trafficSave(): void {
    //console.log("Planet added in " + sessionStorage.getItem('username'));
    //this.planetOrigin = this.routeForm1.value;
    //this.planetDestination = this.routeForm2.value;
    this.route.planetOrigin = this.routeForm1.value;
    this.route.planetDestination = this.routeForm2.value;
    this.routedata.route = this.route;
    this.routedata.delay = this.delay;
    console.log(this.routedata);
    console.log(this.route);
    //var headers = new HttpHeaders({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
    this.http.post('http://localhost:8080/createTraffic', this.routedata)
        .subscribe(response => {
      console.log(response);
      //localStorage.setItem('respons', JSON.stringify(response));
    });
   this.changeDetectorRefs.detectChanges();
    //this.planetFormGroup.reset()
    this.routeForm1.reset();
    this.routeForm2.reset();
    this.delay = "";
    alert("Planet Route Added successfully");

    this.router.navigate(['addtraffic']);
  }

  ConvertToJSON(product: any) {
    return JSON.parse(product);
  }

}
