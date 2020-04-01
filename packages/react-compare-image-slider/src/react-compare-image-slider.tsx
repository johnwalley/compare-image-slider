import * as React from "react";
import * as wc from "compare-image-slider";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "before-after-slider": any;
    }
  }
}

export function ReactCompareImageSlider({
  leftImage,
  rightImage
}): JSX.Element {
  return (
    <>
      <before-after-slider>
        <img slot="before" width="100%" draggable="false" src={leftImage} />
        <img slot="after" width="100%" draggable="false" src={rightImage} />
      </before-after-slider>
    </>
  );
}

customElements.get("before-after-slider") ||
  customElements.define("before-after-slider", wc.BeforeAfterSlider);
