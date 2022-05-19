const http = require("http");

const express = require("express");

const app = express();

const port = 3000;

app.use((req, res, next) => {
  console.log("In the middleware");
  next();
});

app.use((req, res, next) => {
  console.log("Another the middleware");
  res.send("<h1>Hello from Express!</h1>");
});
const server = http.createServer(app);
server.listen(port);
