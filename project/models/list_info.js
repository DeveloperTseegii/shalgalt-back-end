const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  list: {
    type: String,
    required: [true, "Enter the name"],
  },
  startDate: {
    type: Date,
    required: "Please fill From Date",
  },
  taskEnd: {
    type: Boolean,
    default: false,
  },
});

const List = mongoose.model("lists", ListSchema);
module.exports = List;
