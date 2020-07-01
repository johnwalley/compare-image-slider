<script>
  import { createEventDispatcher } from "svelte";
  import "compare-image-slider";

  export let leftImage;
  export let rightImage;
</script>

<style>

</style>

<before-after-slider>
  <img slot="left" width="100%" draggable="false" src={leftImage} alt="left" />
  <img
    slot="right"
    width="100%"
    draggable="false"
    src={rightImage}
    alt="right" />
</before-after-slider>
