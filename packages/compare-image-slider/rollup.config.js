import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";

export default {
  input: ["src/before-after-slider.ts"],
  output: [
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
    },
    {
      name: "CompareImageSlider",
      file: pkg.main,
      format: "umd",
      sourcemap: true,
    },
  ],
  plugins: [resolve(), typescript()],
};
