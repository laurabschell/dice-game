import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dice-game';

  leftDice = '../assets/img/dice1.png';
  rightDice = '../assets/img/dice4.png';

  first: number = 1;
  second: number = 0;

  rollDice(): void {
    this.first = Math.round(Math.random()*5) + 1;
    this.second = Math.round(Math.random()*5) + 1;

    this.leftDice = '../assets/img/dice' + this.first + '.png';
    this.rightDice = '../assets/img/dice' + this.first + '.png';
  }
}
