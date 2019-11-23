import { Component } from '@angular/core';

import { faBars, faCompressArrowsAlt, faCompress,
          faSync, faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { DataService } from './services/data.service';
import { GpsService } from './services/gps.service';

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

  constructor(private dataService: DataService, private gpsService: GpsService) {
    this.updateLoc();
  }

  onRepositionBtnClicked() {
    this.updateLoc();
  }

  updateLoc() {
    this.gpsService.getLocation()
      .then(pos => {
        console.log('loc', pos);
        this.dataService.__mapModel = {
          lat: pos.lat + (Math.random() * 0.0000001),
          lng: pos.lng + (Math.random() * 0.0000001),
          zoom: 19 + (Math.random() * 0.0000001)
        };
      })
      .catch(err => {
        console.error('loc', err);
      });
  }
}
