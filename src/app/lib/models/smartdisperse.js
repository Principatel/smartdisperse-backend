const { default: mongoose } = require("mongoose");

const disperse_data = new mongoose.Schema({
  userid: String,
  name: String,
  address: String,
});

export const smartdisperse_data =
  mongoose.models.dummydatas || mongoose.model("dummydatas", disperse_data);
