const usersDB = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data }
}

const jwt = require('jsonwebtoken');
require('dotenv').config();


const handleRefreshToken = function (req, res) {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  console.log('cookies >>', cookies);
  console.log('cookies.jwt >>>', cookies.jwt);
  const refreshToken = cookies.jwt;

  const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken);
  if (!foundUser) return res.sendStatus(403); //Forbidden
  //avalia o jwt
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (error, decoded) => {
      if (error || foundUser.username !== decoded.username) return res.sendStatus(403);
      const acessToken = jwt.sign(
        { "username": decoded.username },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '30s' }
      )
      res.json({ acessToken })
    }
  );
}

module.exports = { handleRefreshToken }