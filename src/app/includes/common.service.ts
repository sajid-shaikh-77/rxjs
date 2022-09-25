import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  exclusive = new Subject<boolean>();
  username = new Subject<string>();
  // username1 = new BehaviorSubject<string>(value => last one);
  videoEmit = new ReplaySubject<string>(5);
  // ReplaySubject<string>(5=> Values , 5000 => time);
  constructor() {}
}
