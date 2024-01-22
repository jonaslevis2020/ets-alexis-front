import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  username: string = '';
  url: string = `http://127.0.0.1:8000/users/`;

  constructor(private http: HttpClient) {}
  public async getUsers() {
    this.url = `${this.url}?username=${this.username}`
    console.log(`Url ==> ${this.url}`);
    console.log(`Username ==> ${this.username}`);
    this.http.get(this.url).subscribe((data) => {
      // handle the data
      console.log(data);
    });
    this.url = `http://127.0.0.1:8000/users/`;
  }
}
