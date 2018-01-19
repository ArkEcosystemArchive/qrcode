exports.config = {
  namespace: 'arkqrcode',
  generateDistribution: true,
  bundles: [
    { components: ['ark-qrcode'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
