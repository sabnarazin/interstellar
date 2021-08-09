import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
//import { UiService } from 'src/app/services/ui/ui.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { route } from '../model/route'
import { planet } from '../model/planet';

@Component({
  selector: 'app-addplanet',
  templateUrl: './addroute.component.html',
  styleUrls: ['./addroute.component.css']
})
export class AddRouteComponent implements OnInit {
  public planetFormGroup: FormGroup;
  public dataSource: any;
  routedata = new route();
  planetOrigin = new planet();
  routeList:  any;
  //planetOrigin: String;
  planetDestination = new planet();
  distance: String;
  routeForm1 = new FormControl();
  routeForm2 = new FormControl();
  constructor(private router: Router, private changeDetectorRefs: ChangeDetectorRef, private http: HttpClient, private formBuilder: FormBuilder) {

    this.planetFormGroup = this.formBuilder.group({
      planetnode: ['', [Validators.required, Validators.minLength(5)]],
      planetname: ['', [Validators.required, Validators.minLength(5)]],
    });
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
  routeSave(): void {
    //console.log("Planet added in " + sessionStorage.getItem('username'));
    this.planetOrigin = this.routeForm1.value;
    this.planetDestination = this.routeForm2.value;
    this.routedata.planetOrigin = this.planetOrigin.planetNode;
    this.routedata.planetDestination = this.planetDestination.planetNode;
    this.routedata.distance = this.distance;
    console.log(this.routedata);
    //var headers = new HttpHeaders({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
    this.http.post('http://localhost:8080/createRoute', this.routedata)
        .subscribe(response => {

      console.log(response);
      //localStorage.setItem('respons', JSON.stringify(response));
    });
   this.changeDetectorRefs.detectChanges();
    //this.planetFormGroup.reset()
    this.routeForm1.reset();
    this.routeForm2.reset();
    this.distance = "";
    alert("Planet Route Added successfully");

    this.router.navigate(['addroute']);
  }

  ConvertToJSON(product: any) {
    return JSON.parse(product);
  }

}
