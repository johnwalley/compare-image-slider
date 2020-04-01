import {
  LitElement,
  TemplateResult,
  CSSResult,
  css,
  html,
  customElement,
  property,
  query
} from "lit-element";
import { styleMap } from "lit-html/directives/style-map";

@customElement("before-after-slider")
export class BeforeAfterSlider extends LitElement {
  @query("#parent")
  parent: HTMLElement;

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
      .parent {
        position: relative;
      }

      .after {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        border-right: 2px solid white;
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

    this.setAttribute("tabindex", "0");

    this.querySelectorAll("img").forEach(img => {
      img.setAttribute("draggable", "false");
    });

    window.addEventListener("resize", () => {
      this.width = this.parent.offsetWidth;
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
      (100 * (x - this.parent.offsetLeft)) / this.parent.offsetWidth;
  }

  render(): TemplateResult {
    return html`
      <div
        class="parent"
        id="parent"
        @mousedown="${this.handleMouseDown}"
        @touchstart="${this.handleTouchStart}"
        @mousemove="${this.handleMouseMove}"
        @touchmove="${this.handleTouchMove}"
        @mouseup="${this.handleMouseUp}"
        @touchend="${this.handleTouchEnd}"
      >
        <div>
          <slot name="before"></slot>
          <div
            class="label"
            style=${styleMap({
              right: "0px",
              visibility: this.right ? "visible" : "hidden"
            })}
          >
            ${this.right}
          </div>
        </div>
        <div
          class="after"
          style=${styleMap({
            width: `${this.percentage}%`
          })}
        >
          <div class="after-overlay">
            <div
              style=${styleMap({
                width: `${this.width}px`
              })}
            >
              <slot id="after" name="after"></slot>
              <div
                class="label"
                style=${styleMap({
                  visibility: this.left ? "visible" : "hidden"
                })}
              >
                ${this.left}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  firstUpdated(): void {
    this.width = this.parent.offsetWidth;
  }
}
