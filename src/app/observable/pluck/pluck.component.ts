import { Component, OnInit } from '@angular/core';
import { from, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css'],
})
export class PluckComponent implements OnInit {
  constructor() {}
  userData;
  userData2;

  users = from([
    {
      job: {
        title: 'Frontend Developer',
        exp: 5,
      },
      username: 'Jon',
      genrePref: 'rock',
    },
    {
      job: {
        title: 'Backend Developer',
        exp: 5,
      },
      username: 'Lucy',
      genrePref: 'pop',
    },
    {
      job: {
        title: 'java Developer',
        exp: 5,
      },
      username: 'Mike',
      genrePref: 'abc',
    },
    {
      job: {
        title: 'html Developer',
        exp: 5,
      },
      username: 'Luke',
      genrePref: 'poc',
    },
    {
      job: {
        title: 'python Developer',
        exp: 5,
      },
      username: 'James',
      genrePref: 'sds',
    },
    {
      job: {
        title: 'javadcript Developer',
        exp: 5,
      },
      username: 'Dave',
      genrePref: 'rt',
    },
    {
      job: {
        title: 'react Developer',
        exp: 5,
      },
      username: 'Sarah',
      genrePref: 'ertert',
    },
    {
      job: {
        title: 'angular Developer',
        exp: 5,
      },
      username: 'Natalie',
      genrePref: 'hrth',
    },
  ]);

  ngOnInit(): void {
    //  EX -01
    this.users.pipe(pluck('username'), toArray()).subscribe((res) => {
      this.userData = res;
      console.log(res);
    });
    //  EX -02
    this.users.pipe(pluck('job', 'title'), toArray()).subscribe((res) => {
      this.userData2 = res;
      console.log(res);
    });
  }
}
