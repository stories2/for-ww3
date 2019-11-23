import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number;
  lng: number;
  zoom: number;
  icon: any;

  constructor() {
    this.lat = 37.551171;
    this.lng = 126.9877188;
    this.zoom = 19;
    this.icon = {
      url: 'https://cdn4.iconfinder.com/data/icons/contact-us-19/48/35-512.png',
      scaledSize: {
        width: 40,
        height: 40
      }
    };
  }

  ngOnInit() {}
}
