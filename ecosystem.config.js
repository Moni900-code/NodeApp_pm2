// ecosystem.config.js
module.exports = {
    apps: [{
      name: "my-app",
      script: "./app.js",
      watch: false,
      instances: 1,
      autorestart: true,
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }]
  };
  