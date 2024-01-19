import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GetCurrentRouteService {
  constructor(private router: Router) {}

  get currentRoute() {
    console.log(this.router.url);
    return this.router.url;
  }
}
