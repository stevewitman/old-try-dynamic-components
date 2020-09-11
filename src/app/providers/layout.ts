import { Injectable } from '@angular/core';
import { LayoutItem } from '../layout-item';
import { TypeNewsComponent } from '../type-news/type-news.component';
import { TypeAdvertisementComponent } from '../type-advertisement/type-advertisement.component';

@Injectable()
export class LayoutProvider {
  private dummyResponse = {
      items: [
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
          title: 'Another Worthless Story',
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
    ]
  };

  constructor() {}

  getLayoutItems(): LayoutItem[] {
    return this.getItemOrder(this.dummyResponse.items);
  }

  private getItemOrder(items): LayoutItem[] {
    const result: LayoutItem[] = [];
    for (const item of items) {
      const comp = this.resolveComponentName(item.type);
      console.log(comp)
      const newItem = new LayoutItem(comp, item.data);
      result.push(newItem);
    }
    console.log(result)
    return result;
  }

  private resolveComponentName(item) {
    if (item === 'news') {
      return TypeNewsComponent;
    } else if (item === 'advertisement') {
      return TypeAdvertisementComponent;
    }
  }
}
