
const mongoose = require('mongoose');
const {secret} = require("../config/config")
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://${secret.userDb}:${secret.passDb}@cluster0.m3d0q.mongodb.net/shop2`);
console.log("mongo conecet!")
}
