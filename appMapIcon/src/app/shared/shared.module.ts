import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule, MatIconModule, MatButtonModule,
  MatToolbarModule, MatMenuModule, MatDividerModule, MatListModule, MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ],
  exports: [
    MatSidenavModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ]
})
export class SharedModule { }
