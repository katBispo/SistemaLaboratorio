// react-app-rewired.config.js

module.exports = function override(config, env) {
    // Altere a entrada para apontar para App.js ao invés de index.js
    config.entry = {
      main: [
        './src/App.js'
      ],
    };
    return config;
  };
  