import { Component, OnDestroy, OnInit } from '@angular/core';
import { observable, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css'],
})
export class CustomObservableComponent implements OnInit, OnDestroy {
  cusObs2Sub: Subscription;
  names = '';

  constructor() {}

  ngOnInit(): void {
    // Ex -01 (Manual)

    const cusObs1 = Observable.create((observer) => {
      setTimeout(() => {
        observer.next('Data Emit 1');
      }, 1000);
      setTimeout(() => {
        observer.next('Data Emit 2');
      }, 1000);
      setTimeout(() => {
        observer.next('Data Emit 3');
        observer.complete();
      }, 1000);
      setTimeout(() => {
        observer.next('Data Emit 4');
        observer.error('data exit');
      }, 1000);
      setTimeout(() => {
        observer.next('Data Emit 5');
      }, 1000);
      setTimeout(() => {
        observer.next('Data Emit 6');
      }, 1000);
      // observer.error();
      // observer.complete();
      console.log(observer);
    });

    cusObs1.subscribe((res) => {
      console.log(res);
    });

    // Ex - 02 (Custom Interval)

    const cusObs2 = Observable.create((observer) => {
      let count = 1;
      setInterval(() => {
        observer.next('data emit' + count);

        // if (count >= 5) {
        //   // observer.error('error');
        // }
        // if (count >= 10) {
        //   observer.complete();
        // }
        count++;
      }, 1000);
    });

    this.cusObs2Sub = cusObs2.subscribe((res) => {
      // console.log(res);
    });
    // Ex - 03 (Random Names)
    const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
    const cusObs3 = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(arr[count]);

        if (count >= 5) {
          observer.complete();
        }
        count++;
      }, 1000);
    });
    cusObs3.subscribe((res) => {
      this.names = res;
      console.log(res);
    });
  }
  ngOnDestroy(): void {
    this.cusObs2Sub.unsubscribe();
  }
}
