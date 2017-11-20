const isDevelopment = process.env.NODE_ENV === 'development';
const path = require('path');

module.exports = {
  entry: isDevelopment ? 'index.js' : 'safranbolu.js',
  vendor: false,
  hash: false,
  copy: false,
  sourcemap: false,
  sourceMap: false,
  removeDist: true,
  extractCSS: false,
  webpack(config) {
    config.output = {
      path: path.resolve(__dirname, 'dist'),
      library: 'Safranbolu',
      libraryTarget: 'umd',
      filename: 'safranbolu.js',
    };
    return config;
  },
};
