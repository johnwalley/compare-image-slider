import { html } from "lit-html";
import "../src/before-after-slider.ts";
import before from "./images/asite1-1.jpg";
import after from "./images/asite1-2.jpg";

export default {
  title: "compare-image-slider",
};

export const Default = () => html`
  <before-after-slider>
    <img slot="left" width="100%" src=${after} />
    <img slot="right" width="100%" src=${before} />
  </before-after-slider>
`;
