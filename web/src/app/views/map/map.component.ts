import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy, OnChanges {

  mapModel: MapModel;
  icon: any;

  mapModelSubscription: Subscription;

  constructor(private dataService: DataService) {

    this.mapModel = {
      lat: 0,
      lng: 0,
      zoom: 0
    } as MapModel;

    this.icon = {
      url: 'https://cdn4.iconfinder.com/data/icons/contact-us-19/48/35-512.png',
      scaledSize: {
        width: 40,
        height: 40
      }
    };
  }

  ngOnInit() {
    this.onMapChangeListener();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('map', this.mapModel);
  }

  ngOnDestroy(): void {
    this.mapModelSubscription.unsubscribe();
  }

  onMapChangeListener() {
    this.mapModelSubscription = this.dataService._mapModel
      .subscribe(map => {
        this.mapModel = map;
        console.log('map sub', this.mapModel);
      });
  }
}
