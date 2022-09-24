import { Component, OnInit } from '@angular/core';
import { from, interval, map, take, tap, toArray } from 'rxjs';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent implements OnInit {
  constructor() {}
  data;
  ngOnInit(): void {
    const arr = [
      'Marlie',
      'Emmalee',
      'Alexander',
      'Towny',
      'Harwell',
      'Priscilla',
      'Corabella',
      'Trish',
      'Deck',
      'Glenda',
    ];
    const source = from(arr);
    source
      .pipe(
        map((item) => {
          console.log(arr[item]), console.log([item]);
          // return [arr[item]];
          return [item];
        }),
        take(10),
        toArray()
        // tap((res) => console.log(res))
      )
      .subscribe((res) => {
        this.data = res;
        console.log(this.data);
      });
  }
}
