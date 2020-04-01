<template>
  <before-after-slider>
    <img slot="before" draggable="false" width="100%" :src="leftImage" />
    <img slot="after" draggable="false" width="100%" :src="rightImage" />
  </before-after-slider>
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
