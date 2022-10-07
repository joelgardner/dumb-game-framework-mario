var esbuild = require("esbuild");
var dts = require("npm-dts");

esbuild.build({
  entryPoints: ["src/index.ts"],
  outfile: "dist/out.js",
  bundle: true,
  // external: Object.keys(packagejson.dependencies),
});

// esbuild.build({
//   entryPoints: ["src/index.ts"],
//   bundle: true,
//   // external: Object.keys(packagejson.dependencies),
//   outfile: "dist/index.esm.js",
//   format: "esm",
// });

// esbuild.build({
//   entryPoints: ["src/index.ts"],
//   bundle: true,
//   // external: Object.keys(packagejson.dependencies),
//   outfile: "dist/index.cjs",
//   format: "cjs",
// });

new dts.Generator({
  entry: "src/index.ts",
  output: "dist/index.d.ts",
  logLevel: "error",
}).generate();
