import VueCompareImageSlider from "../src/VueCompareImageSlider";
import before from "./images/asite1-1.jpg";
import after from "./images/asite1-2.jpg";

export default {
  title: "VueCompareImageSlider",
  component: VueCompareImageSlider,
};

export const Default = () => ({
  components: { VueCompareImageSlider },
  template: `<vue-compare-image-slider leftImage=${before} rightImage=${after} />`,
});

export const Styling = () => ({
  components: { VueCompareImageSlider },
  template: `<VueCompareImageSlider leftImage=${before} rightImage=${after} v-bind:style="{ '--handle-color': 'red' }" />`,
});
