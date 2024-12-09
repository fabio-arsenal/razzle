'use strict';
const makeLoaderFinder = require('@fabio-arsenal/razzle-dev-utils/makeLoaderFinder');

const svelteLoaderFinder = makeLoaderFinder('svelte-loader');
const fileLoaderFinder = makeLoaderFinder('file-loader');

module.exports = {
  fileLoaderFinder,
  svelteLoaderFinder,
};
