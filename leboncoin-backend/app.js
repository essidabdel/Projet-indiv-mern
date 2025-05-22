console.log("🚀 Lancement du serveur...");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());

// Connexion MongoDB
mongoose.connect("mongodb://localhost:27017/leboncoin", {})
  .then(() => console.log("✅ Connecté à MongoDB"))
  .catch(err => console.log("❌ Erreur MongoDB :", err));

// Routes
// app.use("/users", require("./Routes/userRoutes"));
// app.use("/ads", require("./Routes/adRoutes"));

app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur le port ${PORT}`);
});
app.use("/auth", require("./Routes/authRoutes"));
app.use("/ads", require("./Routes/adRoutes"));
