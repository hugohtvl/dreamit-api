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
