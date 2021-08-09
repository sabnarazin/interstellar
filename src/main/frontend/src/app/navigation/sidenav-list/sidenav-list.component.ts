import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor(private router: Router, private auth: UserService) { }

  ngOnInit() {
  }

  public logout = () => {
    this.sidenavClose.emit();
    console.log("Navigated to Logout");
    this.auth.logout();
    //this.router.navigate(['metric']).then( (e) => {
    //  if (e) {
    //    console.log("Navigation is successful!");
    //  } else {
    //    console.log("Navigation has failed!");
    //  }
    //});
    //this.router.navigate(['../../metric']);
  }
  click1() : void {
    this.router.navigate(['dashboard']);
  }
  click2() : void {
    this.router.navigate(['addplanet']);
  }
  click3() : void {
    this.router.navigate(['addroute']);
  }
  click4() : void {
    this.router.navigate(['addtraffic']);
  }
  click5() : void {
    this.router.navigate(['vieweditplanet']);
  }
  click6() : void {
    this.router.navigate(['vieweditroute']);
  }
  click7() : void {
    this.router.navigate(['viewedittraffic']);
  }


}
