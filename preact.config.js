import webpack from 'webpack';

export default (config, env, helpers) => {
  /* Overwrite url-loader for dev */
  if (!env.production) {
    config.module.loaders = [
      {
        test: /\.png$/,
        use: { loader: 'url-loader', options: { limit: 1 } },
      },
      ...config.module.loaders,
    ];
  }
};
