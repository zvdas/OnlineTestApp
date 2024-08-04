import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {
  private currentDateSubject: BehaviorSubject<Date> = new BehaviorSubject(new Date());
  public currentDate$ = this.currentDateSubject.asObservable();

  constructor() {
    // update the current date every second
    setInterval(() => {
      this.currentDateSubject.next(new Date());
    }, 1000);
  }
}
