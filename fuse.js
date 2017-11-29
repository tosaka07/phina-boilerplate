const {FuseBox} = require('fuse-box');

const outputName = "bundle";
const start = `> index.js`;

const fuse = FuseBox.init({
 homeDir: 'src/js',
 output: 'dist/js/$name.js',
 sourceMaps: true,
 cache: true
});

fuse.bundle(outputName)
   .instructions(start)
   .watch();

fuse.run();