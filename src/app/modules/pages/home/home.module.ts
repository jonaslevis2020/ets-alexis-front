import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetStartedComponent } from './get-started/get-started.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';

import { SharedModulesModule } from '../../shared-modules/shared-modules.module';


@NgModule({
 declarations: [
   HeroComponent,
   HomeComponent,
   MainComponent,
   GetStartedComponent,
 ],
 imports: [
   CommonModule,
   SharedModulesModule,
   FormsModule,
 ],
 exports:[HomeComponent]
})
export class HomeModule { }
