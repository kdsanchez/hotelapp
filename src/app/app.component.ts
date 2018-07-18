import { Component } from '@angular/core';
import { Photos } from './models/photos';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kevin Sánchez';
  photos: Array<Photos>;

  constructor(private http: Http ) {
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe(resp => this.photos = resp.json());

  }
}
