const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
const port = process.env.PORT || 3000;

const secretKey = 'your-secret-key';
const refreshSecretKey = 'your-refresh-secret-key';
const tokensData = {};

mongoose
  .connect('mongodb+srv://varshiniraj0111:UehFUifsRAyTD4Wn@cluster0.c86tefb.mongodb.net/Test_User_Collection?retryWrites=true&w=majority')
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());


const Topic = mongoose.model('Topic', {
  topic_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  name: String,
  subtopics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subtopic' }]
});

const Subtopic = mongoose.model('Subtopic', {
  name: String,
});


app.post('/topics', authenticateToken, async (req, res) => {
  try {
    const topic = new Topic(req.body);
    await topic.save();
    res.status(201).json(topic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


app.post('/topics/:topicId/subtopics', authenticateToken,async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.topicId);
    if (!topic) {
      return res.status(404).json({ error: 'Topic not found' });
    }
    const subtopic = new Subtopic(req.body);
    await subtopic.save();
    topic.subtopics.push(subtopic);
    await topic.save();
    res.status(201).json(subtopic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});



app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(404).json({ message: 'Username and Password is reqired' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword,profilePicture:'' });
    await newUser.save();
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: 'Username already exists' });
    } else {
      res.status(500).json({ message: 'Registration failed' });
    }
  }
});

function generateTokens(username) {
  const accessToken = jwt.sign({ username }, secretKey, { expiresIn: '30m' });
  const refreshToken = jwt.sign({ username }, refreshSecretKey);

  const accessExpiration = Date.now() + 30 * 60 * 1000; // 30 minutes in milliseconds
  const refreshExpiration = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

  tokensData[accessToken] = { refreshToken, expiration: accessExpiration };
  tokensData[refreshToken] = { refreshToken, expiration: refreshExpiration };

  return { accessToken, refreshToken };
}



app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const tokens = generateTokens(username);
    res.json(tokens);
  } catch (error) {
    res.status(500).json({ message: 'Login failed' });
  }
});

function authenticateToken(req, res, next) {
  const token = req.header('Authorization');

  if (token == null) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  jwt.verify(token, secretKey, (err, decodedToken) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.username = decodedToken.username;

    const currentTime = Date.now();
    if (tokensData[token] && tokensData[token].expiration <= currentTime) {
      const newTokens = generateTokens(req.username);
      res.setHeader('New-Access-Token', newTokens.accessToken);
      res.setHeader('New-Refresh-Token', newTokens.refreshToken);
    }

    next();
  });
}


app.get('/user/:userId', async (req, res) => {
  try {
    const user = await User.aggregate([{
      $match: {
        _id: new mongoose.Types.ObjectId(req.params.userId)
      }
    },
    {
      $lookup: {
        from: "topics",
        localField: "_id",
        foreignField: "topic_id",
        as: "Topics"
      }
    },
    {
      $lookup:{
        from:"subtopics",
        localField:"subtopics",
        foreignField:"_id",
        as:"Subtopics"
      }
    }
    ])
    res.send(user)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



app.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logout successful' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

