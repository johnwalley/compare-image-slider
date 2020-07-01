<script>
  import SvelteCompareImageSlider from "../src";

  export let leftImage;
  export let rightImage;
</script>

<style>

</style>

<div>
  <SvelteCompareImageSlider {leftImage} {rightImage} />
</div>
