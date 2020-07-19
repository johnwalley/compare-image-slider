/// <reference path='../images.d.ts'/>
import Slider from "./slider.svelte";
import leftImage from "./images/asite1-1.jpg";
import rightImage from "./images/asite1-2.jpg";

export default {
  title: "SvelteCompareImageSlider",
  component: Slider,
};

export const Default = () => ({
  Component: Slider,
  props: { leftImage: leftImage, rightImage: rightImage },
});
