import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, of } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css'],
})
export class ConcatMapComponent implements OnInit {
  data1 = [];
  data2 = [];
  data3 = [];
  constructor() {}
  getData(data) {
    return of(data + ' Video Uploded').pipe(delay(2000));
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    // Ex - 01 | Map
    source.pipe(map((v) => this.getData(v))).subscribe((res) => {
      res.subscribe((res2) => {
        this.data1.push(res2);
        // console.log(res2, '<=res2');
      });
    });

    // Ex - 02 | Map + concatAll
    source
      .pipe(
        map((v) => this.getData(v)),
        concatAll()
      )
      .subscribe((res) => {
        this.data2.push(res);
        console.log(res);
      });

    // Ex - 03 |concatMap
    source.pipe(concatMap((v) => this.getData(v))).subscribe((res) => {
      this.data3.push(res);
      console.log(res);
    });
  }
}
