import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesOfferedComponent } from './services-offered.component';
import { SharedModulesModule } from '../../shared-modules/shared-modules.module';



@NgModule({
  declarations: [
    ServicesOfferedComponent
  ],
  imports: [
    CommonModule,
    SharedModulesModule,
  ],
  exports:[
    ServicesOfferedComponent
  ]
})
export class ServicesOfferedModule { }
