import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ref, createRef } from 'lit/directives/ref.js';


@customElement('my-inputs')
export class Myinputs extends LitElement {
  static styles = css`
  :host {
    height: 30px;
    width: 100px;
    color: red
  }`

  @property({type: 'string'})
  value: String  = ''
  val = this.value

  public getValue () {
    return this.val
  }

  isComposition = false

  updateVal ({target}) {
    if (this.isComposition) return
    this.val = target.value
  }

  handleCompositionstart() {
    this.isComposition = true
  }

  handleCompositionend(event) {
    this.isComposition = false
    this.updateVal(event)
  }

  public select(){
    this.inputRef.value.select()
  }

  inputRef: any = createRef()

  render() {
    return html`
      <input
        ${ref(this.inputRef)} 
        type="text" 
        value=${this.value} 
        @input=${this.updateVal}
        @compositionstart=${this.handleCompositionstart}
        @compositionend=${this.handleCompositionend}
          />
    `
  }
}