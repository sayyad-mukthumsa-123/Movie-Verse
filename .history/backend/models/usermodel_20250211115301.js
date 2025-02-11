// // // const mongoose=require("mongoose");
// // // const user=new mongoose.Schema({
// // //     "Username":
// // //     {
// // //         type:"String",
// // //         required:true
// // //     },
// // //     "Email":
// // //     {
// // //         type:"String",
// // //         required:true
// // //     },
// // //     "Password":
// // //     {
// // //         type:"String",
// // //         required:true
// // //     },
// // // });
// // // module.exports=mongoose.model("UserModel",user);


// // //avatar store
// // const mongoose = require("mongoose");

// // const userSchema = new mongoose.Schema({
// //     Username: {
// //         type: String,
// //         required: true,
// //         unique: true
// //     },
// //     Email: {
// //         type: String,
// //         required: true,
// //         unique: true
// //     },
// //     Password: {
// //         type: String,
// //         required: true
// //     },
// //     Avatar: {
// //         type: String,
// //         required: true
// //     }
// // }, { timestamps: true });

// // module.exports = mongoose.model("UserModel", userSchema);


// //reset pwd
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

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

// // Hash password before saving
// userSchema.pre('save', async function(next) {
//     if (!this.isModified('Password')) return next();
    
//     this.Password = await bcrypt.hash(this.Password, 10);
//     next();
// });

// // Method to compare password
// userSchema.methods.comparePassword = function(password) {
//     return bcrypt.compare(password, this.Password);
// };

// module.exports = mongoose.model("UserModel", userSchema);


//argon
const mongoose = require("mongoose");
const argon2 = require("argon2");

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

// Hash password before saving
userSchema.pre('save', async function(next) {
    if (!this.isModified('Password')) return next();
    
    try {
        this.Password = await argon2.hash(this.Password);
        next();
    } catch (error) {
        next(error);
    }
});

// Method to compare password
userSchema.methods.comparePassword = async function(password) {
    return await argon2.verify(this.Password, password);
};


module.exports = mongoose.model("UserModel", userSchema);
