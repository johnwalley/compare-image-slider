/// <reference path='../images.d.ts'/>
import * as React from "react";
import { ReactCompareImageSlider } from "../src/react-compare-image-slider";
import leftImage from "./images/asite1-1.jpg";
import rightImage from "./images/asite1-2.jpg";

export default { title: "Demo", component: ReactCompareImageSlider };

export const Slider = () => (
  <div>
    <ReactCompareImageSlider leftImage={leftImage} rightImage={rightImage} />
  </div>
);
