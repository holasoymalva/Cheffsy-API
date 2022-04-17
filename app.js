const routes = require('./routes');
const config = require('./config');
const path = require('path');
const fs = require("fs");
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    try {
        const jsonString = fs.readFileSync("./source/mooks/recipes.json");
        const recipes = JSON.parse(jsonString);
        ctx.body = recipes;
        ctx.response.status = 200;
    } catch (err) {
        console.log(err);
        return;
    }
});

app.listen(config.port);
console.log('$ open http://127.0.0.1:' + config.port);