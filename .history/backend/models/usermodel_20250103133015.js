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

// Check if the model already exists to avoid overwriting it
module.exports = mongoose.models.UserModel || mongoose.model("UserModel", userSchema);
