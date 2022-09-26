import { Component, OnInit } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css'],
})
export class ConcatComponent implements OnInit {
  constructor() {}
  finalResult = [];

  ngOnInit(): void {
    const sourceTech = interval(1000).pipe(
      map((v) => 'Tech Video #' + (v + 1)),
      take(5)
    );
    const sourceComedy = interval(1000).pipe(
      map((v) => 'Comedy Video #' + (v + 1)),
      take(3)
    );
    const sourceNews = interval(1000).pipe(
      map((v) => 'News Video #' + (v + 1)),
      take(4)
    );
    // sourceTech.subscribe((res) => console.log(res));
    // sourceComedy.subscribe((res) => console.log(res));
    // sourceNews.subscribe((res) => console.log(res));

    // Concat
    const finalObs = concat(sourceTech, sourceComedy, sourceNews);
    finalObs.subscribe((res) => this.finalResult.push(res));
  }
}
