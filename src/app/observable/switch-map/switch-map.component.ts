import { Component, OnInit } from '@angular/core';
import {
  of,
  from,
  map,
  mergeAll,
  mergeMap,
  switchAll,
  delay,
  switchMap,
  pipe,
  concatMap,
} from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css'],
})
export class SwitchMapComponent implements OnInit {
  data1 = [];
  data2 = [];
  data3 = [];
  mergeMapData = [];
  conctaMapData = [];
  switchMapData = [];

  constructor() {}
  getData(data) {
    return of(data + ' Video Uploded').pipe(delay(1000));
  }
  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);
    // Ex - 01 | Map
    source.pipe(map((res) => this.getData(res))).subscribe((res) => {
      res.subscribe((res2) => this.data1.push(res2));
    });

    // Ex - 02 | MAp + SwitchAll
    source
      .pipe(
        map((res) => this.getData(res)),
        switchAll()
      )
      .subscribe((res) => {
        this.data2.push(res);
        // console.log(res);

        // subscribe((res2) => this.data2.push(res2));
      });
    // Ex - 03 | switchMap
    source.pipe(switchMap((res) => this.getData(res))).subscribe((res) => {
      this.data3.push(res);
      // console.log(res);

      // subscribe((res2) => this.data2.push(res2));
    });

    // mergeMap
    source
      .pipe(mergeMap((v) => this.getData(v)))
      .subscribe((res) => this.mergeMapData.push(res));
    // concatMap
    source
      .pipe(concatMap((v) => this.getData(v)))
      .subscribe((res) => this.conctaMapData.push(res));
    // switchMap
    source
      .pipe(switchMap((v) => this.getData(v)))
      .subscribe((res) => this.switchMapData.push(res));
  }
}
