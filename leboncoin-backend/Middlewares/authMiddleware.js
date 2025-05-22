const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).send({ error: "Accès refusé : token manquant" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { _id, username }

    next();
  } catch (error) {
    res.status(401).send({ error: "Token invalide ou expiré" });
  }
};

module.exports = authMiddleware;
