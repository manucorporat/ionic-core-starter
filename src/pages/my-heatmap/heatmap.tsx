import { Component, Element, Prop } from '@stencil/core';
import simpleheat from 'simpleheat';

@Component({
  tag: 'my-heatmap',
  styleUrl: 'heatmap.scss'
})
export class Heapmap {

  private heat: any;
  private legends: string[] = [];
  @Element() el: HTMLElement;

  @Prop() min = 1;
  @Prop() max = 275000000;
  @Prop() heatMax = 40;
  @Prop() heatSize = 4;
  @Prop() heatBlur = 0;
  @Prop() height = 100;
  @Prop() width = 300;
  @Prop() data: any[];
  @Prop() title: string;

  constructor() {
    const min = Math.log10(this.min);
    const max = Math.log10(this.max);
    const nu = 10;
    const step = (max - min) / nu;
    let value = min;
    for (let i = 0; i < nu; i++) {
      let r = Math.pow(10, value);
      this.legends.push(format(r));
      value += step;
    }
  }

  async componentDidLoad() {
    const canvas = this.el.querySelector('canvas');
    this.heat = simpleheat(canvas);
    this.updateHeap();
  }

  private updateHeap() {
    if (this.heat && this.data) {
      this.heat.clear();
      this.heat.data(this.data);
      this.heat.max(40);
      this.heat.radius(8, 4);
      this.heat.draw();
    }
  }

  protected render() {
    Context.dom.raf(() => {
      this.updateHeap();
    });
    const size = 2;
    const dom = [];
    if (this.title && this.title.length > 0) {
      dom.push(<h3>{this.title}</h3>);
    }
    dom.push(
      <div style={{
        width: `${this.width}px`,
        height: `${this.height}px`
      }}>
        <canvas
          width={this.width}
          style={{ transform: `scaleY(${this.height / size})` }}
          height={size} />
      </div>
    );
    dom.push(
      <div class='legend'>
        {this.legends.map(t => (
          <div>{t}</div>
        ))}
      </div>
    )
    return dom;
  }
}

export function format(freq: number, addUnit: boolean = true, nuDecimals = 0): string {
  let result: number
  if (freq < 1000) {
    result = freq;
  } else if (freq < 1000000) {
    result = freq / 1000.0;
  } else {
    result = freq / 1000000.0;
  }
  return result.toFixed(nuDecimals) + (addUnit ? unit(freq) : '');
}

export function unit(freq: number): string {
  if (freq < 1000) {
    return 'KHz';
  } else if (freq < 1000000) {
    return 'MHz';
  } else {
    return 'GHz';
  }
}