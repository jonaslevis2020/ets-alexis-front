import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { SharedModulesModule } from '../../shared-modules/shared-modules.module';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModulesModule,
  ],
  exports:[
    ContactComponent
  ]
})
export class ContactModule { }
