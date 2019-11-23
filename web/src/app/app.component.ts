import { Component } from '@angular/core';

import { faBars, faCompressArrowsAlt, faCompress,
          faSync, faCrosshairs } from '@fortawesome/free-solid-svg-icons';

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
}
