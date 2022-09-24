import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  exclusive: boolean = false;
  constructor(private cServise: CommonService) {}

  ngOnInit(): void {
    this.cServise.exclusive.subscribe((res) => {
      this.exclusive = res;
    });
  }
}
