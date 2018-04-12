const sass = require('@stencil/sass');

exports.config = {
  namespace: 'arkqrcode',
  bundles: [
    { components: ['ark-qrcode'] }
  ],
  plugins: [
    sass()
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
