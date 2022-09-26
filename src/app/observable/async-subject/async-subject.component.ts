import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/includes/common.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css'],
})
export class AsyncSubjectComponent implements OnInit {
  asyncVideoEmit;
  constructor(private comService: CommonService) {}

  ngOnInit(): void {
    this.comService.asyncVideoEmit.subscribe((res) => {
      this.asyncVideoEmit = res;
    });
  }

  onAdd(e) {
    this.comService.asyncVideoEmit.next(e.value);
    console.log(e.value);
  }

  onComplete() {
    this.comService.asyncVideoEmit.complete();
  }
}
