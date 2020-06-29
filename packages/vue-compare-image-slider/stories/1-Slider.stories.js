import VueCompareImageSlider from "../src/components/VueCompareImageSlider";
import before from "./images/before.jpg";
import after from "./images/after.jpg";

export default {
  title: "VueCompareImageSlider",
  component: VueCompareImageSlider
};

export const CompareImageSlider = () => ({
  components: { VueCompareImageSlider },
  template: `<VueCompareImageSlider leftImage=${before} rightImage=${after}/>`
});
