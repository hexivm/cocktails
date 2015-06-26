var cocktails = require('../../app/controllers/cocktail.server.controller');

module.exports = function(app) {
  app.route('/cocktails')
    .post(cocktails.create)
  .get(cocktails.list);
  
  app.route('/cocktails/:cocktailId')
     .get(cocktails.read)
     .put(cocktails.update)
   .delete(cocktails.delete);
     
  app.param('cocktailId', cocktails.cocktailByID);
};