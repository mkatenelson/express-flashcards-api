var mongoose = require("mongoose");

mongoose.connect(process.env.MONGOLAB_URI || "mongodb://heroku_lbq5hw80:eihv2qanblep17hp5rujpat66h@ds021289.mlab.com:21289/heroku_lbq5hw80");

// After creating a new model, require and export it:
module.exports.Flashcard = require("./flashcard.js");
