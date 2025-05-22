import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Ads.css";

function getUserIdFromToken() {
  const token = localStorage.getItem("token");
  if (!token) return null;
  const payload = JSON.parse(atob(token.split(".")[1]));
  return payload._id;
}

const Ads = () => {
  const [ads, setAds] = useState([]);
  const [allAds, setAllAds] = useState([]);
  const [onlyMine, setOnlyMine] = useState(false);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const res = await axios.get("http://localhost:5000/ads/all");
        setAllAds(res.data);
        setAds(res.data);
      } catch (error) {
        console.error("Erreur lors du chargement des annonces", error);
      }
    };
    fetchAds();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Tu veux vraiment supprimer cette annonce ?");
    if (!confirm) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/ads/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAds(ads.filter((ad) => ad._id !== id));
      setAllAds(allAds.filter((ad) => ad._id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression", error);
    }
  };

  const toggleFilter = () => {
    const userId = getUserIdFromToken();
    if (!onlyMine) {
      const filtered = allAds.filter((ad) => ad.author._id === userId);
      setAds(filtered);
    } else {
      setAds(allAds);
    }
    setOnlyMine(!onlyMine);
  };

  return (
    <div className="ads-container">
      <h2>Annonces disponibles</h2>
      <button className="ads-filter-btn" onClick={toggleFilter}>
        {onlyMine ? "Voir toutes les annonces" : "Voir mes annonces"}
      </button>

      <div className="ads-list">
        {ads.map((ad) => (
          <div key={ad._id} className="ad-card">
            <h3>{ad.title}</h3>
            <p>{ad.description}</p>
            <p className="ad-price">Prix : {ad.price} €</p>
            <p>Catégorie : {ad.category}</p>
            <p>Posté par : {ad.author?.username}</p>
            <Link className="ad-link" to={`/ads/${ad._id}`}>Voir l’annonce</Link>

            {ad.author._id === getUserIdFromToken() && (
              <Link className="ad-btn ad-btn-edit" to={`/ads/edit/${ad._id}`}>Modifier</Link>
            )}
            {ad.author._id === getUserIdFromToken() && (
              <button className="ad-btn ad-btn-delete" onClick={() => handleDelete(ad._id)}>Supprimer</button>
            )}
            

          </div>
        ))}
      </div>
    </div>
  );
};

export default Ads;
