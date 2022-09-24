import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css'],
})
export class ToArrayComponent implements OnInit {
  constructor() {}
  user = [
    { name: 'abc', skill: '123' },
    { name: 'def', skill: '456' },
    { name: 'efg', skill: '789' },
  ];
  sourceUnSub: Subscription;
  ngOnInit(): void {
    // Ex - 01
    const source = interval(1000);
    this.sourceUnSub = source.pipe(take(5), toArray()).subscribe((res) => {
      console.log(res);
      // if (res >= 7) {
      //   this.sourceUnSub.unsubscribe();
      // }
    });

    // Ex - 02
    const source2 = from(this.user);
    source2.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });

    // Ex - 03

    const source3 = of('a', 'b', 'c', 'd');
    source3.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });
  }
}
