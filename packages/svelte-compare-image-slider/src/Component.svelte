<script>
  import { createEventDispatcher } from "svelte";
  import * as wc from "compare-image-slider";

  customElements.get("before-after-slider") ||
    customElements.define("before-after-slider", wc.BeforeAfterSlider);

  const dispatch = createEventDispatcher();

  function onClick(event) {
    dispatch("click", event);
  }
</script>

<style>

</style>

<before-after-slider>
  <img src="" alt="" />
  <img src="" alt="" />
</before-after-slider>
