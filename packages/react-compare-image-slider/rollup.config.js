import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

export default {
  input: ["src/react-compare-image-slider.tsx"],
  external: ["react"],
  output: [
    {
      name: "ReactCompareImageSlider",
      file: "build/index.umd.js",
      format: "umd",
      sourcemap: true,
      globals: { react: "React" },
    },
    {
      file: "build/index.js",
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
