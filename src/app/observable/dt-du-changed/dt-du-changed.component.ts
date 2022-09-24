import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, pipe } from 'rxjs';

@Component({
  selector: 'app-dt-du-changed',
  templateUrl: './dt-du-changed.component.html',
  styleUrls: ['./dt-du-changed.component.css'],
})
export class DtDuChangedComponent implements OnInit, AfterViewInit {
  @ViewChild('myInput') myInput: ElementRef;
  @ViewChild('myInput2') myInput2: ElementRef;
  data;
  data2;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Ex -01
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup');
    searchTerm
      .pipe(
        map((e) => e.target.value),
        debounceTime(1000)
      )
      .subscribe((res) => {
        this.data2 = res;
        console.log(res);
      });

    // Ex - 02

    const searchTerm2 = fromEvent<any>(this.myInput.nativeElement, 'keyup');
    searchTerm
      .pipe(
        map((e) => e.target.value),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((res) => {
        this.data2 = res;
        console.log(res);
      });
  }
}
