import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription, toArray } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  sub1: Subscription;
  sub2: Subscription;
  msg1;
  msg2;
  msg3;
  constructor() {}

  ngOnInit(): void {
    // Ex - 01
    const broadCastVideo1 = interval(1000);
    this.sub1 = broadCastVideo1
      .pipe(map((data) => 'Videos' + data))
      .subscribe((res) => {
        this.msg1 = res;
        console.log(res);
      });
    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 9000);

    // Ex - 02

    const broadCastVideo2 = interval(1000);
    this.sub2 = broadCastVideo2
      .pipe(map((data) => data * 10))
      .subscribe((res) => {
        this.msg2 = res;
        console.log(res);
      });

    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 9000);

    // Ex - 03

    const members = from([
      {
        id: 1,
        name: 's',
      },
      {
        id: 2,
        name: 'a',
      },
      {
        id: 3,
        name: 'j',
      },
      {
        id: 4,
        name: 'i',
      },
      {
        id: 5,
        name: 'd',
      },
      {
        id: 6,
        name: 'x',
      },
      {
        id: 7,
        name: 'y',
      },
    ]);
    // let data = from(members);
    members
      .pipe(
        map((data) => data.name),
        toArray()
      )
      .subscribe((res) => {
        this.msg3 = res;
        console.log(res);
      });
  }
}
