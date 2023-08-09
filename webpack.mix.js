const mix = require('laravel-mix');
require('laravel-mix-jigsaw');
const build = require('./tasks/build.js');

mix.disableSuccessNotifications();
mix.setPublicPath('source/assets/build/');
mix.webpackConfig({
    plugins: [
        build.jigsaw,
        build.browserSync(),
        build.watch([
            'config.php',
            'source/**/*.md',
            'source/**/*.php',
            'source/**/*.css',
        ]),
    ],
});

mix.jigsaw()
    .js('source/_assets/js/app.js', 'js')
    .js('source/_assets/js/main.js', 'js')
    .js('source/_assets/js/highlight.js', 'js')
    .js('source/_assets/js/search.js', 'js').vue()
    .js('source/_assets/js/help-search.js', 'js').vue()
    .sourceMaps()
    .postCss('source/_assets/css/main.css', 'css/main.css', [
      require('postcss-import'),
      require('tailwindcss'),
      require('autoprefixer'),
    ])
    .sourceMaps()
    .version();
