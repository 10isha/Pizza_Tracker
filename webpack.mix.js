const mix = require('laravel-mix');

// if (process.env.section) {
//     require(`${__dirname}/webpack.mix.${process.env.section}.js`);
// }

mix.js('resources/js/app.js', 'public/js/app.js')
   .sass('resources/scss/app.scss', 'public/css/app.css');