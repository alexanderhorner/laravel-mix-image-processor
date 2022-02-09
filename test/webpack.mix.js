// webpack.mix.js

let mix = require('laravel-mix');

require('../src/index')

mix.js('src/app.js', 'dist')
   .setPublicPath('dist')
   .imageProcessor({
    pipelines: {
        thumbnail: sharp => sharp.resize(100, 100).toFormat("webp"),

        backgroundSmall: sharp =>
          sharp.resize(500, 500)
               .runPipeline("background")
               .toFormat("webp", { quality: 60 }),

        backgroundBig: sharp =>
          sharp.resize(1000, 1000)
               .runPipeline("background")
               .toFormat("jpeg", { quality: 90 }),

        background: sharp =>
          sharp.flip()
               .flop()
               .rotate(45)
               .sharpen()
               .normalize()
               .toColorspace("srgb")
      }
   })