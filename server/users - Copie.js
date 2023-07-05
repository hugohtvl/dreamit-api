const all = require("./all.json");


const users = [
  {
    id: 1,
    nom: "Manson",
    prenom: "Marilyn",
    pseudo: "Marilyn",
    mdp: "aaa",
    adresse: "15 rue St Honoré",
    ville: "LA",
    codePostal: "99099",
    pays: "USA",
    email: "marilyn.manson@youpi.us",
    tel: "+32 7 79 85 76 20",
    age: 30,
    image:
      "https://th.bing.com/th/id/OIP.qwbSJ0-sbRTlwQRt6lMDNAHaE8?pid=ImgDet&rs=1",
    favoris: [all[1], all[10], all[24], all[48], all[78], all[100]],
    commandes: [
      [[all[10]], [all[24]]],
      [all[48]],
      [
        [all[88], all[99], all[102], all[78]],
        [all[79], all[89], all[99], all[109]],
      ],
    ],
  },
  {
    id: 2,
    nom: "De Mon Mirail",
    prenom: "Hubert",
    pseudo: "hub",
    mdp: "aaa",
    adresse: "79 rue du prieuré",
    ville: "Lutèce",
    codePostal: "75001",
    pays: "France",
    email: "hub.monmirail@jacouille.fr",
    tel: "+32 7 79 85 76 20",
    age: 30,
    image:
      "https://image-uviadeo.journaldunet.com/image/450/1755370200/854586.jpg",
    favoris: [all[2], all[11], all[25], all[105]],
    commandes: [
      [[all[11]], [all[89], all[109], all[103], all[79], all[99]], [all[26]]],
      [[all[58]], [all[80], all[90], all[100], all[109]]],
      [all[81], all[91], all[101], all[113]],
    ],
  },
];

module.exports = users;