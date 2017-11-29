const {FuseBox, Sparky, UglifyESPlugin} = require('fuse-box');

let fuse;
let isProduction = false;

const outputName = 'bundle';
const start = `> index.js`;
const homeDir = 'src/js';
const outputDir = 'dist/';
const output = `${outputDir}js/$name.js`;


// Production判定用
Sparky.task('set-production', () => {
  isProduction = true;
});

// 基本
Sparky.task('config', () => {
  fuse = FuseBox.init({
    homeDir: homeDir,
    output: output,
    sourceMaps: !isProduction,
    cache: !isProduction,
    plugins: isProduction
    ? [ UglifyESPlugin() ]
    : []
  });
  app = fuse.bundle(outputName).instructions(start);
});

// Develop用
Sparky.task('default', ['config'], () => {
  fuse.dev({
    port: 4444,
    root: outputDir,  // ルートディレクトリを指定。
    httpServer: true  // http サーバ機能を有効化するかどうかを指定。デフォルトは true
  });

  app.watch();
  return fuse.run();
});

// Production用
Sparky.task('prod', ['set-production', 'config'], () => {
  return fuse.run();
});