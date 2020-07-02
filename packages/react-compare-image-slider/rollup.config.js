import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default {
  input: ["src/react-compare-image-slider.tsx"],
  external: ["react"],
  output: [
    {
      name: "ReactCompareImageSlider",
      file: pkg.main,
      format: "umd",
      sourcemap: true,
      globals: { react: "React" },
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
      globals: { react: "React" },
    },
  ],
  // eslint-disable-next-line no-undef
  plugins: [
    resolve(),
    typescript({
      typescript: require("typescript"),
      useTsconfigDeclarationDir: true,
    }),
  ],
};
