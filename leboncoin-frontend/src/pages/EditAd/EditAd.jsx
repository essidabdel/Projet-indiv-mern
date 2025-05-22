import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./EditAd.css";

const EditAd = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: ""
  });

  useEffect(() => {
    const fetchAd = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/ads/${id}`);
        setForm(res.data);
      } catch (error) {
        console.error("Erreur lors du chargement de l'annonce", error);
      }
    };
    fetchAd();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      await axios.put(`http://localhost:5000/ads/update/${id}`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/");
    } catch (error) {
      console.error("Erreur lors de la modification", error);
    }
  };

  return (
    <div className="editad-container">
      <h2>Modifier l’annonce</h2>
      <form className="editad-form" onSubmit={handleSubmit}>
        <input name="title" value={form.title} onChange={handleChange} placeholder="Titre" required />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" required />
        <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Prix" required />
        <input name="category" value={form.category} onChange={handleChange} placeholder="Catégorie" required />
        <button type="submit" className="editad-btn">Modifier</button>
      </form>
    </div>
  );
};

export default EditAd;
