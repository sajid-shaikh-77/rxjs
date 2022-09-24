import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/includes/common.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css'],
})
export class Comp3Component implements OnInit {
  username: string = 'Sajid';
  @ViewChild('comp3Input') comp3Input: ElementRef;
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
