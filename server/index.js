const express = require("express");
const cors = require("cors");

const port = process.env.port || 4242;

const app = express();

app.use(cors("*"));

app.get("/", (req, res) => {
  res.send("Welcome on the Dream IT API !");
});

const all = require("./all.json");
const users = require("./users")


const getAll = (req, res) => {
  res.status(200).json(all);
};

app.get("/api/all", getAll);

app.get("/api/all/:id", (req, res) => {
  const element = all.find((element) => element.id == req.params.id);
  if (element) {
    res.status(200).json(element);
  } else {
    res.status(404).json("There is no object with this id");
  }
});


const getUsers = (req, res) => {
  res.status(200).json(users);
};

app.get("/api/users", getUsers);

app.get("/api/users/:pseudo", (req, res) => {
  const element = users.find((element) => element.pseudo === req.params.pseudo);
  if (element) {
    res.status(200).json(element);
  } else {
    res.status(404).json("There is no user with this pseudo");
  }
});


app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});


//pour pouvoir ajouter de nouveaux utilisateurs
app.use(express.json()); // Ajoutez cette ligne pour pouvoir lire les données JSON envoyées dans le corps de la requête

app.post("/api/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});


// Ajouter une commande à un utilisateur
app.post("/api/users/:pseudo/commandes", (req, res) => {
  const userPseudo = req.params.pseudo;
  const newCommande = req.body;
  const user = users.find(user => user.pseudo === userPseudo);
  if (user) {
    user.commandes.push(newCommande);
    res.status(201).json(newCommande);
  } else {
    res.status(404).json({ message: `Aucun user avec le pseudo ${userPseudo}` });
  }
});

//ajouter des éléments à favoris
app.post("/api/users/:pseudo/favoris", (req, res) => {
  const userPseudo = req.params.pseudo;
  const newFavoris = req.body;
  const newFavorisId = newFavoris.id;
  const user = users.find(user => user.pseudo === userPseudo);
  const favoriIndex=user.favoris.findIndex(favori => favori.id == newFavorisId);
  if (user) {
    if(favoriIndex == -1){
    user.favoris.push(newFavoris);
    res.status(201).json(newFavoris);
    } else {
      res.status(404).json({ message: "Ce favoris existe déjà !" });
    }
  } else {
    res.status(404).json({ message: `Aucun user avec le pseudo ${userPseudo}` });
  }
});

//supprimer des éléments à favoris
app.delete("/api/users/:pseudo/favoris/:idCard", (req,res) => {
  const userPseudo = req.params.pseudo;
  const idFavorisToDelete = req.params.idCard;
  const user = users.find(user => user.pseudo === userPseudo);
  if (user) {
    const favoriIndex = user.favoris.findIndex(favori => favori.id == idFavorisToDelete);
    if(favoriIndex !== -1){
      console.log("user.favoris",user.favoris);
      console.log("user.favoris[0]",user.favoris[0]);
      user.favoris.splice(favoriIndex,1);
      res.status(204).end();
    }else {
      res.status(404).json({ message: `Aucun favoris d'id ${favoriIndex} pour l'utilisateur ${userPseudo}` });
    }
    
  } else {
    res.status(404).json({ message: `Aucun user avec le pseudo ${userPseudo}` });
  }
})