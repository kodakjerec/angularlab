import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count = 0;

  /**
   * @description OnInit, reset count
   */
  ngOnInit(): void {
    this.count = 0;
  }

  /**
   * @description add count value
   */
  addCount() {
    this.count++;
  }

  /**
   * @description del count value
   */
  delCount() {
    this.count--;
  }
}
