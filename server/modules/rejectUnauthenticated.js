const authenticate = (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.sendStatus(403);
    }
  };
  
  module.exports = { authenticate };