import { Router } from '@angular/router';

export class GetNavigatedRoute {
  constructor(private router: Router) {}
  get currentRoute() {
    console.log(this.router.url);
    return this.router.url;
  }
}
