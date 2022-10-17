const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

// const startTimeSchema = new Schema({
//   startTimeValue: {
//     type: Number
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now()
//   },
//   employee: {
//     type: Schema.Types.ObjectId,
//     ref: 'Employee'
//   }
// })

// const endTimeSchema = new Schema({
//   endTimeValue: {
//     type: Number
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now()
//   },
//   employee: {
//     type: Schema.Types.ObjectId,
//     ref: 'Employee'
//   }
// })

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 4
  }
//   reactions: [{
//     addReactionStart: [startTimeSchema],
//     endValues: [endTimeSchema]
// }]
});



employeeSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});


employeeSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};



const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;