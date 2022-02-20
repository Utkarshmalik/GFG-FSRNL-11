const { response } = require("express");
const express=require("express");
const foodControllors=require("../Controllers/foodController");
const foodModel=require('../models/food');
const app=express();



app.get("/foods",foodControllors.findAll);
app.get("/food/:id",foodControllors.findOne);
app.post("/food",foodControllors.create);
app.patch("/food/:id",foodControllors.update);
app.delete("/food/:id",foodControllors.delete);




module.exports=app;

