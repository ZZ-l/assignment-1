import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { setInterval, clearInterval } from 'timers';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() onStarted = new EventEmitter<any>();
  @Output() onStopped = new EventEmitter<any>();
  interval;
  updatedRef = 0;

  constructor() { }

  ngOnInit() {
  }

  updateRef() {
    this.interval = setInterval(() => {
      this.onStarted.emit(this.updatedRef + 1);
      this.updatedRef++;
    }, 1000);
  }

  stopUpdateRef() {
    clearInterval(this.interval);
  }
 }
