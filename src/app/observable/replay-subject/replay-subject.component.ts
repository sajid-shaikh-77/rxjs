import { Component, ElementRef, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { CommonService } from 'src/app/includes/common.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css'],
})
export class ReplaySubjectComponent implements OnInit {
  user1List = ['Angular 1', 'Angular 2'];
  user2List = [];
  user3List = [];

  // SubscribeModes
  subscribeMode2: boolean = false;
  subscribeMode3: boolean = false;

  //Subscription
  subscription2: Subscription;
  subscription3: Subscription;
  intSubscription: Subscription;

  // Toggle Property
  methodInterval: boolean = false;

  constructor(private comService: CommonService) {}

  ngOnInit(): void {
    this.comService.videoEmit.subscribe((res) => {
      this.user1List.push(res);
      console.log(res);
    });
  }

  onAdd(e) {
    this.comService.videoEmit.next(e.value);
    console.log(e.value);
  }

  user2Subscribe() {
    if (this.subscribeMode2) {
      this.subscription2.unsubscribe();
    } else {
      this.subscription2 = this.comService.videoEmit.subscribe((res) => {
        this.user2List.push(res);
        console.log(res);
      });
    }
    this.subscribeMode2 = !this.subscribeMode2;
  }

  user3Subscribe() {
    if (this.subscribeMode3) {
      this.subscription3.unsubscribe();
    } else {
      this.subscription3 = this.comService.videoEmit.subscribe((res) => {
        this.user3List.push(res);
        console.log(res);
      });
    }
    this.subscribeMode3 = !this.subscribeMode3;
  }

  toggleMethod() {
    const broadCast = interval(1000);
    if (!this.methodInterval) {
      this.intSubscription = broadCast.subscribe((res) => {
        this.comService.videoEmit.next('video' + res);
      });
    } else {
      this.intSubscription.unsubscribe();
    }
    this.methodInterval = !this.methodInterval;
  }
}
