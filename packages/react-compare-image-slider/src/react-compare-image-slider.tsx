import * as React from "react";
import "compare-image-slider";

export function ReactCompareImageSlider({
  leftImage,
  rightImage,
}): JSX.Element {
  return (
    <>
      <compare-image-slider>
        <img slot="left" width="100%" draggable="false" src={leftImage} />
        <img slot="right" width="100%" draggable="false" src={rightImage} />
      </compare-image-slider>
    </>
  );
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "compare-image-slider": any;
    }
  }
}
