# Projet du cours Projet Web

## Groupe 13 Participant
Elwin Bassaget

## Features disponibles 

### Backend GraphQL 

Mutations/Query pour messages/conversations/users et signIn + attribution de token (verification du token sur les requêtes non mis en place, mais la vérification d'un utilsateur par un token donné est disponible)

### Frontend Vue Js
Création d'utilisateurs, log in (avec obligation de token pour accéder aux pages), vue des conversations existantes avec d'autres utilisateur et des messages de cette conversation et affichages des autres utilisateurs. Il manque la création d'une nouvelle conversation avec un autre utilisateur et l'envoie de message malheuresement.

### Utilisation requête GraphQL via Postman/autre
Possibilité de tester la création de conversations/messages via la collection postman présent dans le repo.

## Lancement du projet via docker
Le projet à été dockérisé (Backend/Postgres/Redis/Frontend), il suffit de lancer :
```
docker-compose up -d --build
```
Et de tester l'ensemble. (Partie frontend: http://localhost:5173 , partie GraphQL : http://localhost:3000/graphql)