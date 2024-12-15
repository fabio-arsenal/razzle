const path = require('path');
const StartServerPlugin = require('../../SilentPlugin');


const is_test = process.env.NODE_ENV == 'test';

module.exports = Object.assign(
  {
    watch: !is_test,
    entry: {main: [__dirname, 'webpack/hot/poll?300', 'webpack/hot/signal']},
    target: 'node',
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new StartServerPlugin({once: is_test, verbose: !is_test}),
    ],
    output: {
      path: path.resolve(__dirname, '..', '..', 'js', 'test-project-hmr'),
      filename: 'server.js',
    },
  },
  {mode: 'development'}
);
