/// <reference path='../images.d.ts'/>
import * as React from "react";
import { Button } from "@storybook/react/demo";
import { ReactCompareImageSlider } from "../src/react-compare-image-slider";
import leftImage from "./images/before.jpg";
import rightImage from "./images/after.jpg";

export default { title: "Button" };

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = (): JSX.Element => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const withSlider = () => (
  <div>
    <ReactCompareImageSlider leftImage={leftImage} rightImage={rightImage} />
  </div>
);
