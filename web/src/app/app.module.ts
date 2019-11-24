import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatSidenavModule, MatIconModule, MatButtonModule,
          MatListModule, MatToolbarModule } from '@angular/material';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './views/map/map.component';
import { ErrorComponent } from './views/error/error.component';
import { MyInfoComponent } from './views/my-info/my-info.component';
import { AttackStatusComponent } from './views/attack-status/attack-status.component';
import { HistoryComponent } from './views/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ErrorComponent,
    MyInfoComponent,
    AttackStatusComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

    BrowserAnimationsModule,

    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,

    FontAwesomeModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB3FYRULDlTqMkdGSfifvCd51fMwLVwCMs'
      /* apiKey is required, unless you are a 
      premium customer, in which case you can 
      use clientId 
      */
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
