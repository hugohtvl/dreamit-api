const express = require("express");

const port = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome on the Dream IT API !");
});

const all = [
  {
    id: 1,
    mode: "dream",
    type: "custom",
    theme: "adventure",
    element: "protagonist",
    description:
      "Join Captain Jack Sparrow on a thrilling pirate adventure filled with treacherous seas, hidden treasures, and epic battles. Can you survive the pirate's life and claim the ultimate prize?",
    detail: "bla bla bla",
    price: 20,
    image: "https://th.bing.com/th/id/OIG.PZr5jFSU3njNRl0zZLLw?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 1,
    mode: "dream",
    type: "custom",
    theme: "adventure",
    element: "vehicle",
    description:
      "Sail aboard the legendary Black Pearl on a high-stakes pirate adventure. Navigate treacherous waters, uncover hidden riches, and face formidable foes. Can you conquer the seas and become a true pirate of the Black Pearl?",
    detail: "bla bla bla",
    price: 20,
    image: "https://th.bing.com/th/id/OIG.nGjYDy2LTb4O7V7Z1rc9?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },
];

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

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
