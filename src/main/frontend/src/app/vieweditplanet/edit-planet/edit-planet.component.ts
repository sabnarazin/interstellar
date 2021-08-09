import { Component, OnInit, inject, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { planet } from 'src/app/model/planet';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-planet',
  templateUrl: './edit-planet.component.html',
  styleUrls: ['./edit-planet.component.css']
})
export class EditPlanetComponent implements OnInit {

  public planetFormGroup: FormGroup;
  public dataSource: any;
  planetdata = new planet();
  planetnode: String;
  planetname: String;

  constructor(private router: Router,
              private http: HttpClient,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<EditPlanetComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    /* this.planetFormGroup = this.fb.group({
      planetnode: [data.planetNode, [Validators.required, Validators.minLength(5)]],
      planetname: [data.planetName, [Validators.required, Validators.minLength(5)]],
    }); */
    this.planetdata = data.editRecord;
    this.planetnode = data.editRecord.planetNode;
    this.planetname = data.editRecord.planetName;
    console.log(this.planetname);
    console.log(this.planetnode);
  }

  ngOnInit() {
  }

  planetUpdate(): void {
    this.planetdata.planetNode = this.planetnode;
    this.planetdata.planetName = this.planetname;
    console.log(this.planetdata);

    this.http.post('http://localhost:8080/createPlanet', this.planetdata)
        .subscribe(response => {
      console.log(response);
      alert("Planet Updated successfully");
    });
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
