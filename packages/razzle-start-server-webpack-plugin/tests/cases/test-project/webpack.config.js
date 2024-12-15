const path = require('path');
const StartServerPlugin = require('../../SilentPlugin');

const is_test = process.env.NODE_ENV == 'test';

module.exports = Object.assign(
  {
    watch: !is_test,
    entry: {main: __dirname},
    target: 'node',
    plugins: [new StartServerPlugin({once: true, verbose: !is_test})],
    output: {
      path: path.resolve(__dirname, '..', '..', 'js', 'test-project'),
      filename: 'server.js',
    },
  },
  {mode: 'development'}
);
