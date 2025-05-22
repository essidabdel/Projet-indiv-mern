# 📦 Projet MERN – Le Bon Coin (TP Individuel)

Plateforme de petites annonces inspirée de **Le Bon Coin**, développée avec la stack MERN (MongoDB, Express, React, Node.js).

---

## 🚀 Fonctionnalités principales

- 🔐 Authentification sécurisée (JWT + bcrypt)
- 📝 Création, modification et suppression d'annonces
- 👤 Association automatique de l’annonce à l’auteur connecté
- 🧱 Vérification d’accès via un **middleware JWT**
- 📂 Filtrage par catégorie (bonus)
- 🔎 Détail d’une annonce (bonus)
- 💾 Stockage local du token JWT
- ⚛️ Frontend React sans Redux (state local uniquement)

---

## 🛠️ Stack technique

| Côté            | Technologie       |
|-----------------|-------------------|
| Base de données | MongoDB           |
| Backend         | Node.js + Express |
| Frontend        | React.js          |
| Auth            | JWT + bcryptjs    |
| Client API      | Axios             |
| Routing         | react-router-dom  |

---

## 🗂️ Structure du projet

```
.
├── leboncoin-backend/
│   ├── app.js
│   ├── Models/
│   ├── Controllers/
│   └── Routes/
│
└── leboncoin-frontend/
    ├── src/
    │   ├── pages/
    │   ├── components/
    │   └── services/
```

---

## ⚙️ Installation & Lancement

### 🔙 Backend (API Node/Express)

1. Ouvre un terminal :
```bash
cd leboncoin-backend
npm install
```

2. Crée un fichier `.env` :
```env
JWT_SECRET=ton_token_secret
```

3. Lance le serveur :
```bash
npm start
```

> Serveur dispo sur : `http://localhost:5000`

---
-----------------------------------------------------------
### 🖥️ Frontend (React)

1. Ouvre un second terminal :
```bash
cd leboncoin-frontend
npm install
npm start
```

> L'application s'ouvre sur : `http://localhost:3000`

---

## 📌 Recommandations

- Tu dois avoir **MongoDB installé** et lancé en local (`mongodb://localhost:27017`)
- Test des routes avec **Postman** ou directement via le front React
- La communication entre frontend et backend se fait via l’API REST sécurisée

---

## 🧑‍💻 Réalisé par

**ESSID Abdellatif**   
TP MERN – 2025 ✅