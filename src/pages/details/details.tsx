import { Component, Element, Listen, State, Prop } from '@stencil/core';
import { search, generateDataPoint } from '../home/home';
import { format, unit } from '../my-heatmap/heatmap';

export interface Segment {
  min: number,
  max: number;
  text: string;
}

@Component({
  tag: 'page-details',
  styleUrl: 'details.scss'
})
export class DetailsPage {

  @Element() el: HTMLElement;

  @State() results: any[];
  @State() width: number;
  @State() heatData: any[];
  @Prop() title: string;
  @Prop() data: any[];

  async componentDidLoad() {
    this.width = this.el.offsetWidth;
    this.results = search(this.data, this.title);
  }

  protected render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-title>{this.title}</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-list>
          {this.results && this.results.map(r => (
            <ion-item class='freq'>
              <ion-note slot='start'>{format(r.min, false)} - {format(r.max)}</ion-note>
              {r.text}
            </ion-item>
          ))}
        </ion-list>
      </ion-content>
    ];
  }
}
