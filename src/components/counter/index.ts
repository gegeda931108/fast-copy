import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('my-counter')
export class MyCounter extends LitElement {
  static styles = css`
  :host {
    color: red
  }
  `

  @property({type: 'number'})
  count: number = 0

  countNumber() {
    this.count++
  }

  render() {
    return html`
      <div>${this.count}</div>
      <button @click=${this.countNumber}>count</button>
    `
  }
}