const path = require('path');

module.exports = {
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        }
    },
  entry: './src/script.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
