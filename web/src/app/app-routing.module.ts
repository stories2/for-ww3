import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './views/error/error.component';
import { MapComponent } from './views/map/map.component';
import { MyInfoComponent } from './views/my-info/my-info.component';
import { AttackStatusComponent } from './views/attack-status/attack-status.component';
import { HistoryComponent } from './views/history/history.component';

const routes: Routes = [
  {
    path: 'map',
    component: MapComponent,
    data: { title: 'Map' }
  },
  {
    path: 'my-info',
    component: MyInfoComponent,
    data: { title: 'My Info' }
  },
  {
    path: 'attack-status',
    component: AttackStatusComponent,
    data: { title: 'Attack Status' }
  },
  {
    path: 'history',
    component: HistoryComponent,
    data: { title: 'History' }
  },
  { path: '',
    redirectTo: '/map',
    pathMatch: 'full'
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
