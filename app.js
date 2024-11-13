// import du frameword ExpressJs
// import express from "express";
const express = require  ("express");

// on crée l'application Expressjs
const app = express();

// on définit une route de type GET
// gére les requête GET vers la page d'accueil
app.get("/", (req, res) => {
    res.end("Akori, za serveur");
});

// crée la route "/bonjour" de type
// gére les requête GET vers la page bonjour
app.get("/bonjour", (req, res) => {
    res.send("ano moi kori");
});

// crée une route "/cuisine" de type GET
// Gére les requêtes GET vers la page cuisine
app.get("/cuisine", (rep, res) => {
    res.end("Agnati bangani.");
});

// Crée une route "/bangalo" de type GET pour voir
// une liste de bangalo
app.get("/bangalo", (req, res) => {
    res.end("vous etes dans le bangalo");
});


app.listen(3001, () => {
    console.log("serveur écoute le port 3001");
});


    

// on exporte notre variable app 
//pour la rendre visible par les autres fichiers du projet
module.exports = app;