import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>();
  rates: number[] = [1, 2, 3, 4, 5];

  rate = 0;

  previousRate = 0;

  constructor() { }

  ngOnInit() {
  }

  setRate(rate: number) {
    this.rate = rate;
    this.previousRate = undefined;

    this.rated.emit(this.rate);
  }

  setPreviousRate(rate: number) {
    if (!this.previousRate) {
      this.previousRate = this.rate;
    }
    this.rate = rate;
  }

  clearPreviousRate() {
    if (this.previousRate) {
      this.rate = this.previousRate;
      this.previousRate = undefined;
    }
  }

}
