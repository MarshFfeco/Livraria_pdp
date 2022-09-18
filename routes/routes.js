const express = require('express');
const route = express.Router();

const index = require("../src/controller/indecontroller");

route.get("/", index.index);

module.exports = route;