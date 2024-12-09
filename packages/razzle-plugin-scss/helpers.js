'use strict';
const makeLoaderFinder = require('@fabio-arsenal/razzle-dev-utils/makeLoaderFinder');

const cssLoaderFinder = makeLoaderFinder('css-loader');
const postCssLoaderFinder = makeLoaderFinder('postcss-loader');
const resolveUrlLoaderFinder = makeLoaderFinder('resolve-url-loader');
const sassLoaderFinder = makeLoaderFinder('sass-loader');
const styleLoaderFinder = makeLoaderFinder('style-loader');

module.exports = {
  cssLoaderFinder,
  postCssLoaderFinder,
  resolveUrlLoaderFinder,
  sassLoaderFinder,
  styleLoaderFinder,
};
