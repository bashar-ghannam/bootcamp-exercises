const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  );
  next();
});
app.use(express.json());

const users = [
  {
    id: 1,
    username: 'bashar',
    password: 'bashar',
    isAdmin: true,
  },
  {
    id: 2,
    username: 'anwar',
    password: 'anwar',
    isAdmin: false,
  },
];

let refreshTokens = [];

const generateAccessToken = (user) => {
  return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, 'mySecretKey', {
    expiresIn: '1m',
  });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, 'myRefreshSecretKey');
};

app.post('/refresh', (request, response) => {
  const refreshToken = request.body.token;
  if (!refreshToken)
    return response.status(401).json('You are not authenticated!');
  if (!refreshTokens.includes(refreshToken)) {
    return response.status(403).json('Refresh Token is not valid!');
  }
  jwt.verify(refreshToken, 'myRefreshSecretKey', (err, user) => {
    if (err) {
      console.log(err);
    }
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);
    refreshTokens.push(newRefreshToken);
    response.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  });
});

app.post('/login', (request, response) => {
  const { username, password } = request.body;
  const user = users.find((user) => {
    return user.username === username && user.password === password;
  });
  if (user) {
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    refreshTokens.push(refreshToken);
    response.status(200).json({
      username: user.username,
      password: user.password,
      isAdmin: user.isAdmin,
      accessToken,
      refreshToken,
    });
  } else {
    response.status(400).send('Username or Password incorrect');
  }
});

const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, 'mySecretKey', (err, user) => {
      if (err) {
        return res.status(403).json('Token is not valid!');
      }

      req.user = user;
      next();
    });
  } else {
    res.status(401).json('You are not authenticated!');
  }
};

app.post('/logout', verify, (request, response) => {
  const refreshToken = request.body.token;
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  response.status(200).json('You logged out successfully.');
});

app.delete('/user/:userId', verify, (request, response) => {
  const user = request.user;
  if (user.id === parseInt(request.params.userId) || user.isAdmin) {
    response.status(200).json('User has been deleted.');
  } else {
    response.status(403).json('You are not allowed to delete this user!');
  }
});

const port = 5000;
app.listen(port, () => console.log(`Server running on Port ${port}`));
