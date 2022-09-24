import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css'],
})
export class IntervalComponent implements OnInit {
  message: any;
  vsub!: Subscription;
  constructor() {}

  ngOnInit(): void {
    const BroadCast = interval(1000);
    this.vsub = BroadCast.subscribe((res) => {
      this.message = 'video' + res;
      console.log(res);
      if (res >= 5) {
        this.vsub.unsubscribe();
      }
    });
  }
}
