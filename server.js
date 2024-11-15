// importer le protocole http
// require() permet d'importer le package, 
// ici le package importé est http
// Avant de convertir en ES, j'avais écrit :
// const http = require("http"); => code selon ES5 (avant 2015)
//import { createServer } from 'http'; // codage selon ES6 (2015)


const http = require('http');
const app = require('./app');

const numPort = 3002;

app.set("port", numPort);
const server = http.createServer(app);

// Récupérez l'heure
const date = new Date(); // Crée une nouvelle instence de la classe Date()
const heure = date.getHours(); // il va recupéré l'heure
const minutes = date.getMinutes(); // Il va récupéré les minutes

server.listen(numPort, () => {
   console.log("Le serveur est activé au port : ", numPort);
   //console.log( heure+ ":" +minutes )
   console.log(date.toLocaleDateString(), " ", date.toLocaleTimeString())
});

// déclaration du serveur en utilisant http
// const server = http.createServer ((req, res) => {});
// on crée le serveur selon la recommandation ES6

/*const server = createServer((req, res) => {
    // En terme de réponse, renvoie au client le message "Bonjour, ..."
    // Pour renvoyer le message de réponse, res utilise la méthode end()
    res.end("Bonjour, je suis le serveur.");
});

// le serveur est disponible sur le port 3000
server.listen(3000);

// On va lancer le server!!
// sur GitBash, exécuté la commande node server
// sur le navigateur web, tapez localhost:3000
// Que signifie "localhost:3000" ?
// localhost signifie le server en local
// c'est-à-dire dans chaque ordinateur, node JS crée un server local
// Et se serveur local est exposé au port 3000
// que retenir de bug rencontré par SAID?
// A l'exécution de la commande node,
// nodejs lance le fichier javaScript associé à "main" dans package.jsou

/*
==== En résumé
1. Le projet Node est initialisé avec la commande "npm init"
2. un serveur Node basique est lancé grâce 
à la méthode creatServer venant du package "http.createServer()"
'req' signifie le requête de l'utilisation effectuée le navigateur web
'req' signifie la réponse retourne par le serveur
exemple, ici, le serveur retourne
le message "Bonjour, je suis le serveur."
et ce grâce au code res.end ("Bonjour, je suis le serveur.");
*/