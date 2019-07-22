import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  public doHealthCheck() {
    this.http.get('api/another-test').subscribe(resp => {
      console.log(resp);
    });
  }
}
