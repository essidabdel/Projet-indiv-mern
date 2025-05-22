const Ad = require("../Models/adModel");

const createAd = async (req, res) => {
  try {
    const ad = new Ad({
      ...req.body,
      author: req.user._id, // Injecté via le middleware
    });

    await ad.save();
    res.status(201).send(ad);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const getAllAds = async (req, res) => {
  try {
    const filters = {};

    if (req.query.category) {
      filters.category = { $regex: req.query.category, $options: "i" }; // insensible à la casse
    }

    const ads = await Ad.find(filters).populate("author", "username email");
    res.status(200).send(ads);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getAdById = async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id).populate("author", "username email");

    if (!ad) {
      return res.status(404).send({ error: "Annonce introuvable" });
    }

    res.status(200).send(ad);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const updateAd = async (req, res) => {
  try {
    const ad = await Ad.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!ad) {
      return res.status(404).send({ error: "Annonce introuvable" });
    }

    res.status(200).send({ message: "Annonce modifiée", ad });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
const deleteAd = async (req, res) => {
  try {
    const ad = await Ad.findByIdAndDelete(req.params.id);

    if (!ad) {
      return res.status(404).send({ error: "Annonce introuvable" });
    }

    res.status(200).send({ message: "Annonce supprimée", ad });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};


module.exports = { createAd , getAllAds ,getAdById, updateAd , deleteAd };
