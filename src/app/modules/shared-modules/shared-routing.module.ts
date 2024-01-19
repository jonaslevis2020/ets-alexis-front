import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';


const routes: Routes = [
  { path: 'back-home', component: HomeComponent },
  // Add more routes here
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedRoutingModule { }
