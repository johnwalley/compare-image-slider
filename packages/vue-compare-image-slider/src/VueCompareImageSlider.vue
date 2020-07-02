<template>
  <compare-image-slider>
    <img slot="left" draggable="false" width="100%" :src="leftImage" />
    <img slot="right" draggable="false" width="100%" :src="rightImage" />
  </compare-image-slider>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import "compare-image-slider";

@Component
export default class VueCompareImageSlider extends Vue {
  @Prop(String) private leftImage!: string;
  @Prop(String) private rightImage!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
