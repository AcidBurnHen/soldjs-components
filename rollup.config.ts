import withSolid from "rollup-preset-solid";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";

export default withSolid([
  {
    input: "src/alert.tsx",
    targets: ["esm", "cjs"],
    writePackageJson: true,
  },
  {
    input: "src/gallery.tsx",
    targets: ["esm", "cjs"],
    writePackageJson: true
  },
  {
    input: "src/toggle.tsx",
    targets: ["esm", "cjs"],
    writePackageJson: true
  },
  {
    plugins: [
      postcss({
        modules: true,
        plugins: [
          autoprefixer
        ]
      }),
    ]
  }
]);
