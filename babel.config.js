module.exports = {
  presets: [
    // Environment preset for compiling modern JavaScript to be compatible with target environments
    [
      "@babel/preset-env",
      {
        targets: "> 0.25%, not dead",
        useBuiltIns: "usage",
        corejs: 3, // Specify the version of core-js to use for polyfills
      },
    ],
    // React preset with automatic runtime
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  // Add any additional plugins or configurations here if needed
};
