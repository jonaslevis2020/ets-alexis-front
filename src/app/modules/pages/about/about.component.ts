import { Component, OnInit } from '@angular/core';
import { GetCurrentRouteService } from './../../../services/get-current-route.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {

  constructor(private currentRouteService: GetCurrentRouteService) {}

}
