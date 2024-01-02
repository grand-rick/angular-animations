import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  animate,
  transition,
  style,
  keyframes,
} from '@angular/animations';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  animations: [
    trigger('animateArc', [
      state(
        'true',
        style({
          left: '400px',
          top: '200px',
        })
      ),
      state(
        'false',
        style({
          left: '0',
          top: '200px',
        })
      ),
      transition(
        'false => true',
        animate(
          '1000ms linear',
          keyframes([
            style({ left: '0', top: '200px', offset: 0 }),
            style({ left: '200px', top: '100px', offset: 0.5 }),
            style({ left: '400px', top: '200px', offset: 1 }),
          ])
        )
      ),
      transition(
        'true => false',
        animate(
          '1000ms linear',
          keyframes([
            style({ left: '400px', top: '200px', offset: 0 }),
            style({ left: '200px', top: '100px', offset: 0.5 }),
            style({ left: '0', top: '200px', offset: 1 }),
          ])
        )
      ),
    ]),
  ],
})
export class TestComponent implements OnInit {
  arc: string = 'false';

  toggleBounce() {
    this.arc = this.arc === 'false' ? 'true' : 'false';
  }
  constructor() {}

  ngOnInit(): void {
    // setInterval(() => {
    //   this.toggleBounce();
    // }, 1000);
  }
}
