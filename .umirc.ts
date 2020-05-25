import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'JSON-Form',
  mode: 'site',
  logo: 'data:image/png;base64,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',
  // more config: https://d.umijs.org/config
  resolve: {
    includes: ['doc'],
  },
  outputPath: "docs",
  publicPath: "./",
  history: { type: "hash" },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
  hash: true,
});

