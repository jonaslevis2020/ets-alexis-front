import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { SharedModulesModule } from '../../shared-modules/shared-modules.module';




@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    SharedModulesModule,
  ],
  exports:[
    ProjectsComponent
  ]
})
export class ProjectsModule { }
