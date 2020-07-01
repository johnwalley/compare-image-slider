import VueCompareImageSlider from "../src/components/VueCompareImageSlider";
import before from "./images/asite1-1.jpg";
import after from "./images/asite1-2.jpg";

export default {
  title: "VueCompareImageSlider",
  component: VueCompareImageSlider,
};

export const Default = () => ({
  components: { VueCompareImageSlider },
  template: `<VueCompareImageSlider leftImage=${before} rightImage=${after}/>`,
});
