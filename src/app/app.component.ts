import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards = [
    {
      type: 'news',
      data: {
        source: 'Whatever News',
        title: 'First Article',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa.'
      }
    },
    {
      type: 'advertisement',
      data: {
        company: 'Bad Burgers',
        image: 'assets/images/bad-burgers.png'
      }
    },
    {
      type: 'news',
      data: {
        source: 'Worthless News',
        title: 'Another Story',
        summary: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    },
    {
      type: 'advertisement',
      data: {
        company: 'Uranus',
        image: 'assets/images/uranus.png'
      }
    },
  ];
}
