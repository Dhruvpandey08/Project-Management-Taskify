module.exports = {
  apps: [
    {
      name: "taskify",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
