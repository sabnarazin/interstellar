import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule,MatIconModule, MatButtonModule,MatToolbarModule,MatListModule,MatCardModule,
  MatDialogModule, MatInputModule, MatTableModule,MatSelectModule,
  MatMenuModule, MatProgressSpinnerModule } from '@angular/material';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,MatListModule,
    MatCardModule,MatDialogModule, MatInputModule, MatTableModule,
    MatMenuModule, MatProgressSpinnerModule,
    MatDialogModule
  ],
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,MatListModule,
    MatCardModule,MatDialogModule, MatInputModule, MatTableModule,
    MatMenuModule, MatProgressSpinnerModule,MatSelectModule,
    MatDialogModule
  ],
})
export class MaterialModule { }
