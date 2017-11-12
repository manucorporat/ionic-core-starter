import { Component } from '@stencil/core';

@Component({
  tag: 'my-app',
})
export class App {

  pages: Array<{ title: string, component: any }>;

  constructor() {
    this.pages = [
      { title: 'Home', component: 'page-home' },
      { title: 'List', component: 'page-list' }
    ];
  }

  openPage(page) {
    const nav = document.getElementById('mainNav') as any;
    nav.setRoot(page.component);

    const menuCtrl = document.querySelector('ion-menu-controller') as any;
    menuCtrl.close();
  }

  protected render() {
    return [
      <ion-menu side='start' content="mainNav">
        <ion-header>
          <ion-toolbar>
            <ion-title>Menu</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <ion-list>
            {this.pages.map(p => (
              <ion-item onClick={() => this.openPage(p)}>{p.title}</ion-item>
            ))}
          </ion-list>
        </ion-content>
      </ion-menu>,
      <ion-nav root='page-home' id="mainNav"></ion-nav>
    ];
  }
}
