import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private mapModel: BehaviorSubject<MapModel>;

  constructor() {
    this.mapModel = new BehaviorSubject<MapModel>({
      lat: 0,
      lng: 0,
      zoom: 0
    });
  }

  get _mapModel() {
    return this.mapModel;
  }

  set __mapModel(mapModel: MapModel) {
    this.mapModel.next(mapModel);
  }
}
