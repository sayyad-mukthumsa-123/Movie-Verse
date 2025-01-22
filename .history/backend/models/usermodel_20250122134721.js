// // const mongoose=require("mongoose");
// // const user=new mongoose.Schema({
// //     "Username":
// //     {
// //         type:"String",
// //         required:true
// //     },
// //     "Email":
// //     {
// //         type:"String",
// //         required:true
// //     },
// //     "Password":
// //     {
// //         type:"String",
// //         required:true
// //     },
// // });
// // module.exports=mongoose.model("UserModel",user);


// //avatar store
// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//     Username: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     Email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     Password: {
//         type: String,
//         required: true
//     },
//     Avatar: {
//         type: String,
//         required: true
//     }
// }, { timestamps: true });

// module.exports = mongoose.model("UserModel", userSchema);


//reset pwd
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
    unique: true
  },
  Email: {
    type: String,
    required: true,
    unique: true
  },
  Password: {
    type: String,
    required: true
  },
  Avatar: {
    type: String,
    required: true
  }
}, { timestamps: true });

// Hash password before saving to the database
userSchema.pre('save', async function(next) {
  if (!this.isModified('Password')) return next();
  this.Password = await bcrypt.hash(this.Password, 10);
  next();
});

module.exports = mongoose.model("UserModel", userSchema);
