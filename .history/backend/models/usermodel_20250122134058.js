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
const bcrypt = require("bcryptjs");

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

// Encrypt password before saving user to database
userSchema.pre("save", async function(next) {
    if (!this.isModified("Password")) return next();

    const salt = await bcrypt.genSalt(10);
    this.Password = await bcrypt.hash(this.Password, salt);
    next();
});

module.exports = mongoose.model("UserModel", userSchema);
