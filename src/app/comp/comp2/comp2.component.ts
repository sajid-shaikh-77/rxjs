import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/includes/common.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component implements OnInit {
  username: string = 'Sajid';
  @ViewChild('comp2Input') comp2Input: ElementRef;
  constructor(private comServise: CommonService) {
    this.comServise.username.subscribe((res) => {
      this.username = res;
    });
  }

  ngOnInit(): void {}
  onChange(event) {
    this.comServise.username.next(event.value);
  }
}
