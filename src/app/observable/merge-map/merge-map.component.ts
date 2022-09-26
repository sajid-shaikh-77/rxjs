import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css'],
})
export class MergeMapComponent implements OnInit {
  data1 = [];
  data2 = [];
  data3 = [];
  constructor() {}
  getData(data) {
    return of(data + ' Video Uploded');
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    // Ex - 01 | Map
    source.pipe(map((res) => this.getData(res))).subscribe((res) => {
      res.subscribe((res2) => this.data1.push(res2));
    });

    // Ex - 02 | MAp + MergeAll
    source
      .pipe(
        map((res) => this.getData(res)),
        mergeAll()
      )
      .subscribe((res) => {
        this.data2.push(res);
        // console.log(res);

        // subscribe((res2) => this.data2.push(res2));
      });
    // Ex - 03 | mergeMap
    source.pipe(mergeMap((res) => this.getData(res))).subscribe((res) => {
      this.data3.push(res);
      console.log(res);

      // subscribe((res2) => this.data2.push(res2));
    });
  }
}
