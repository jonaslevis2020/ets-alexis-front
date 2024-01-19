import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { SharedModulesModule } from '../../shared-modules/shared-modules.module';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    SharedModulesModule,
  ],
  exports:[AboutComponent]
})
export class AboutModule { }
