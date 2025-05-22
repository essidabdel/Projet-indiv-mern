import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-link">Annonces</Link>
      </div>
      <div className="navbar-right">
        {token ? (
          <>
            <Link to="/create" className="navbar-link">Créer une annonce</Link>
            <button className="navbar-btn" onClick={handleLogout}>Se déconnecter</button>
          </>
        ) : (
          <>
            <Link to="/register" className="navbar-link">S’inscrire</Link>
            <Link to="/login" className="navbar-link">Se connecter</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
