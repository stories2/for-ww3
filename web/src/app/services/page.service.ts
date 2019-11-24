import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  lastEnteredMenu: any;

  constructor(private router: Router, public zone: NgZone) { }

  set _lastEnteredMenu(lastEnteredMenu: any) {
    this.lastEnteredMenu = lastEnteredMenu;
  }

  get _lastEnteredMenu() {
    return this.lastEnteredMenu;
  }

  moveTo(url: string) {
    this.zone.run(() => { this.router.navigate([url]); });
  }
}
