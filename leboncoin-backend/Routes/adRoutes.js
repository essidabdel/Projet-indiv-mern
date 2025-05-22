const express = require("express");
const router = express.Router();
const { createAd, getAllAds ,updateAd ,deleteAd, getAdById} = require("../Controllers/adController");
const auth = require("../Middlewares/authMiddleware");

router.post("/create", auth, createAd);
router.get("/all", getAllAds);
router.put("/update/:id", auth, updateAd);
router.delete("/delete/:id", auth, deleteAd);
router.get("/:id", getAdById);


module.exports = router;
