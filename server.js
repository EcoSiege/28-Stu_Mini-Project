const express = require("express");
const path = require("path");
const fs = require("fs");
const mysql = require('mysql2');

const routes = require('./routes');

const app = process.env.PORT  ||  express();

const PORT = 3001;

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Express is now up and running on http://localhost:${PORT}`)
});