import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  delay,
  filter,
  map,
  pipe,
  retry,
  retryWhen,
  scan,
  toArray,
} from 'rxjs';
@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css'],
})
export class RetryComponent implements OnInit {
  constructor(private http: HttpClient) {}
  product;

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http
      .get('https://dummyjson.com/products')
      .pipe(
        // retry(4),
        retryWhen((err) =>
          err.pipe(
            delay(3000),
            scan((retryCount) => {
              if (retryCount >= 5) {
                throw err;
              } else {
                retryCount = retryCount + 1;
                console.log(retryCount, 'retryCount');
                return retryCount;
              }
            }, 0)
          )
        )
      )
      .subscribe((res) => {
        this.product = res;
        console.log(res);
        console.log(typeof res);
      });
  }
}
