module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~/utils': './src/utils',
          '~/pages': './src/pages',
          '~/navigator': './src/navigator',
          '~/models': './src/models',
          '~/assets': './src/assets',
          '~/components': './src/components',
        },
      },
    ],
  ],
};
