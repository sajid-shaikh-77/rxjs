import { Component, OnInit } from '@angular/core';
import {
  from,
  fromEvent,
  interval,
  map,
  take,
  takeLast,
  takeUntil,
  toArray,
} from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css'],
})
export class TakeComponent implements OnInit {
  constructor() {}
  namesData;
  namesData1;
  namesData2;
  name = [
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

  ngOnInit(): void {
    const nameSource = from(this.name);

    const source = interval(1000);
    // .pipe(take(4));
    // source.subscribe((res) => {
    //   console.log(res);
    // });

    // EX - 01 Take (5)

    nameSource.pipe(take(5), toArray()).subscribe((res) => {
      this.namesData = res;
      console.log(res);
    });

    // EX - 02 Takelast (5)

    nameSource.pipe(takeLast(5), toArray()).subscribe((res) => {
      this.namesData1 = res;
      console.log(res);
    });

    // EX - 02 Take Until
    let condition = fromEvent(document, 'click');
    source
      .pipe(
        takeUntil(condition),
        map((item) => [item])
      )
      .subscribe((res) => {
        this.namesData2 = res;
        console.log(res);
      });
  }
}
