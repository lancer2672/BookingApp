module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': './assets',
          '@components': './src/components',
          '@src': './src',
          // modules: './src/modules',
          // lib: './src/lib',
          // types: './src/types',
          '@constants': './src/constants',
        },
        extensions: ['.ts', '.tsx', '.js', '.json'],
      },
    ],
    [
      'react-native-reanimated/plugin',
      {
        globals: ['__scanCodes'],
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
      },
    ],
  ],
};
