import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';

import { AboutModule } from './modules/pages/about/about.module';
import { ContactModule } from './modules/pages/contact/contact.module';
import { HomeModule } from './modules/pages/home/home.module';
import { ProjectsModule } from './modules/pages/projects/projects.module';
import { ServicesOfferedModule } from './modules/pages/services-offered/services-offered.module';
import { SharedModulesModule } from './modules/shared-modules/shared-modules.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    // custom modules,
    HomeModule,
    AboutModule,
    ServicesOfferedModule,
    ProjectsModule,
    ContactModule,
    SharedModulesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
