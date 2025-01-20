// const mongoose=require("mongoose");
// const user=new mongoose.Schema({
//     "Username":
//     {
//         type:"String",
//         required:true
//     },
//     "Email":
//     {
//         type:"String",
//         required:true
//     },
//     "Password":
//     {
//         type:"String",
//         required:true
//     },
// });
// module.exports=mongoose.model("UserModel",user);





//for profile
const mongoose = require("mongoose");

const user = new mongoose.Schema({
  Username: {
    type: "String",
    required: true,
  },
  Email: {
    type: "String",
    required: true,
  },
  Password: {
    type: "String",
    required: true,
  },
});

module.exports = mongoose.model("UserModel", user);
