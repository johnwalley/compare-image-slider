import {
  LitElement,
  TemplateResult,
  CSSResult,
  css,
  html,
  customElement,
  property,
  query,
} from "lit-element";
import { styleMap } from "lit-html/directives/style-map";

/**
 * `compare-image-slider` is an element which compares two images.
 */
@customElement("compare-image-slider")
export class CompareImageSlider extends LitElement {
  @query("#container")
  container: HTMLElement;

  @property({ type: String })
  left: string;

  @property({ type: String })
  right: string;

  @property({ type: Number })
  percentage: number = 50;

  @property({ type: Number })
  width: number = 400;

  @property({ type: Boolean })
  isDragging: boolean = false;

  static get styles(): CSSResult {
    return css`
      :host {
        font-size: 0px;
      }

      :focus {
        outline: 2px solid rgba(90, 160, 215, 0.5);
        outline-offset: 2px;
      }

      .container {
        position: relative;
        overflow: hidden;
      }

      .after {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
      }

      .handle {
        position: absolute;
        width: 32px;
        height: 32px;
        top: 50%;
        margin-left: -19px;
        margin-top: -19px;
        border: 3px solid white;
        border-radius: 19px;
        box-shadow: 0px 0px 12px rgba(51, 51, 51, 0.5);
        cursor: ew-resize;
      }

      .handle:before {
        content: " ";
        position: absolute;
        bottom: 50%;
        left: 50%;
        margin-bottom: 19px;
        margin-left: -1.5px;
        width: 3px;
        height: 1000px;
        background: white;
        box-shadow: 0px 0px 12px rgba(51, 51, 51, 0.5);
      }

      .handle:after {
        content: " ";
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: 19px;
        margin-left: -1.5px;
        width: 3px;
        height: 1000px;
        background: white;
        box-shadow: 0px 0px 12px rgba(51, 51, 51, 0.5);
      }

      .after-overlay {
        position: relative;
        overflow: hidden;
      }

      .label {
        font-family: sans-serif;
        position: absolute;
        top: 0;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 8px;
        user-select: none;
      }
    `;
  }

  constructor() {
    super();

    window.addEventListener("resize", () => {
      this.width = this.container.offsetWidth;
    });
  }

  handleClick(e: MouseEvent): void {
    this.slideToPercentage(e.pageX);
  }

  handleMouseDown(e: MouseEvent): void {
    this.isDragging = true;
    this.slideToPercentage(e.pageX);
  }

  handleTouchStart(e: TouchEvent): void {
    this.isDragging = true;
    this.slideToPercentage(e.touches[0].pageX);
  }

  handleMouseMove(e: MouseEvent): void {
    if (this.isDragging) {
      this.slideToPercentage(e.pageX);
    }
  }

  handleTouchMove(e: TouchEvent): void {
    if (this.isDragging) {
      this.slideToPercentage(e.touches[0].pageX);
    }
  }

  handleMouseUp(): void {
    this.isDragging = false;
  }

  handleTouchEnd(): void {
    this.isDragging = false;
  }

  slideToPercentage(x: number): void {
    this.percentage =
      (100 * (x - this.container.offsetLeft)) / this.container.offsetWidth;
  }

  render(): TemplateResult {
    return html`
      <div
        class="container"
        id="container"
        @mousedown="${this.handleMouseDown}"
        @touchstart="${this.handleTouchStart}"
        @mousemove="${this.handleMouseMove}"
        @touchmove="${this.handleTouchMove}"
        @mouseup="${this.handleMouseUp}"
        @touchend="${this.handleTouchEnd}"
      >
        <div>
          <slot name="right"></slot>
          <div
            class="label"
            style=${styleMap({
              right: "0px",
              visibility: this.right ? "visible" : "hidden",
            })}
          >
            ${this.right}
          </div>
        </div>
        <div
          class="after"
          style=${styleMap({
            width: `${this.percentage}%`,
          })}
        >
          <div class="after-overlay">
            <div
              style=${styleMap({
                width: `${this.width}px`,
              })}
            >
              <slot id="after" name="left"></slot>
              <div
                class="label"
                style=${styleMap({
                  visibility: this.left ? "visible" : "hidden",
                })}
              >
                ${this.left}
              </div>
            </div>
          </div>
        </div>
        <div
          class="handle"
          style=${styleMap({
            left: `${this.percentage}%`,
          })}
        ></div>
      </div>
    `;
  }

  firstUpdated(): void {
    this.width = this.container.offsetWidth;
  }
}
