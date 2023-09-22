const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

const secretKey = 'your-secret-key';
const refreshSecretKey = 'your-refresh-secret-key';
const tokensData = {};

mongoose
  .connect('mongodb+srv://varshiniraj0111:UehFUifsRAyTD4Wn@cluster0.c86tefb.mongodb.net/Login_Details?retryWrites=true&w=majority')
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

  const uploadFolderPath = path.join(__dirname, 'uploads');
  if (!fs.existsSync(uploadFolderPath)) {
    fs.mkdirSync(uploadFolderPath);
  }


  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const username = req.username; 
      console.log(req.user)
      const userFolderPath = path.join(uploadFolderPath, username);
  
      if (!fs.existsSync(userFolderPath)) {
        fs.mkdirSync(userFolderPath);
      }
  
      cb(null, userFolderPath);
    },
    filename: (req, file, cb) => {
      const username = req.username; 
      const filename = `${username}${path.extname(file.originalname)}`;
      cb(null, filename);
    }
  });

const upload = multer({ storage: storage });

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: {type: String}
});


const User = mongoose.model('User', UserSchema)

app.use(express.json());

app.use('/uploads', express.static('uploads'));

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

app.post('/refresh-tokens', (req, res) => {
  const refreshToken = req.body.refreshToken;

  if (refreshToken == null) {
    return res.status(400).json({ message: 'Refresh token required' });
  }

  if (!tokensData[refreshToken]) {
    return res.status(403).json({ message: 'Invalid refresh token' });
  }

  const username = jwt.decode(refreshToken).username;
  const newTokens = generateTokens(username);

  res.json(newTokens);
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

app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: `Welcome, ${req.user.username}! This is a protected route.` });
});


app.post('/update-profile-picture', authenticateToken, upload.single('profilePicture'), async(req, res) => {
  if (req.file) {
    const username = req.username;
    const profilePictureFilename = req.file.filename;

    res.json({ message: 'Profile picture updated successfully' });
    const user = await User.findOneAndUpdate(
      { username },
      { $set: { profilePicture: profilePictureFilename } },
      { new: true }
    );
  } else {
    res.status(400).json({ message: 'No file uploaded' });
  }

});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

