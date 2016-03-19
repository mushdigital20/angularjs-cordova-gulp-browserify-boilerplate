'use strict';

export default {

  browserPort: 3000,
  UIPort: 3001,

  sourceDir: './app/',
  buildDir: './www/',

  styles: {
    sassSrc: ['app/assets/styles/scss/**/*.scss'],
    lessSrc: ['app/assets/styles/less/**/*.less'],
    output: 'main.css',
    dest: 'www/css',
    prodSourcemap: false,
    sassIncludePaths: [],
    lessIncludePaths: [],
  },
  
  app: {
      entryPoints: ['index.app.js', 'index.vendor.js']
  },

  scripts: {
    src: 'app/**/*.js',
    dest: 'www/js'
  },

  images: {
    src: 'app/assets/images/**/*',
    dest: 'www/images'
  },

  fonts: {
    src: ['app/assets/fonts/**/*'],
    dest: 'www/fonts'
  },

  assetExtensions: [
    'js',
    'css',
    'png',
    'jpe?g',
    'gif',
    'svg',
    'eot',
    'otf',
    'ttc',
    'ttf',
    'woff2?'
  ],

  views: {
    index: 'app/index.html',
    src: ['app/controllers/**/*.html', 'app/directives/**/*.html'],
    dest: 'app'
  },

  gzip: {
    src: 'www/**/*.{html,xml,json,css,js,js.map,css.map}',
    dest: 'www/',
    options: {}
  },

  browserify: {
    bundleName: 'main.js',
    prodSourcemap: false
  },

  test: {
    karma: 'test/karma.conf.js',
    protractor: 'test/protractor.conf.js'
  },

  init: function() {
    this.views.watch = [
      this.views.index,
      this.views.src
    ];

    return this;
  }

}.init();
