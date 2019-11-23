import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './views/error/error.component';
import { MapComponent } from './views/map/map.component';

const routes: Routes = [
  {
    path: 'map',
    component: MapComponent,
    data: { title: 'Map' }
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
