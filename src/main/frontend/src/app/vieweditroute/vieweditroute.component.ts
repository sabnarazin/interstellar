import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatDialog } from '@angular/material';
//import { UiService } from 'src/app/services/ui/ui.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { planet } from '../model/planet'
import { EditRouteComponent } from './edit-route/edit-route.component';

@Component({
  selector: 'app-vieweditroute',
  templateUrl: './vieweditroute.component.html',
  styleUrls: ['./vieweditroute.component.css']
})
export class RouteViewEditComponent implements OnInit {
  public planetFormGroup: FormGroup;
  public dataSource: any;
  public routedataList: any;
  //routedata = new route();
  planetOrigin = new planet();
  routeList:  any;
  //planetOrigin: String;
  planetDestination = new planet();
  distance: String;
  routeForm1 = new FormControl();
  routeForm2 = new FormControl();
  displayedColumns: string[] = ['routeId','planetOrigin','planetDestination', 'distance', 'action'];
  constructor(private router: Router, private changeDetectorRefs: ChangeDetectorRef, private http: HttpClient, private formBuilder: FormBuilder, private dialog: MatDialog) {

  }
  ngOnInit() {
    this.getRoute();
  }
  getRoute(): void {
    //console.log("Planet added in " + sessionStorage.getItem('username'));

    //var headers = new HttpHeaders({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
    this.http.get('http://localhost:8080/viewRouteData')
        .subscribe(response => {
          this.routeList = response;
          this.dataSource = response;
          console.log(this.routeList);
      //localStorage.setItem('respons', JSON.stringify(response));
    });
   this.changeDetectorRefs.detectChanges();
    //this.planetFormGroup.reset()

    this.router.navigate(['vieweditroute']);
  }

  ConvertToJSON(product: any) {
    return JSON.parse(product);
  }

  triggerEdit(editableData: any) {
    console.log(editableData);

    const dialogRef = this.dialog.open(EditRouteComponent, {
      width: '350px',
      height: '300px',
      data: {
        editRecord: editableData
      }
    });
  }

  deleteEntry(dataToDelete: any) {
    this.http.get<string>('http://localhost:8080/deleteRoute/' + dataToDelete.planetId.toString())
      .subscribe(resp => {
        console.log(resp);
      }, err => {
        console.log(err);
      });
      alert('Record deleted successfully');
  }
}
