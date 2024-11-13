// importer le protocole http
// require() permet d'importer le package, 
// ici le package importé est http
import { createServer } from 'http'; // codage selon ES6 (2015)


// déclaration du serveur en utilisant http
// const server = http.createServer ((req, res) => {});
// on crée le serveur selon la recommandation ES6

const server = createServer((req, res) => {
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
*/