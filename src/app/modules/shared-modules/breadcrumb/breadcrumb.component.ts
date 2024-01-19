import { Component, Input } from '@angular/core';
import { GetCurrentRouteService } from 'src/app/services/get-current-route.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  title: string = '';

  constructor(private currentRouteService: GetCurrentRouteService) {
    this.title = currentRouteService.currentRoute;
    this.title = this.title.slice(1, this.title.length)
  }
}
