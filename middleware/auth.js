const jwt = require("jsonwebtoken");

const config = process.env;
//untuk header auth
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  const token2 = token.split(' ')
  try {
    const decoded = jwt.verify(token2[1], 'verySecretvalue');
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;