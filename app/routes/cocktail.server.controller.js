var Cocktail = require('mongoose').model('Cocktail');

exports.create = function(req, res, next) {
  var cocktail = new Cocktail(req.body);
   cocktail.save(function(err) {
    if (err) {
      return next(err);
    } else {
      res.json(cocktail);
    }
  });
};

exports.list = function(req, res) {
  Cocktail.find().sort('-name').exec(function(err, cocktails) {
    if (err) {
    	 return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(cocktails);
    }
  });
};

exports.read = function(req, res) {
  res.json(req.cocktail);
};

exports.cocktailByID = function(req, res, next, id) {
  Cocktail.findOne({
  	_id: id
  }, function(err, cocktail) {
    if (err){
    	return next(err);
    } else {
    	req.cocktail = cocktail;
    	next();
    }   
  });
};

exports.update = function(req, res, next) {
  Cocktail.findByIdAndUpdate(req.cocktail.id, req.body, function(err, cocktail) {
    if (err) {
      return next(err);
    } else {
      res.json(cocktail);
    }
  });
};

exports.delete = function(req, res, next) {
  req.cocktail.remove(function(err) {
    if (err) {
      return next(err);
    } else {
      res.json(req.cocktail);
    }
  });
};