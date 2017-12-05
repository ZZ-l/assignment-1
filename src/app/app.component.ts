import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onStarted(reference: number) {
    if ( reference % 2 === 1) {
      this.oddNumbers.push(reference);
    } else {
      this.evenNumbers.push(reference);
    }
  }
}
