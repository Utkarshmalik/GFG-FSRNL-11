const mongoose=require("mongoose");

const FoodSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },
    calories:{
        type:Number,
        default:0,
        validate(value){
            if(value<0){
                throw new Error("Negative Calories not allowed");
            }
        }
    }
})

const Food= mongoose.model("Food",FoodSchema);

module.exports=Food;

