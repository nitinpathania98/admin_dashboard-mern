import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from 'cors'
import bodyparser from "body-parser";
import UserModel3 from './models/UserAddProduct.js'
import UserReg from "./models/UserReg.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import AdminReg from "./models/AdminReg.js";
// const express = require('express')
// const app = express()
// const mongoose = require('mongoose')
// const bodyparser = require('body-parser')
// const cors = require('cors')
// const UserModel3 = require("./models/UserAddProduct")
//...package with app
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.send("Welcome to a new page")
});

mongoose.connect("mongodb+srv://admin7888:admin7888@cluster0.lvt75xr.mongodb.net/dashboard?retryWrites=true&w=majority", {
    useNewUrlParser: true,
})

//..Login
const jwt_secret = "wertyuiopkkjhgfdsabvc123456xzxcv";
app.post('/userlogin', async (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    const user = await UserReg.findOne({ email: email })
    console.log(user)
    if (!user) {
        return res.send("User Does not Exist")
    } else if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({}, jwt_secret)
        return res.json({ status: "success", token: token, userdata: user })
    } else {
        return res.json({ status: "error" })
    }
})

//...Registration data
app.post('/regdata', async (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var country = req.body.country;
    var password = req.body.password;
    var bpassword = await bcrypt.hash(password, 10);
    const Registration = await UserReg({
        name: name,
        email: email,
        country: country,
        password: bpassword,
    })
    try {
        await Registration.save()
        res.status(200).send("Registration successfully")
        console.log(req.body)
    }
    catch (err) {
        console.log(err)
        res.status(200).send("Cannot Register")
    }
});



//..AdminLogin
const jwt_secret2 = "wertyuiopkkjhgfdsabvc123456xzxcv";
app.post('/adminlogin', async (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    const user = await AdminReg.findOne({ email: email })
    console.log(user)
    if (!user) {
        return res.send("User Does not Exist")
    } else if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({}, jwt_secret2)
        return res.json({ status: "success", token: token, userdata: user })
    } else {
        return res.json({ status: "error" })
    }
})
//... Admin Registration data
app.post('/adminreg', async (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var password = req.body.password;
    var bpassword = await bcrypt.hash(password, 10);
    const AdminRegistration = await AdminReg({
        name: name,
        email: email,
        phone: phone,
        password: bpassword,
    })
    try {
        await AdminRegistration.save()
        res.status(200).send("Registration successfully" )
        console.log(req.body)
    }
    catch (err) {
        console.log(err)
        res.status(200).send("Cannot Register")
    }
});


//...adding the addproduct data to database
app.post('/addproduct', async (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var productname = req.body.productname;
    var description = req.body.description;
    var price = req.body.price;
    var discount = req.body.discount;
    const User3 = await UserModel3({
        name: name,
        email: email,
        productname: productname,
        description: description,
        price: price,
        discount: discount,
    })
    try {
        await User3.save()
        res.status(200).send("Message   successfully send")
        console.log(User3)

    }
    catch (err) {
        console.log(err)
        res.status(200).send('message cannot be send')
    }
});


//..
app.get("/getdata", async (req, res) => {
    console.log(req.data)
})
//.... adding server
app.listen(5001, () => {
    console.log("server is running");
})