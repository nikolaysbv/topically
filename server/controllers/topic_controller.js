const { StatusCodes } = require("http-status-codes");
const topicData = require("../data/topic_data"); 

const getMostPopular = async (req, res, next) => {
  const topics = await topicData.getMostPopular();

  res.status(StatusCodes.OK).json(topics);
}

module.exports = {
  getMostPopular,
}