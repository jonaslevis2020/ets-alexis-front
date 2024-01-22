import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-services-offered',
  templateUrl: './services-offered.component.html',
  styleUrls: ['./services-offered.component.scss']
})
export class ServicesOfferedComponent implements OnInit{
  url: string = `http://127.0.0.1:8000/services/`;
  services: any
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getServices()
  }

  getServices() {
    this.http.get(this.url).subscribe((data) => {
      this.services = data
      console.log(data)
    });
  }

}
