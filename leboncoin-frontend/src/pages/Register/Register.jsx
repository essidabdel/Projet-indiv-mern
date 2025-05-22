import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/auth/register", form);
      setMessage("Inscription réussie !");
    } catch (error) {
      setMessage(error.response?.data?.error || "Erreur lors de l'inscription");
    }
  };

  return (
    <div className="register-container">
      <h2>Inscription</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <input name="username" placeholder="Nom d'utilisateur" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Mot de passe" onChange={handleChange} required />
        <button type="submit">S'inscrire</button>
      </form>
      {message && <p className="register-message">{message}</p>}
    </div>
  );
};

export default Register;
