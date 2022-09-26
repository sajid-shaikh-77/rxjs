import { Component, OnInit } from '@angular/core';
import { interval, map, take, concat, merge } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css'],
})
export class MergeComponent implements OnInit {
  finalResult = [];
  constructor() {}

  ngOnInit(): void {
    const sourceTech = interval(3000).pipe(
      map((v) => 'Tech Video #' + (v + 1)),
      take(5)
    );
    const sourceComedy = interval(6000).pipe(
      map((v) => 'Comedy Video #' + (v + 1)),
      take(3)
    );
    const sourceNews = interval(3500).pipe(
      map((v) => 'News Video #' + (v + 1)),
      take(4)
    );
    // sourceTech.subscribe((res) => console.log(res));
    // sourceComedy.subscribe((res) => console.log(res));
    // sourceNews.subscribe((res) => console.log(res));

    // Concat
    const finalObs = merge(sourceTech, sourceComedy, sourceNews);
    finalObs.subscribe((res) => this.finalResult.push(res));
  }
}
