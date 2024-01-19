import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ets-alexis-front';

  constructor(private router: Router) {}

  get currentRoute(){
    console.log(this.router.url)
    return this.router.url
  }

}
