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


// models/UserModel.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    "Username": {
        type: "String",
        required: true
    },
    "Email": {
        type: "String",
        required: true
    },
    "Password": {
        type: "String",
        required: true
    },
    "searchHistory": {
        type: [String], // Store movie titles or IDs the user has searched for
        default: []
    }
});

module.exports = mongoose.model("UserModel", userSchema);
