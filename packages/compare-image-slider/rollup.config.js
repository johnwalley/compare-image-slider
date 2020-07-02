import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default {
  input: ["src/compare-image-slider.ts"],
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
  plugins: [
    resolve(),
    typescript({
      // eslint-disable-next-line no-undef
      typescript: require("typescript"),
      useTsconfigDeclarationDir: true,
    }),
  ],
};
