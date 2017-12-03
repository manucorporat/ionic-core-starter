import { Component, Element, Listen, State, Prop } from '@stencil/core';

export interface Segment {
  min: number,
  max: number;
  text: string;
}

@Component({
  tag: 'page-home',
  styleUrl: 'home.scss'
})
export class HomePage {

  private width: number;
  private data: Segment[];
  private maxValue: number;
  private tr: any;
  private maps: any[] = [];

  @State() count = 0;

  @Element() el: HTMLElement;

  @Prop({ connect: 'ion-modal-controller' }) modalCtrl: any;

  @Listen('input')
  onInput(ev) {
    if (this.data) {
      const text = ev.target.value;
      this.scheduleSearch(text);
    }
  }

  @Listen('keydown.enter')
  onInputEnter() {
    this.addHeapMap();
  }

  async componentDidLoad() {
    const response = await fetch('/assets/data/data.json')
    this.data = await response.json();
    this.maxValue = Math.log10(this.data[this.data.length - 1].max);
    this.width = this.el.offsetWidth;

    this.addHeapMap();
  }

  getText(): string {
    return this.el.querySelector('input').value;
  }

  addHeapMap() {
    const prev = this.getHeapMap();
    if (prev) {
      prev.title = this.getText();
    }
    this.maps.push({
      data: this.search(this.getText()),
      width: this.width
    });
    this.update();
  }

  scheduleSearch(text: string) {
    clearInterval(this.tr);
    this.tr = setTimeout(() => this.setData(this.search(text)), 100);
  }

  getHeapMap() {
    return this.maps[this.maps.length - 1];
  }

  setData(data: any[]) {
    this.getHeapMap().data = data;
    this.update();
  }

  search(text: string) {
    return searchDataPoints(this.data, this.width / this.maxValue, text);
  }

  openDetailPage(title: any) {
    if (title) {
      this.modalCtrl.create({
        component: 'page-details',
        componentProps: {
          title: title,
          data: this.data,
        }
      }).then(m => m.present());
    }
  }

  update() {
    this.count = this.count + 1;
  }

  protected render() {
    const maps = this.maps;
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-title>Busqueda por nombre</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-searchbar></ion-searchbar>
        <div>{maps.map((m) => mapHeatMap(this, m.title, m.width, m.data)).reverse()}</div>
      </ion-content>
    ];
  }
}

function mapHeatMap(obj: any, title: any, width: any, data: any) {
  return <my-heatmap
    title={title}
    width={width}
    data={data}
    onClick={function (ev: any) {
      const t = ev.target.closest('my-heatmap').title
      obj.openDetailPage(t);
    }} />
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