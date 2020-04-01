import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default {
  input: ["src/before-after-slider.ts"],
  output: [
    {
      file: "build/before-after-slider.js",
      format: "es",
      sourcemap: true
    },
    {
      name: "CompareImageSlider",
      file: "build/before-after-slider.umd.js",
      format: "umd",
      sourcemap: true
    }
  ],
  plugins: [resolve(), typescript()]
};
