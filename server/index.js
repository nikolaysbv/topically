require('dotenv').config();

const mongoose = require('mongoose');

const express = require('express');
const app = express();
const port = 3000;

const topicRouter = require('./routers/topic_router');

app.use(express.json());

app.use((req, res, next) => {
  let allowedOrigins = [
    'http://localhost:4200',
  ];

  const { origin } = req.headers;

  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, OPTIONS, DELETE, GET');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  return next();
});

app.use('/api/v1/topic', topicRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
    mongoose.connect(process.env.MONGO_URL);
    const db = mongoose.connection;
    db.once('open', (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Connected to mongoDb!');
      }
    });
});