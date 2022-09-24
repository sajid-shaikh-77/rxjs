import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/includes/common.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  username: string = 'Sajid';
  @ViewChild('comp1Input') comp1Input: ElementRef;
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
