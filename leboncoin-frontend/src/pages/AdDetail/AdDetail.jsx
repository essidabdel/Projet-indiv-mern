import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./AdDetail.css";

const AdDetail = () => {
  const { id } = useParams();
  const [ad, setAd] = useState(null);

  useEffect(() => {
    const fetchAd = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/ads/${id}`);
        setAd(res.data);
      } catch (error) {
        console.error("Erreur lors du chargement de l'annonce", error);
      }
    };

    fetchAd();
  }, [id]);

  if (!ad) return <p className="ad-detail-loading">Chargement...</p>;

  return (
    <div className="ad-detail-container">
      <h2>{ad.title}</h2>
      <p>{ad.description}</p>
      <p className="ad-detail-price">Prix : {ad.price} €</p>
      <p>Catégorie : {ad.category}</p>
      <p>Posté par : {ad.author?.username}</p>
    </div>
  );
};

export default AdDetail;
