import { Component, Element, Listen, State } from '@stencil/core';
import { format } from '../my-heatmap/heatmap';

export interface Segment {
  min: number,
  max: number;
  text: string;
}

@Component({
  tag: 'page-range',
  styleUrl: 'range.scss'
})
export class RangePage {

  private data: Segment[];
  private maxValue: number;
  private tr: any;
  private scale = 1000.0;


  @Element() el: HTMLElement;
  @State() results: string[] = [];
  @State() count = 0;
  @State() freqA = 0;
  @State() freqB = 0;


  @Listen('ionChange')
  onInput(ev) {
    const detail = ev.detail;
    this.freqA = Math.pow(10, detail.value.lower / this.scale);
    this.freqB = Math.pow(10, detail.value.upper / this.scale);
    this.scheduleSearch();
  }

  async componentDidLoad() {
    const response = await fetch('/assets/data/data.json')
    this.data = await response.json();
    this.maxValue = Math.log10(this.data[this.data.length - 1].max) * this.scale;
  }

  scheduleSearch() {
    clearInterval(this.tr);
    this.tr = setTimeout(() => this.search(), 100);
  }

  search() {
    if (!this.data) {
      return;
    }
    const fA = this.freqA;
    const fB = this.freqB;
    const results = [];
    for (let entry of this.data) {
      if (entry.min >= fA && entry.max < fB) {
        results.push(entry.text.split('?'));
      }
    }
    const merged = [].concat.apply([], results);
    const uniqueNames = [];
    merged.forEach(function (name: string) {
      name = name.toLowerCase().trim();
      if (uniqueNames.indexOf(name) === -1) {
        uniqueNames.push(name);
      }
    });
    this.results = uniqueNames.sort();
  }

  protected render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-title>Busqueda por frecuencia</ion-title>
        </ion-toolbar>
      </ion-header>,
      <div class="range-header">
        <h2>desde {format(this.freqA, true, 2)} hasta {format(this.freqB, true, 2)}</h2>
        <ion-list>
          <ion-item>
            <ion-label>Rango de frecuencias</ion-label>
            <ion-range dualKnobs={true} min={0} step={0.001} max={this.maxValue}></ion-range>
          </ion-item>
        </ion-list>
      </div>,
      <ion-content>
        <ion-list>
          {this.results.map((text) => (
            <ion-item>{text}</ion-item>
          ))}</ion-list>
      </ion-content>
    ];
  }
}


export function searchDataPoints(data: any, factor: number, text: string) {
  const results = search(data, text);
  return generateDataPoint(results, factor);
}

export function search(data: any, text: string) {
  text = text.toLowerCase();
  return data
    .filter((d) => d.text.toLowerCase().includes(text));
}

export function generateDataPoint(data: any[], factor: number) {
  const spacing = 4;
  const out = [];
  for (let r of data) {
    const min = Math.log10(r.min);
    const max = Math.log10(r.max);
    const size = (max - min) * factor;
    const x = (min * factor);
    const subSteps = size / spacing;
    for (var i = 0; i < subSteps; i++) {
      out.push([x + i * spacing, 1, 1]);
    }
  }
  return out;
}