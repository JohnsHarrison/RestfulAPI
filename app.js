const express = require("express");

// allows us to use express methods
const app = express();

app.use((req, res, next) => {
  res.status(200).json({
    message: "it works",
  });
});

module.exports = app;
