// import du frameword ExpressJs
// import express from "express";
const express = require  ("express");
const url = require("url");

// on crée l'application Expressjs
const app = express();

// le serveur retourne ci-dessous peu importe la requête

/*
=== Middleware ===
Les Mddleware est un ensemble de fonctions que l'on peut combiner
dans un seul serveurs
*/
// Middleware 1
/*app.use((req, res, next) => {
    console.log("Votre message a bien été reçu");
    next();
});*/

// Middleware 2
/*app.use((req, res, next) => {
    res.status(201);
    next();
});*/

// Middleware 3
/*app.use((req, res, next) => {
    const date = new Date();
    res.json({
        heure : date.toLocaleTimeString(),
        typeRequest : req.method,
        reqHeaders : res.headers
    });
    next();
});*/

// Middleware 4
/*app.use((req,res, next) => {
    console.log("Fin de Middleware");
});*/

// on définit une route de type GET
// gére les requête GET vers la page d'accueil
// app.get 
/*app.get("/", (req, res) => {
    res.end("Akori, za serveur");
});*/

// route pour /accueil
/*app.get("/accueil", (req, res) => {
    res.end("bienvenu à notre accueil");
});*/

// route pour /service
/*app.get("/service", (req, res) => {
    res.end("Alors les services se deroule bien");
});*/

// route /apropos
/*app.get("/apropos", (req, res) => {
    res.end("Faut qu on parle apropos de notre relation");
});*/

// route /contact
/*app.get("/contact", (req, res) => {
    res.end("Cheri passe moi tes contacts");
});*/

// je vais crée une route "bonjour" avec la méthode post
/*app.post("/Bonjour", (req, res) => {
    res.end("Bonjour! Comment ça va");
});*/

// je vais crée une route "including" avec la méthode put
/*app.put("/including", (req, res) => {
    res.end("You ve go it");
});*/

// je vais crée une route "register" avec la méthode delete
/*app.delete("/register", (req, res) => {
    res.end("save video");
});*/

/*
=== API ===
*/

// Format URL : localhost:3002/api/nom
app.get("/api/nom", (req, res, next) => {
    const monObjet =[{
        nom: "Ambidil",
        prenom: "Karim",
    }];
    // Retourne l'objet "monObjet" sous format JSON et retourne le code 200
    res.status(200).json(monObjet);
});

// Format URL : localhost:3002/api/url
app.get("/api/url", (req, res) => {
    // Je retourne une réponse de HTML et de status 200
    res.writeHead(200, {'content-type': 'text/html'});

    res.write(req.url); // Récupérer l'URL passé dans la requête

    res.end(); // Fin de réponse
});

// Format URL / localhost:3002/?annee=2024
/*Exemple https://www.google.com/search?q=mayotte
Analyse de l'URL :
l'url de base : https://www.google.com
l'url complet avec l'API https://www.google.com/search
l'url complet avec des paramètres. 
Les paramètre sont précédés par le point d'interrogation '?'
Le mot-clé 'q' contient la valeur 'Mayotte' q=mayotte
*/
app.get("/param", (req, res) => {
    res.writeHead(200, {'content-type': 'text/html'});
    let param = req.query.annee;
    res.end(param);
});


 //let query = url.parse(req.url, true).query;
    //let = resultatAffiche = query.annee;






/*app.use((req, res, next) => {
    console.log("hewawe tsa vani.");
    next();
});

app.use((req, res, next) => {
    console.log("kara kori anoti mamané.");
    next();
});*/


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