import { Component } from '@angular/core';

import { faBars, faCompressArrowsAlt, faCompress,
          faSync, faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web';

  faBars = faBars;
  faCompressArrowsAlt = faCompressArrowsAlt;
  faCompress = faCompress;
  faSync = faSync;
  faCrosshairs = faCrosshairs;

  constructor(private dataService: DataService) {
    this.dataService.__mapModel = {
      lat: 37.551171,
      lng: 126.9877188,
      zoom: 19
    };
  }

  onRepositionBtnClicked() {
    this.dataService.__mapModel = {
      lat: 37.551171 + (Math.random() * 0.0000001),
      lng: 126.9877188 + (Math.random() * 0.0000001),
      zoom: 19 + (Math.random() * 0.0000001)
    };
  }
}
