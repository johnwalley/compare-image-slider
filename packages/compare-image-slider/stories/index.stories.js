import { html } from "lit-html";
import "../src/before-after-slider.ts";
import before from "./images/before.jpg";
import after from "./images/after.jpg";

export default {
  title: "Demo"
};

export const Slider = () => html`
  <before-after-slider>
    <img slot="before" width="100%" src=${before} />
    <img slot="after" width="100%" src=${after} />
  </before-after-slider>
`;
