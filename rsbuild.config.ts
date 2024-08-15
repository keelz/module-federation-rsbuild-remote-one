import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

const dependencies = require('./package.json').dependencies;

const getRemotes = (envRemotes: string | undefined) => {
  if (envRemotes !== undefined) {
    console.warn('REMOTES FROM ENV');
    return JSON.parse(envRemotes);
  }
  console.warn('REMOTES FROM DEV');
  return require('./remotes.dev.json');
};

export default defineConfig({
  html: { title: 'Remote One' },
  server: {
    port: 3001,
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production build, you need to configure output.assetPrefix
    assetPrefix: 'http://localhost:3001',
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      // You need to set a unique value that is not equal to other applications
      config.output!.uniqueName = 'remote_one';
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'remote_one',
          exposes: {
            './reducer': './src/features/reducer',
            './SharedComponent': './src/SharedComponent',
          },
          shared: {
            ...dependencies,
            'react': {
              singleton: true,
              requiredVersion: dependencies['react'],
            },
            'react-dom': {
              singleton: true,
              requiredVersion: dependencies['react-dom'],
            },
            '@emotion/react': {
              singleton: true,
              requiredVersion: dependencies['@emotion/react'],
            },
            '@mui/material': {
              singleton: true,
              requiredVersion: dependencies['@mui/material'],
            },
            '@reduxjs/toolkit': {
              singleton: true,
              requiredVersion: dependencies['@reduxjs/toolkit'],
            },
            'react-redux': {
              singleton: true,
              requiredVersion: dependencies['react-redux']
            },
          },
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
