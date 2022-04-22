import { Component } from '@angular/core';
import {
  trigger, state, style, animate, transition, query, group
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),

      transition(':enter, :leave', [
        animate(1000)
      ])
      // transition(':enter', [
      //   style({ opacity: 0 }),
      //   animate(1000, style({ opacity: 1 }))
      // ]),
      // transition(':leave', [
      //   style({ opacity: 1 }),
      //   animate(1000, style({ opacity: 0 }))
      // ])
    ]),
    trigger('fadeSlide', [
      transition(':enter', [
        group([
          query('.item:nth-child(odd)', [
            style({ opacity: 0, transform: 'translateX(-250px)' }),
            animate(
              1000,
              style({ opacity: 1, transform: 'translateX(0)' })
            )
          ]),
          query('.item:nth-child(even)', [
            style({ opacity: 0, transform: 'translateX(250px)' }),
            animate(
              1000,
              style({ opacity: 1, transform: 'translateX(0)' })
            )
          ])
        ])
      ]),
      transition(':leave', [
        group([
          query('.item:nth-child(odd)', [
            animate(
              1000,
              style({ opacity: 0, transform: 'translateX(-250px)' })
            )
          ]),
          query('.item:nth-child(even)', [
            animate(
              1000,
              style({ opacity: 0, transform: 'translateX(250px)' })
            ),
          ])
        ])
      ])
    ])
  ]
})
export class AppComponent {
  showEvents1 = true
  showEvents2 = true
  toggleFlag = false
  events = [
    {
      time: '08:00 - 09:00 AM',
      action: 'Eat Breakfast',
      bgColor: 'bg-amber-100'
    },
    {
      time: '10:00 - 11:00 AM',
      action: 'Buy Groceries',
      bgColor: 'bg-teal-100'
    },
    {
      time: '01:00 - 02:00 PM',
      action: 'Workout',
      bgColor: 'bg-indigo-100'
    },
    {
      time: '03:00 - 04:00 PM',
      action: 'Release Event',
      bgColor: 'bg-lime-100'
    }
  ]

  toggleEvents1() {
    if(!this.toggleFlag) {
      this.showEvents1 = !this.showEvents1
    }
  }

  toggleEvents2() {
    if(!this.toggleFlag) {
      this.showEvents2 = !this.showEvents2
    }
  }
}
