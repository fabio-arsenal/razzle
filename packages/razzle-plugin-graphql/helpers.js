'use strict';
const makeLoaderFinder = require('@fabio-arsenal/razzle-dev-utils/makeLoaderFinder');

const gqlLoaderFinder = makeLoaderFinder('graphql-tag/loader');

module.exports = {
  gqlLoaderFinder,
};
