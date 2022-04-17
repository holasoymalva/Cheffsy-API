'use strict';
const fs = require("fs");

exports.list = function* () {
    const jsonString = fs.readFileSync("./mook.json");
    const recipes = JSON.parse(jsonString);
    this.body = recipes;
    this.status = 200;
}