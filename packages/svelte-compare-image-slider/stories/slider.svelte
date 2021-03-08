<script>
  import SvelteCompareImageSlider from "../src";

  export let leftImage;
  export let rightImage;
  export let handleColor;

  let style = handleColor ? `--handle-color: ${handleColor};` : null;
</script>

<style>

</style>

<div style={style}>
  <SvelteCompareImageSlider {leftImage} {rightImage} />
</div>
