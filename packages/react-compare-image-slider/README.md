To use the react-compare-image-slider component in your code:

From your project folder, install the component from npm.

```sh
npm install react-compare-image-slider
```

Import the component.

In a JavaScript module:

```js
import { ReactCompareImageSlider } from "react-compare-image-slider";
```

In an HTML page:

```html
<script src="./path-to/react-compare-image-slider/build/index.umd.js"></script>
```

```html
<script type="module">
  import "./path-to/react-compare-image-slider/build/index.js";
</script>
```

Or:

```html
<script
  type="module"
  src="./path-to/compare-image-slider/build/index.js"
></script>
```

Add the component to your application or component:

```jsx
<ReactCompareImageSlider leftImage={leftImage} rightImage={rightImage} />
```