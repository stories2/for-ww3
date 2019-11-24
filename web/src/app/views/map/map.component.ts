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
      url: 'https://firebasestorage.googleapis.com/v0/b/for-ww3.appspot.com/o/test-lab%2Fgame%20user.png?alt=media&token=f274ea01-ce82-48fe-a6c3-2244fb5ad926',
      scaledSize: {
        width: 96,
        height: 96
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

  onMapCenterChange(latLng) {
    console.log('changed lat lng', latLng);
  }
}
