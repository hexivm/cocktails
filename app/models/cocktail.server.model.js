var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CocktailSchema = new Schema({
  name: { 
    type : String,
    trim : true,
  },
  description: String,
  author: String,
  origen: String,
  alcohol: Boolean,
  photo: Buffer, 
  ingredients: [{name: String, quantity:Number}],
  steps: [{step: String, time: Number, order: Number}],
  comments: [{author: String, comment: String, rate: {type: Number, min: 0, max: 5}}]
});

mongoose.model('Cocktail', CocktailSchema);