module.exports = {
  apps: [
    {
      name: "elto-made-stag-3100",
      port: 3100,
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
