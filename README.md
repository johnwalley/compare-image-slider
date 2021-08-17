# Compare Image Slider

[![CI](https://github.com/johnwalley/compare-image-slider/workflows/CI/badge.svg)](https://github.com/johnwalley/compare-image-slider/actions?query=workflow%3ACI) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) [![GitHub](https://img.shields.io/github/license/johnwalley/compare-image-slider)](LICENSE)

Compare Image Slider is a simple interactive component for comparing two images. Ready to use with:

- [Web Components](/packages/compare-image-slider/README.md)
- [React](/packages/react-compare-image-slider/README.md)
- [Svelte](/packages/svelte-compare-image-slider/README.md)
- [Vue](/packages/vue-compare-image-slider/README.md)

<p align="center">
  <img src="./assets/example.gif" alt="Comparison of two images" />
</p>

## Styling

Style the component using [CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).

For example:

```html
<style type="text/css">
  :root {
    --handle-color: red;
  }
</style>
```

| Variable         | Description            | Default |
| ---------------- | ---------------------- | ------- |
| `--handle-color` | Color of dividing line | `white` |
