To use the compare-image-slider component in your code:

From your project folder, install the component from npm.

```sh
npm install some-package-name
```

Import the component.

In a JavaScript module:

```js
import "compare-image-slider";
```

In an HTML page:

```html
<script type="module">
  import "./path-to/compare-image-slider/before-after-slider.js";
</script>
```

Or:

```html
<script
  type="module"
  src="./path-to/compare-image-slider/before-after-slider.js"
></script>
```

Add the component to your application or component:

```html
<compare-image-slider>
  <img slot="left" width="100%" src="./path-to/left-image.png" />
  <img slot="right" width="100%" src="./path-to/right-image.png" />
</compare-image-slider>
```
