import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

import { PeriodicElement } from '../model/periodic';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  list: PeriodicElement[] = [
    { position: 1, metric: '% Defect Free Deliverables', current: 0.0, previous: 0.0,avg:0.0,remarks:"test" },
    { position: 2, metric: '% Rework', current: 0.0, previous: 0.0,avg:0.0,remarks:"test" },
    { position: 3, metric: 'Peer review', current: 0.0, previous: 0.0,avg:0.0,remarks:"test" },
    { position: 4, metric: 'Defect Ratio', current: 0.0, previous: 0.0,avg:0.0,remarks:"test" },
    { position: 5, metric: 'Productivity Metrics', current: 0.0, previous: 0.0,avg:0.0,remarks:"test" },
    { position: 6, metric: 'No. of Lines  per week', current: 0.0, previous: 0.0,avg:0.0,remarks:"test" },
    { position: 7, metric: 'No. of Client Appreciations', current: 0.0, previous: 0.0,avg:0.0,remarks:"test" },
    { position: 8, metric: 'No. of issues raised by customer', current: 0.0, previous: 0.0,avg:0.0,remarks:"test" },
    { position: 9, metric: 'No. of Reusable assets created', current: 0.0, previous: 0.0,avg:0.0,remarks:"test" },
    { position: 10, metric: 'No. of value adds suggested', current: 0.0, previous: 0.0,avg:0.0,remarks:"test" },
    { position: 11, metric: 'Associates Aspirations', current: 0.0, previous: 0.0,avg:0.0,remarks:"test" },
    { position: 12, metric: 'Vendor/Supplier Interactions (Project related)', current: 0.0, previous: 0.0,avg:0.0,remarks:"test" }
  ];
  list$: BehaviorSubject<PeriodicElement[]> = new BehaviorSubject(this.list);

  constructor() {
  }


  update(index, field, value) {
    this.list = this.list.map((e, i) => {
      if (index === i) {
        return {
          ...e,
          [field]: value
        }
      }
      return e;
    });
    this.list$.next(this.list);
  }

  getControl(index, fieldName) {
  }



}