const mongoose = require('mongoose');

const { Schema } = mongoose;

const startTimeSchema = new Schema({
  startTimeValue: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  // employee: {
  //   type: Schema.Types.ObjectId,
  // }
})

const endTimeSchema = new Schema({
  endTimeValue: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  // employee: {
  //   type: Schema.Types.ObjectId,
  // }
})

const StartReaction = mongoose.model('StartReaction', startTimeSchema);
const EndReaction = mongoose.model('EndReaction', endTimeSchema);

module.exports = {
  StartReaction,
  EndReaction
}