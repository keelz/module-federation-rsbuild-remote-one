import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

const dependencies = require('./package.json').dependencies;

export default defineConfig({
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
            './button': './src/Button',
            './reducer': './src/features/reducer',
            './state': './src/state.ts',
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
            '@mui/material': {
              singleton: true,
              requiredVersion: dependencies['@mui/material'],
            },
            '@emotion/react': {
              singleton: true,
              requiredVersion: dependencies['@emotion/react'],
            },
          },
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
