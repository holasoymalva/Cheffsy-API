const recipes = require('./controllers/recipes.js');

module.exports = function routes(app) {
    // app.get('/', home);
    // restful recipe API
    app.get('/recipe', recipes.list);
};