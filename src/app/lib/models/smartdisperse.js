const { default: mongoose } = require("mongoose");

const disperse_data = new mongoose.Schema({
  address: String,
  name: String,
});

export const smartdisperse_data =
  mongoose.models.addressname || mongoose.model("addressname", disperse_data);
