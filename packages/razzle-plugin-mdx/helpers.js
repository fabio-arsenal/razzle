'use strict';
const makeLoaderFinder = require('@fabio-arsenal/razzle-dev-utils/makeLoaderFinder');

const babelLoaderFinder = makeLoaderFinder('babel-loader');
const fileLoaderFinder = makeLoaderFinder('file-loader');
const mdxLoaderFinder = makeLoaderFinder('@mdx-js/loader');

module.exports = {
  fileLoaderFinder,
  babelLoaderFinder,
  mdxLoaderFinder,
};
