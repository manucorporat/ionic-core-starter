import { Component } from '@stencil/core';


@Component({
  tag: 'page-list',
  styleUrl: 'list.scss'
})
export class ListPage {

  items: Array<{title: string, note: string, icon: string}>;

  constructor() {
    // Let's populate this page with some filler content for funzies
    const icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: icons[Math.floor(Math.random() * icons.length)]
      });
    }
  }

  itemTapped(title) {
    console.log('Clicked', title)
  }

  protected render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-title>List</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-list>
          {this.items.map(item => (
            <ion-item onClick={() => this.itemTapped(item)}>
              <ion-icon name={item.icon} slot="start"></ion-icon>
              {item.title}
              <ion-note slot="end">{item.note}</ion-note>
            </ion-item>
          ))}
        </ion-list>
      </ion-content>
    ];
  }
}
