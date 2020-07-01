import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default {
  input: ["src/react-compare-image-slider.tsx"],
  external: ["react"],
  output: {
    name: "ReactCompareImageSlider",
    file: "build/index.js",
    format: "umd",
    sourcemap: true,
    globals: { react: "React" },
  },
  plugins: [resolve(), typescript({ noEmitOnError: false })],
};
