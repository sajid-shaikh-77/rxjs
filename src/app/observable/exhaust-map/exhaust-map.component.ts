import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { concatMap, exhaustMap, from, fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.css'],
})
export class ExhaustMapComponent implements OnInit, AfterViewInit {
  url = 'https://global-1bb0f.firebaseio.com/exhaustMap.json';
  num = 0;
  @ViewChild('btn') btn: ElementRef;
  saveRequest;
  fething = false;

  constructor(private http: HttpClient) {}
  // btnClick() {
  //   this.num++;
  //   this.onSave().subscribe((res) => console.log(res));
  // }

  ngAfterViewInit(): void {
    fromEvent(this.btn.nativeElement, 'click')
      .pipe(exhaustMap(() => this.onSave(this.num++)))
      .subscribe((res) => {
        console.log(res);
        this.onFetch();
      });
  }
  onSave(change) {
    return this.http.put(this.url, { data: this.num });
  }
  onFetch() {
    this.http.get<any>(this.url).subscribe((res) => {
      console.log(res.data);
      this.saveRequest = res.data;
    });
  }
  ngOnInit(): void {}
}
