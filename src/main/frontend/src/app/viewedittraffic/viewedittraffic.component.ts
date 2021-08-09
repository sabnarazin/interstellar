import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatDialog } from '@angular/material';
//import { UiService } from 'src/app/services/ui/ui.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { planet } from '../model/planet'
import { EditTrafficComponent } from './edit-traffic/edit-traffic.component';

@Component({
  selector: 'app-viewedittraffic',
  templateUrl: './viewedittraffic.component.html',
  styleUrls: ['./viewedittraffic.component.css']
})
export class TrafficViewEditComponent implements OnInit {
  public planetFormGroup: FormGroup;
  public dataSource: any;
  public routedataList: any;
  //routedata = new route();
  planetOrigin = new planet();
  trafficList:  any;
  //planetOrigin: String;
  planetDestination = new planet();
  distance: String;
  routeForm1 = new FormControl();
  routeForm2 = new FormControl();
  displayedColumns: string[] = ['id','planetOrigin','planetDestination', 'distance','delay', 'action'];
  constructor(private router: Router, private changeDetectorRefs: ChangeDetectorRef, private http: HttpClient, private formBuilder: FormBuilder, private dialog: MatDialog) {

  }
  ngOnInit() {
    this.getRoute();
  }
  getRoute(): void {
    //console.log("Planet added in " + sessionStorage.getItem('username'));

    //var headers = new HttpHeaders({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
    this.http.get('http://localhost:8080/viewTrafficData')
        .subscribe(response => {
          this.trafficList = response;
          this.dataSource = response;
          console.log(this.trafficList);
      //localStorage.setItem('respons', JSON.stringify(response));
    });
   this.changeDetectorRefs.detectChanges();
    //this.planetFormGroup.reset()

    this.router.navigate(['viewedittraffic']);
  }

  ConvertToJSON(product: any) {
    return JSON.parse(product);
  }

  triggerEdit(editableData: any) {
    console.log(editableData);

    const dialogRef = this.dialog.open(EditTrafficComponent, {
      width: '350px',
      height: '300px',
      data: {
        editRecord: editableData
      }
    });
  }

  deleteEntry(dataToDelete: any) {
    this.http.get<string>('http://localhost:8080/deleteTraffic/' + dataToDelete.planetId.toString())
      .subscribe(resp => {
        console.log(resp);
      }, err => {
        console.log(err);
      });
      alert('Record deleted successfully');
  }
}
