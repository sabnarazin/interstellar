import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatDialog } from '@angular/material';
//import { UiService } from 'src/app/services/ui/ui.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { planet } from '../model/planet'
import { EditPlanetComponent } from './edit-planet/edit-planet.component';

@Component({
  selector: 'app-vieweditplanet',
  templateUrl: './vieweditplanet.component.html',
  styleUrls: ['./vieweditplanet.component.css']
})
export class PlanetViewEditComponent implements OnInit {
  public planetFormGroup: FormGroup;
  public dataSource: any;
  planetdata = new planet();
  planetnode: String;
  planetname: String;
  planetdataList: any;
  displayedColumns: string[] = ['planetId', 'planetNode', 'planetName', 'action'];
  constructor(private router: Router,
              private changeDetectorRefs: ChangeDetectorRef,
              private http: HttpClient,
              private formBuilder: FormBuilder,
              private dialog: MatDialog) {

    this.planetFormGroup = this.formBuilder.group({
      planetnode: ['', [Validators.required, Validators.minLength(5)]],
      planetname: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  ngOnInit() {
    this.getPlanet();
  }
  getPlanet(): void {
    //console.log("Planet added in " + sessionStorage.getItem('username'));

    //var headers = new HttpHeaders({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
    this.http.get('http://localhost:8080/viewPlanetData')
        .subscribe(response => {
          this.planetdataList = response;
          this.dataSource = response;
          console.log(this.planetdataList);
      //localStorage.setItem('respons', JSON.stringify(response));
    });
   this.changeDetectorRefs.detectChanges();
    //this.planetFormGroup.reset()

    this.router.navigate(['vieweditplanet']);
  }

  ConvertToJSON(product: any) {
    return JSON.parse(product);
  }

  triggerEdit(editableData: any) {
    console.log(editableData);

    const dialogRef = this.dialog.open(EditPlanetComponent, {
      width: '350px',
      height: '300px',
      data: {
        editRecord: editableData
      }
    });
  }

  deleteEntry(dataToDelete: any) {
    this.http.get<string>('http://localhost:8080/deletePlanet/' + dataToDelete.planetId.toString())
      .subscribe(resp => {
        console.log(resp);
      }, err => {
        console.log(err);
      });
      alert('Record deleted successfully');
  }
}
