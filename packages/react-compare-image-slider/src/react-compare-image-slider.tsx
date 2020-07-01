import * as React from "react";
import "compare-image-slider";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "before-after-slider": any;
    }
  }
}

export function ReactCompareImageSlider({
  leftImage,
  rightImage,
}): JSX.Element {
  return (
    <>
      <before-after-slider>
        <img slot="left" width="100%" draggable="false" src={leftImage} />
        <img slot="right" width="100%" draggable="false" src={rightImage} />
      </before-after-slider>
    </>
  );
}
