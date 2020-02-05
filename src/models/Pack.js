const mongoose = require('mongoose');

const PackSchema = new mongoose.Schema({
    packName: String,
    packType: String,
    packItem:[
      {
      packDate:String,
      packBtn:Number
      }
    ]
});

module.exports = mongoose.model('Pack', PackSchema);