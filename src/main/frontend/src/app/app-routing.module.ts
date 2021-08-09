import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPlanetComponent } from './addplanet/addplanet.component';
import { RouteViewEditComponent } from './vieweditroute/vieweditroute.component';
//import { EditTrafficComponent } from './viewedittraffic/viewedittraffic.component';
import { AddRouteComponent } from './addroute/addroute.component';
import { ShortpathComponent } from './shortpath/shortpath.component';
import { AddTrafficComponent } from './addtraffic/addtraffic.component';
import { PlanetViewEditComponent } from './vieweditplanet/vieweditplanet.component';
import { TrafficViewEditComponent } from './viewedittraffic/viewedittraffic.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { LayoutComponent } from './layout/layout.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      /* { path: 'login', component: LoginComponent }, */
      { path: 'addplanet', component: AddPlanetComponent },
      { path: 'addroute', component: AddRouteComponent },
      { path: 'shortpath', component: ShortpathComponent },
      { path: 'addtraffic', component: AddTrafficComponent },
      { path: 'vieweditplanet', component: PlanetViewEditComponent },
      { path: 'vieweditroute', component: RouteViewEditComponent },
      { path: 'viewedittraffic', component: TrafficViewEditComponent },

      //{ path: '', component: LoginComponent},
      { path: '', component: DashboardComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [CommonModule,
  RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }







