import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from 'src/app/includes/common.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit, OnDestroy {
  exclusive;
  userName: string = 'Sajid';
  constructor(private cServise: CommonService) {
    this.cServise.username.subscribe((res) => {
      this.userName = res;
      console.log(res);
    });
  }

  ngOnInit(): void {
    this.cServise.exclusive.next(true);
  }

  ngOnDestroy(): void {
    this.cServise.exclusive.next(false);
  }
}
