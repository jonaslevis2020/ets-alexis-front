import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SharedModulesComponent } from './shared-modules.component';
import { SharedRoutingModule } from './shared-routing.module';
import { TestimonialsComponent } from './testimonials/testimonials.component';



@NgModule({
  declarations: [
    SharedModulesComponent,
    TestimonialsComponent,
    BreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports:[
    TestimonialsComponent,
    BreadcrumbComponent
  ]
})
export class SharedModulesModule { }
