const { default: mongoose } = require("mongoose");

const disperse_data = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  name: String,
  address: String,
});

export const smartdisperse_data =
  mongoose.models.All_Transaction_Names ||
  mongoose.model("All_Transaction_Names", disperse_data);
