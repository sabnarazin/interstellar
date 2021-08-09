import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
//import { UiService } from 'src/app/services/ui/ui.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { planet } from '../model/planet'

@Component({
  selector: 'app-addplanet',
  templateUrl: './addplanet.component.html',
  styleUrls: ['./addplanet.component.css']
})
export class AddPlanetComponent implements OnInit {
  public planetFormGroup: FormGroup;
  public dataSource: any;
  planetdata = new planet();
  planetnode: String;
  planetname: String;
  constructor(private router: Router, private changeDetectorRefs: ChangeDetectorRef, private http: HttpClient, private formBuilder: FormBuilder) {

    this.planetFormGroup = this.formBuilder.group({
      planetnode: ['', [Validators.required, Validators.minLength(5)]],
      planetname: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  ngOnInit() {

  }

  planetSave(): void {
    //console.log("Planet added in " + sessionStorage.getItem('username'));
    this.planetdata.planetNode = this.planetnode;
    this.planetdata.planetName = this.planetname;
    console.log(this.planetdata);
    //var headers = new HttpHeaders({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
    this.http.post('http://localhost:8080/createPlanet', this.planetdata)
        .subscribe(response => {
        console.log(response);
      //localStorage.setItem('respons', JSON.stringify(response));
    });
   this.changeDetectorRefs.detectChanges();
    //this.planetFormGroup.reset()
    this.planetnode="";
    this.planetname="";
    alert("Planet Added successfully");

    this.router.navigate(['addplanet']);
  }

  ConvertToJSON(product: any) {
    return JSON.parse(product);
  }


}
