import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CreateAd.css";

const CreateAd = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: ""
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      await axios.post("http://localhost:5000/ads/create", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/");
    } catch (error) {
      setMessage(error.response?.data?.error || "Erreur lors de la création");
    }
  };

  return (
    <div className="createad-container">
      <h2>Créer une annonce</h2>
      <form className="createad-form" onSubmit={handleSubmit}>
        <input name="title" placeholder="Titre" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        <input name="price" type="number" placeholder="Prix" onChange={handleChange} required />
        <input name="category" placeholder="Catégorie" onChange={handleChange} required />
        <button type="submit">Publier</button>
      </form>
      {message && <p className="createad-message">{message}</p>}
    </div>
  );
};

export default CreateAd;
