const mongoose = require("mongoose");

const TopicSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide topic name"],
      maxlength: 50,
    },
    activeUsers: {
      type: Number,
      default: 0,
    }
  },
)

mongoose.model("Topic", TopicSchema);
module.exports = mongoose.model("Topic");