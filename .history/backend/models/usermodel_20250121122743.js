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


const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
    unique: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Avatar: {
    type: String,
    default: "default-avatar.png", // Default avatar image if none is provided
  },
});

module.exports = mongoose.model("User", userSchema);
