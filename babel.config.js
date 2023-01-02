module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      require.resolve("babel-plugin-module-resolver"),
      {
        root: ".",
        alias: {
          "@navigation": "./app/navigation",
          "@components": "./app/components",
          "@screens": "./app/screens",
          "@models": "./app/models",
          "@services": "./app/services",
          "@constants": "./app/constants",
          "@styles": "./app/styles",
          "@assets": "./app/assets",
          "@hooks": "./app/hooks",
          "@stores": "./app/stores",
          "@api": "./app/api",
          "@atoms": "./app/atoms",
          "@utils": "./app/utils",
        },
      },
    ],
  ],
}
