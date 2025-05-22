import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Ads from "./pages/Ads/Ads";
import AdDetail from "./pages/AdDetail/AdDetail";
import Navbar from "./components/Navbar/Navbar";
import CreateAd from "./pages/CreateAd/CreateAd";
import EditAd from "./pages/EditAd/EditAd";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Ads />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ads/:id" element={<AdDetail />} />
        <Route path="/create" element={<CreateAd />} />
        <Route path="/ads/edit/:id" element={<EditAd />} />
      </Routes>
    </Router>
  );
}

export default App;
