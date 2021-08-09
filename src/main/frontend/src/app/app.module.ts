import { BrowserModule } from '@angular/platform-browser';
import { NgModule,TemplateRef } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AddPlanetComponent } from './addplanet/addplanet.component';
import { AddRouteComponent } from './addroute/addroute.component';
import { ShortpathComponent } from './shortpath/shortpath.component';
import { AddTrafficComponent } from './addtraffic/addtraffic.component';
import { PlanetViewEditComponent } from './vieweditplanet/vieweditplanet.component';
import { EditableComponent } from './editable/editable.component';
import { EditableOnEnterDirective } from './editable/edit-on-enter.directive';
import { ViewModeDirective } from './editable/view-mode.directive';
import { EditModeDirective } from './editable/edit-mode.directive';
import { UserService } from 'src/app/service/user.service';
import { RouteViewEditComponent } from './vieweditroute/vieweditroute.component';
import { TrafficViewEditComponent } from './viewedittraffic/viewedittraffic.component';
import { EditPlanetComponent } from './vieweditplanet/edit-planet/edit-planet.component';
//import { EditTrafficComponent } from './viewedittraffic/viewedittraffic.component';

//import {HttpClientModule} from '@angular/common/http';
//import {HttpModule} from '@angular/http'
//import {RequestOptions} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavListComponent,
    AddPlanetComponent,
    AddRouteComponent,
    ShortpathComponent,
    AddTrafficComponent,
    PlanetViewEditComponent,
    RouteViewEditComponent,
    EditableComponent,EditableOnEnterDirective,ViewModeDirective,EditModeDirective, TrafficViewEditComponent, EditPlanetComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,HttpClientModule,
    FlexLayoutModule,FormsModule,BrowserModule,ReactiveFormsModule
  ],
  providers: [UserService],
  entryComponents: [EditPlanetComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
