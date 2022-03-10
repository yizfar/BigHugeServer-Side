const mongoose = require("mongoose");
const Joi = require("joi");

const orderSchema = new mongoose.Schema({
  products_ar:{
    type:Array, default:[]
  },
  user_id:String,
  status:{
    type:String, default:"pending"
  },
  total_price:Number,
  date_created:{
    type:Date,default:Date.now()
  }
})

exports.orderModel = mongoose.model("orders",orderSchema);

exports.validateOrder = (_bodyReq) => {
  let joiScehma = Joi.object({
    products_ar: Joi.array().min(1).max(999).required(),
    total_price:Joi.number().min(1).max(999999).required(),
    status:Joi.string().min(1).max(100).allow(null,""),
  })
  return joiScehma.validate(_bodyReq);
}


