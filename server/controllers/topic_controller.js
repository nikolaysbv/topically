const { StatusCodes } = require("http-status-codes");
const topicData = require("../data/topic_data"); 

const getMostPopular = async (req, res, next) => {
  const topics = await topicData.getMostPopular();

  res.status(StatusCodes.OK).json(topics);
}

const createTopic = async (req, res, next) => {
  const { name } = req.body;
  
  const newTopic = await topicData.createTopic(name);

  res.status(StatusCodes.CREATED).json(newTopic);
}

module.exports = {
  getMostPopular,
  createTopic,
}