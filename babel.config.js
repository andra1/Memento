module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
    ],
    env: {
      development: {
        plugins: [
          '@babel/plugin-proposal-export-namespace-from',
        ]
      }
    }
  };
};
