import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/login", form);
      localStorage.setItem("token", res.data.token);
      setMessage("Connexion réussie !");
      navigate("/");
    } catch (error) {
      setMessage(error.response?.data?.error || "Erreur lors de la connexion");
    }
  };

  return (
    <div className="login-container">
      <h2>Connexion</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Mot de passe" onChange={handleChange} required />
        <button type="submit">Se connecter</button>
      </form>
      {message && <p className="login-message">{message}</p>}
    </div>
  );
};

export default Login;
