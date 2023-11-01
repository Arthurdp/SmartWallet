module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [
            ".js",
            ".jsx",
            ".tsx",
            ".ts",
            ".json",
            ".android.js",
            ".ios.js",
          ],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@config": "./src/config",
            "@hooks": "./src/hooks",
            "@models": "./src/models",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@styles": "./src/styles",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
