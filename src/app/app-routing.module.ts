import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { AboutComponent } from './modules/pages/about/about.component';
import { ServicesOfferedComponent } from './modules/pages/services-offered/services-offered.component';
import { ProjectsComponent } from './modules/pages/projects/projects.component';
import { ContactComponent } from './modules/pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'accueil', component: HomeComponent },
  { path: 'apropos', component: AboutComponent },
  { path: 'services', component: ServicesOfferedComponent },
  { path: 'projets', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
