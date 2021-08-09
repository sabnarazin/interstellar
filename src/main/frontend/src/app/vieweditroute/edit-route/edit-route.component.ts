import { Component, OnInit, inject, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { route } from 'src/app/model/route';
import { planet } from 'src/app/model/planet';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-planet',
  templateUrl: './edit-route.component.html',
  styleUrls: ['./edit-route.component.css']
})
export class EditRouteComponent implements OnInit {

  public planetFormGroup: FormGroup;
  public dataSource: any;
  planetdata = new route();
  planetOrigin = new planet();
  planetDestination = new planet();

  constructor(private router: Router,
              private http: HttpClient,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<EditRouteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    /* this.planetFormGroup = this.fb.group({
      planetnode: [data.planetNode, [Validators.required, Validators.minLength(5)]],
      planetname: [data.planetName, [Validators.required, Validators.minLength(5)]],
    }); */
    this.planetdata = data.editRecord;
    this.planetOrigin = data.editRecord;
    this.planetDestination = data.editRecord;
    console.log(this.planetOrigin);
    console.log(this.planetDestination);
  }

  ngOnInit() {
  }

  routeUpdate(): void {
    this.planetdata.planetOrigin = this.planetOrigin;
    this.planetdata.planetDestination = this.planetDestination;
    console.log(this.planetdata);

    this.http.post('http://localhost:8080/createRoute', this.planetdata)
        .subscribe(response => {
      console.log(response);
      alert("Route Updated successfully");
    });
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
