import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  dataArr = [
    {
      id: 1,
      name: 'Irwinn',
      gender: 'Male',
    },
    {
      id: 2,
      name: 'King',
      gender: 'Male',
    },
    {
      id: 3,
      name: 'Grantham',
      gender: 'Male',
    },
    {
      id: 4,
      name: 'Christabella',
      gender: 'Female',
    },
    {
      id: 5,
      name: 'Sadella',
      gender: 'Female',
    },
    {
      id: 6,
      name: 'Seamus',
      gender: 'Male',
    },
    {
      id: 7,
      name: 'Perry',
      gender: 'Male',
    },
    {
      id: 8,
      name: 'Rickie',
      gender: 'Male',
    },
    {
      id: 9,
      name: 'Nolan',
      gender: 'Male',
    },
    {
      id: 10,
      name: 'Selle',
      gender: 'Female',
    },
  ];

  example1;
  example2;
  example3;
  constructor() {}

  ngOnInit(): void {
    const source = from(this.dataArr);

    // Ex - 01 Filter by Length
    source
      .pipe(
        filter((item) => item.name.length > 6),
        toArray()
      )
      .subscribe((res) => {
        this.example1 = res;
        console.log(res);
      });

    // Ex - 02 Filter by Length
    source
      .pipe(
        filter((item) => item.gender === 'Male'),
        toArray()
      )
      .subscribe((res) => {
        this.example2 = res;
        console.log(res);
      });

    // Ex - 03 Filter by nth item
    source
      .pipe(
        filter((item) => item.id <= 6),
        toArray()
      )
      .subscribe((res) => {
        this.example3 = res;
        console.log(res);
      });
  }
}
