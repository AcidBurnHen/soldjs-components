import withSolid from "rollup-preset-solid";

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
  }
]);
