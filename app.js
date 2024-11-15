// import du frameword ExpressJs
// import express from "express";
const express = require  ("express");

// on crée l'application Expressjs
const app = express();

// le serveur retourne ci-dessous peu importe la requête
/*app.use((req, res) => {
    res.json({message : "Votre message a bien été reçu"});
});*/

// on définit une route de type GET
// gére les requête GET vers la page d'accueil
// app.get 
app.get("/", (req, res) => {
    res.end("Akori, za serveur");
});

// route pour /accueil
app.get("/accueil", (req, res) => {
    res.end("bienvenu à notre accueil");
});

// route pour /service
app.get("/service", (req, res) => {
    res.end("Alors les services se deroule bien");
});

// route /apropos
app.get("/apropos", (req, res) => {
    res.end("Faut qu on parle apropos de notre relation");
});

// route /contact
app.get("/contact", (req, res) => {
    res.end("Cheri passe moi tes contacts");
});

// je vais crée une route "bonjour" avec la méthode post
app.post("/Bonjour", (req, res) => {
    res.end("Bonjour! Comment ça va");
});

// je vais crée une route "including" avec la méthode put
app.put("/including", (req, res) => {
    res.end("You ve go it");
});

// je vais crée une route "register" avec la méthode delete
app.delete("/register", (req, res) => {
    res.end("save video");
});













// crée la route "/bonjour" de type
// gére les requête GET vers la page bonjour
/*app.get("/bonjour", (req, res) => {
    res.end("ano moi kori");
});

// crée une route "/cuisine" de type GET
// Gére les requêtes GET vers la page cuisine
/*app.get("/cuisine", (rep, res) => {
    res.end("Agnati bangani.");
});

// Crée une route "/bangalo" de type GET pour voir
// une liste de bangalo
/*app.get("/bangalo", (req, res) => {
    res.end("vous etes dans le bangalo");
});

/*app.listen(3001, () => {
    console.log("serveur écoute le port 3001");
});*/
  
// on exporte notre variable app 
//pour la rendre visible par les autres fichiers du projet
module.exports = app;