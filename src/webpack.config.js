const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development', // Set the mode to development or production
  entry: './index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Output bundle file
  },
  devServer: {
    host: '0.0.0.0',
    compress: true,
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Match JavaScript and JSX files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use Babel loader
        },
      },
      {
        test: /\.css$/, // Match CSS files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
      },
    ],
  },
  externals: [nodeExternals()], // Exclude Node.js core modules
};
