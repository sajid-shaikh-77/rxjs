import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.css'],
})
export class FromeventComponent implements OnInit, AfterViewInit {
  @ViewChild('addBtn') addBtn!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res) => {
      console.log(res);
    });
  }
}
