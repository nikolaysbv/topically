const Topic = require('./../models/Topic');

const getMostPopular = async () => {
  const mostPopularTopics = await Topic.find({}).sort({activeUsers: -1}).limit(7);
  
  return mostPopularTopics;
}

const createTopic = async (name) => {
  const newTopic = await Topic.create({ name, activeUsers: 0 });

  return newTopic;
}

module.exports = {
  getMostPopular,
  createTopic,
}