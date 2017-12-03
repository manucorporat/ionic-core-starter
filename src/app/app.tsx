import { Component, Element } from '@stencil/core';

@Component({
  tag: 'my-app',
})
export class App {

  private searchByName: string = "page-home";

  @Element() el: HTMLElement;

  getNav(): any {
    return this.el.querySelector('ion-nav');
  }

  setPage(name: string) {
    if (this.searchByName !== name) {
      this.getNav().setRoot(name);
      this.searchByName = name;
    }
  }

  setByName() {
    this.setPage('page-home');
  }

  setByFreq() {
    this.setPage('page-range');
  }

  protected render() {
    const Nav = 'ion-nav' as any;


    return [
      <ion-split-pane when={true}>
        <ion-menu>
          <ion-header>
            <ion-toolbar color="dark">
              <ion-title>CNAF app</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <ion-list>
              <ion-item onClick={() => this.setByName()}>Buscar por nombre</ion-item>
              <ion-item onClick={() => this.setByFreq()}>Buscar por banda</ion-item>
            </ion-list>
          </ion-content>
        </ion-menu>
        <Nav root="page-home" main />
      </ion-split-pane>
    ];
  }
}
