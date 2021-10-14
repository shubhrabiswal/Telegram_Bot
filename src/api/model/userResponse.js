const mongoose = require('mongoose');

const UserResponseSchema = new mongoose.Schema({
  user_response: {
    type: String,
    trim:true
  },
  options: {
    type: Number,
    enum:[1,2,3]
  }
},{ timestamps: true });


module.exports = mongoose.model('UserResponse', UserResponseSchema);