const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.sendStatus(401);

  const token = authHeader.split(" ")[1]; //Bearer 'Token'
  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    (error, decoded) => {
      if (error) return res.sendStatus(403); // token invalido
      req.user = decoded.username;
      next();
    }
  );
}

module.exports = verifyJWT