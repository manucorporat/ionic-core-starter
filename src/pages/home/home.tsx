import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'page-home',
  styleUrl: 'home.scss'
})
export class HomePage {

  @Prop() first: string;

  @Prop() last: string;

  protected render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content padding>
        <h3>Ionic Menu Starter</h3>
        <p>
          If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.
        </p>
      </ion-content>
    ];
  }
}
