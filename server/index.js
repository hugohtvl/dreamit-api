const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 3001;

const app = express();

app.use(cors("*"));

app.get("/", (req, res) => {
  res.send("Welcome on the Dream IT API !");
});

const all = [
  {
    id: 1,
    mode: "dream",
    type: "ready-to-use",
    theme: "travel",
    element: "",
    name: "Explorateur du Monde",
    description:
      "Lancez-vous dans un voyage inoubliable à travers des ruines anciennes, des villes vibrantes et des paysages à couper le souffle. Explorez des cultures diverses, savourez une délicieuse cuisine et créez des souvenirs durables. Êtes-vous prêt à découvrir le monde ?",
    detail:
      "Découvrez les merveilles du voyage en vous lançant dans un voyage immersif à travers les continents et les cultures. Découvrez des trésors cachés, des monuments emblématiques et des merveilles naturelles envoûtantes. Des villes animées aux plages paisibles, chaque destination offre un mélange unique d'histoire, d'art et d'aventure. Capturez l'essence de vos voyages à travers des photographies vibrantes et des récits sincères. Embrassez la joie de l'exploration et laissez votre soif d'aventure vous guider vers des expériences incroyables. Préparez-vous à vous émerveiller, à vous épanouir et à vivre des moments inoubliables.",
    price: 20,
    image:
      "https://images.nightcafe.studio/jobs/U4ALWFHk155frDnvYrTN/U4ALWFHk155frDnvYrTN--3--nqtbg.jpg",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 2,
    mode: "dream",
    type: "ready-to-use",
    theme: "travel",
    element: "",
    name: "Évasion Aventurière",
    description:
      "Lancez-vous dans une aventure palpitante à travers des territoires inexplorés et des contrées lointaines. Découvrez des trésors cachés, rencontrez une faune exotique et plongez-vous dans des cultures vibrantes. Êtes-vous prêt à embrasser l'esprit de l'exploration ?",
    detail:
      "Laissez libre cours à votre sens de l'aventure en traversant des territoires inconnus et en vous lançant dans un voyage de découverte. Des forêts tropicales isolées aux ruines anciennes, chaque destination offre l'opportunité de vous immerger dans des paysages uniques et des traditions riches. Interagissez avec les habitants chaleureux, goûtez une cuisine alléchante et plongez-vous dans l'histoire fascinante de chaque lieu. Que vous escaladiez des montagnes majestueuses ou plongiez dans des eaux cristallines, chaque pas dévoilera de nouvelles merveilles et créera des souvenirs impérissables. Entraînez-vous à l'inconnu, éveillez votre curiosité et laissez l'esprit de l'exploration vous guider vers des expériences extraordinaires.",
    price: 30,
    image:
      "https://images.nightcafe.studio/jobs/nXI741HoAgScGtFRMnFX/nXI741HoAgScGtFRMnFX--4--w849d.jpg",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 3,
    mode: "dream",
    type: "ready-to-use",
    theme: "travel",
    element: "",
    name: "Paradis Tropical",
    description:
      "Évadez-vous vers un paradis tropical avec des plages bordées de palmiers, des eaux turquoise et un ensoleillement sans fin. Profitez de complexes luxueux, de sports nautiques palpitants et de soins de spa régénérants. Êtes-vous prêt à vivre une relaxation bienheureuse ?",
    detail:
      "Détendez-vous et régénérez-vous dans le luxe absolu en vous échappant vers un paradis tropical. Sentez le sable chaud entre vos orteils, écoutez les douces vagues se briser et profitez du soleil glorieux. Plongez-vous dans un monde de détente avec des soins de spa revigorants, des séances de yoga apaisantes et des méditations paisibles au bord de la plage. Savourez une délicieuse cuisine et délectez-vous de cocktails tropicaux tout en admirant les couchers de soleil à couper le souffle qui peignent le ciel. Que vous choisissiez de vous prélasser au bord de la piscine, de vous embarquer dans des aventures aquatiques ou simplement de vous imprégner de l'atmosphère sereine, cette escapade idyllique promet de revitaliser votre corps, votre esprit et votre âme.",
    price: 25,
    image:
      "https://images.nightcafe.studio/jobs/VYDJEjKpzJYqlh7lbt9K/VYDJEjKpzJYqlh7lbt9K--2--d6z10.jpg",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 4,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "travel",
    element: "",
    name: "Odyssée sombre",
    description:
      "Embarquez pour un voyage cauchemardesque à travers des royaumes hantés et des paysages maudits. Faites face à des créatures sinistres, dévoilez des mystères glaçants et parcourez des chemins traîtres. Pouvez-vous survivre aux horreurs qui se cachent dans l'ombre ?",
    detail:
      "Préparez-vous à une odyssée glaçante alors que vous vous aventurez dans les coins les plus sombres de royaumes hantés et de paysages maudits. Des villes fantomatiques inquiétantes aux cimetières désolés, chaque pas testera votre courage et votre résilience. Affrontez des créatures sinistres qui se nourrissent de votre peur, dévoilez des mystères glaçants qui chuchotent depuis les ombres et parcourez des chemins traîtres menant à des horreurs innommables. Seuls les plus forts survivront à cette attaque cauchemardesque. Serez-vous consumé par les ténèbres ou émergerez-vous en tant que véritable survivant ? Préparez-vous à une aventure palpitante qui poussera votre santé mentale à son maximum.",
    price: 35,
    image:
      "https://images.nightcafe.studio/jobs/QJU3BCmXdBidpavW5Pwp/QJU3BCmXdBidpavW5Pwp--1--4tbse.jpg",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 5,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "travel",
    element: "",
    name: "Expéditions Tordues",
    description:
      "Embarquez pour une expédition éprouvante à travers des dimensions tordues et des réalités déformées. Naviguez à travers des labyrinthes de folie, rencontrez des entités d'un autre monde et dévoilez des énigmes à vous briser l'esprit. Succomberez-vous à la folie ou deviendrez-vous un phare de lucidité ?",
    detail:
      "Aventurez-vous dans les profondeurs de dimensions tordues où la réalité se plie et se déforme à chaque pas. Naviguez à travers des labyrinthes de folie où les murs se déplacent et les couloirs mènent à des royaumes inconnus. Rencontrez des entités d'un autre monde qui existent au-delà de la compréhension humaine et faites face à des énigmes à vous briser l'esprit qui remettent en question la trame même de votre santé mentale. Succomberez-vous aux horreurs qui se cachent dans les ombres ou émergerez-vous en tant que phare de lumière dans l'abîme ? Préparez-vous à une odyssée cauchemardesque qui mettra vos courage et résilience à l'épreuve.",
    price: 20,
    image:
      "https://images.nightcafe.studio/jobs/9ROBVObkhxf9Ozg2iOGd/9ROBVObkhxf9Ozg2iOGd--1--emik8.jpg",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 6,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "travel",
    element: "",
    name: "Voyages Maudits",
    description:
      "Embarquez pour des voyages maudits vers des destinations hantées où règnent des forces malveillantes. Confrontez des esprits vengeurs, résolvez des malédictions anciennes et survivez à des rencontres paranormales. Parviendrez-vous à vous libérer de la malédiction ou serez-vous piégé dans les ténèbres éternelles ?",
    detail:
      "Préparez-vous à des voyages maudits vers des destinations hantées où la frontière entre les vivants et les morts est floue. Affrontez des esprits vengeurs en quête de rétribution, déchiffrez des malédictions anciennes qui lient les âmes à un tourment éternel et survivez à des rencontres glaçantes avec le paranormal. Chaque pas vous rapprochera du cœur des ténèbres alors que vous dévoilez les secrets qui enveloppent ces royaumes maudits. Parviendrez-vous à vous libérer de la malédiction qui emprisonne votre âme ou succomberez-vous aux forces malveillantes qui se tapissent dans l'ombre ? Préparez-vous à une aventure terrifiante où la survie dépend de votre capacité à affronter le surnaturel.",
    price: 20,
    image: "https://th.bing.com/th/id/OIG.MLBxrbg6SIL1kmVL6NUh?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 7,
    mode: "dream",
    type: "ready-to-use",
    theme: "action-adventure",
    element: "",
    name: "Aventure de Pirates",
    description:
      "Rejoignez le capitaine Jack Sparrow dans une aventure palpitante de pirates remplie de mers traîtres, de trésors cachés et de batailles épiques. Pourrez-vous survivre à la vie de pirate et réclamer le prix ultime ?",
    detail:
      "Embarquez pour une aventure palpitante de pirates avec le capitaine Jack Sparrow, un pirate charismatique et rusé qui dirige un équipage loyal de marins, d'épéistes et de navigateurs talentueux. Ensemble, ils prennent la mer sur le légendaire Black Pearl, naviguant sur des mers traîtres avec des vagues déferlantes et des courants imprévisibles. Leur quête les mène à l'île du Crâne, une terre reculée et périlleuse entourée de légendes et gardée par des créatures surnaturelles. Cependant, leur voyage est entravé par le capitaine Barbe Noire, un pirate impitoyable qui cherche également à réclamer le trésor ultime. Dans une série de batailles épiques et de confrontations dangereuses, Jack Sparrow et son équipage doivent lutter pour leur survie et trouver un moyen de s'emparer du trésor tant convoité. Serez-vous prêt à vivre l'aventure de votre vie en tant que pirate intrépide ?",
    price: 20,
    image: "https://th.bing.com/th/id/OIG.PZr5jFSU3njNRl0zZLLw?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 8,
    mode: "dream",
    type: "ready-to-use",
    theme: "action-adventure",
    element: "",
    name: "Mission Agent Secret",
    description:
      "Enfilez les chaussures d'un agent secret lors d'une mission à haut risque pour sauver le monde. Découvrez des indices cachés, trompez vos ennemis et arrêtez un complot diabolique. Êtes-vous prêt à devenir l'espion ultime ?",
    detail:
      "Devenez un maître de l'espionnage en vous lançant dans une mission palpitante en tant qu'agent secret. Naviguez à travers des labyrinthes complexes, infiltrez les repaires ennemis et décodez des messages cryptés. Utilisez des gadgets dernier cri, montrez vos compétences en combat et participez à des courses-poursuites à couper le souffle. Avec le sort du monde en jeu, il vous incombe de déjouer les méchants rusés et de les traduire en justice. Préparez-vous à une action palpitante, à des rebondissements haletants et au test ultime de vos capacités d'espion.",
    price: 20,
    image: "https://th.bing.com/th/id/OIG.47M3LewiZOI5w1BM24DJ?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 9,
    mode: "dream",
    type: "ready-to-use",
    theme: "action-adventure",
    element: "",
    name: "Entraînement Ninja Warrior",
    description:
      "Lancez-vous dans un programme d'entraînement intensif pour devenir un ninja guerrier compétent. Apprenez les techniques ancestrales d'arts martiaux, surmontez des défis physiques et libérez votre force intérieure. Êtes-vous prêt à embrasser la voie du ninja ?",
    detail:
      "Immergez-vous dans l'art ancien du ninjutsu tout en vous entraînant pour devenir un redoutable guerrier. Maîtrisez les mouvements furtifs, perfectionnez vos compétences en combat et parcourez des parcours d'obstacles conçus pour tester votre agilité et votre endurance. Apprenez les secrets du camouflage, l'art de l'escrime et la capacité à exploiter votre énergie intérieure. Affrontez d'autres stagiaires lors de sessions amicales d'entraînement et participez à des missions palpitantes qui mettent vos compétences à l'épreuve. Au fur et à mesure de votre progression dans votre voyage, vous découvrirez l'essence véritable d'être un ninja et découvrirez le pouvoir qui sommeille en vous.",
    price: 20,
    image: "https://th.bing.com/th/id/OIG.pWe7zt2e5BGy6k7t1ZRn?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 10,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "action-adventure",
    element: "",
    name: "Défi de Survie de l'Apocalypse",
    description:
      "Immergez-vous dans un monde post-apocalyptique et testez vos compétences en matière de survie. Affrontez des défis incessants, fouillez à la recherche de ressources et trompez des factions hostiles. Êtes-vous prêt à affronter les ténèbres qui vous attendent ?",
    detail:
      "Plongez dans un futur cauchemardesque où la société s'est effondrée et où le chaos règne en maître. Dans ce monde post-apocalyptique, vous devez naviguer à travers des paysages désolés, chercher des ressources rares et repousser les factions hostiles qui luttent pour le contrôle. Combattez la faim, la maladie et la menace constante de la violence pendant que vous vous battez pour survivre. Vos choix détermineront votre destin alors que vous affrontez les dures réalités d'un monde au bord de l'oubli. Préparez-vous à affronter vos plus grandes peurs et à découvrir ce que signifie réellement survivre face à une destruction totale.",
    price: 20,
    image: "https://th.bing.com/th/id/OIG.hby98DxAqQf6EpHMdkEp?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 11,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "action-adventure",
    element: "",
    name: "Exploration de la Maison Hantée",
    description:
      "Affrontez les horreurs d'une maison hantée alors que vous dévoilez ses sombres secrets. Parcourez des corridors fantomatiques, résolvez des énigmes sinistres et affrontez des esprits vengeurs. Êtes-vous prêt à pénétrer dans un royaume de ténèbres éternelles ?",
    detail:
      "Entrez dans un manoir enveloppé de ténèbres et rempli d'horreurs innommables. Explorez ses couloirs lugubres, chaque pas résonnant avec les murmures des esprits inquiets qui y résident. Résolvez des énigmes énigmatiques, déchiffrez des messages cryptiques et découvrez l'histoire tragique du manoir et de ses habitants. Mais méfiez-vous, car des entités malveillantes se tapissent dans l'ombre, désireuses de s'emparer d'âmes insoupçonnées. Affrontez vos plus grandes peurs, faites appel à votre courage et découvrez la vérité qui se cache derrière cette maison hantée. Préparez-vous à affronter le surnaturel et à survivre aux profondeurs cauchemardesques du manoir hanté.",
    price: 20,
    image: "https://th.bing.com/th/id/OIG.F9WBqGMvL7n9gDta_8NV?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 12,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "action-adventure",
    element: "",
    name: "Évasion de l'Apocalypse Zombie",
    description:
      "Plongez dans un monde envahi par les morts-vivants. Évitez les hordes de zombies voraces, fouillez à la recherche de provisions et battez-vous pour votre survie. Pouvez-vous échapper aux griffes de l'apocalypse zombie ?",
    detail:
      "Dans un monde ravagé par une épidémie de zombies impitoyable, vous devez naviguer à travers des villes désolées, des structures abandonnées et des paysages traîtres. Trompez les hordes de zombies voraces, récupérez des provisions vitales et renforcez vos défenses. Chaque décision compte alors que vous formez des alliances, faites face à des dilemmes moraux et repoussez les limites de votre humanité. Succomberez-vous à la faim insatiable des morts-vivants ou vous élèverez-vous comme un phare d'espoir dans un monde plongé dans les ténèbres ? Préparez-vous à affronter l'assaut incessant de l'apocalypse zombie et à lutter pour votre survie contre toute attente.",
    price: 20,
    image: "https://th.bing.com/th/id/OIG.LzAf.Cypg1ncb7TXxahB?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 13,
    mode: "dream",
    type: "ready-to-use",
    theme: "cooking",
    element: "",
    name: "Chef Gourmet : Cours de Maître",
    description:
      "Libérez votre créativité culinaire et maîtrisez l'art de la cuisine gastronomique. Apprenez auprès de chefs de renommée mondiale, expérimentez avec les saveurs et perfectionnez vos compétences gastronomiques. Êtes-vous prêt à vous lancer dans un voyage d'excellence culinaire ?",
    detail:
      "Plongez dans le monde de la gastronomie en rejoignant des chefs renommés lors d'un cours de maître conçu pour libérer votre potentiel culinaire. Apprenez les techniques de la gastronomie moléculaire, découvrez l'art du dressage et explorez la fusion de différentes cuisines. Expérimentez avec des ingrédients exotiques, savourez l'arôme des épices fraîchement moulues et créez des plats qui titillent les papilles gustatives. Des pâtisseries délicates aux repas élaborés en plusieurs plats, chaque leçon élargira votre répertoire et élèvera votre cuisine à de nouveaux sommets. Préparez-vous à vous embarquer dans une aventure culinaire où la créativité n'a pas de limites.",
    price: 20,
    image: "https://th.bing.com/th/id/OIG.VmQw7AizpAyklQmJDfSB?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 14,
    mode: "dream",
    type: "ready-to-use",
    theme: "cooking",
    element: "",
    name: "Expérience Ferme à Table",
    description:
      "Plongez-vous dans le monde de la cuisine durable en découvrant les joies de la cuisine ferme à table. Récoltez des produits frais, apprenez des méthodes de cuisine traditionnelles et adoptez une alimentation plus saine. Êtes-vous prêt à vous embarquer dans un voyage culinaire qui vous reconnecte avec la nature ?",
    detail:
      "Entrez dans le monde de la cuisine durable en explorant le mouvement de la ferme à table. Parcourez de luxuriants fermes biologiques, cueillez des produits de saison à la main et apprenez l'art de préserver les saveurs grâce à des méthodes traditionnelles. Engagez-vous auprès des agriculteurs locaux, découvrez l'importance de l'agriculture responsable et apprenez les bienfaits nutritionnels des ingrédients frais. De la création de repas sains à la confection de conserves maison, chaque expérience approfondira votre lien avec la terre et fera naître en vous une passion pour un mode de vie durable. Préparez-vous à savourer les saveurs pures de la nature à chaque bouchée.",
    price: 20,
    image: "https://th.bing.com/th/id/OIG.qMNSVae24IgnucWLA4bB?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 15,
    mode: "dream",
    type: "ready-to-use",
    theme: "cooking",
    element: "",
    name: "Exploration de la Cuisine Mondiale",
    description:
      "Lancez-vous dans une aventure culinaire mondiale en explorant la riche diversité des saveurs du monde entier. Découvrez les techniques de cuisine variées, les recettes traditionnelles et l'essence de la cuisine de chaque culture. Êtes-vous prêt à émerveiller vos papilles avec une multitude de délices internationaux ?",
    detail:
      "Embarquez pour un voyage culinaire qui transcende les frontières en plongeant dans le monde de la cuisine mondiale. Maîtrisez l'art du roulage de sushi au Japon, apprenez les secrets pour créer la parfaite pasta en Italie et savourez les épices vibrantes de l'Inde. Immergez-vous dans les traditions culturelles, connectez-vous avec des chefs locaux et dévoilez les secrets culinaires transmis de génération en génération. De la street food à la haute cuisine, chaque destination offrira une expérience culinaire unique qui reflète l'âme de la culture. Préparez-vous à élargir votre palais et à développer une plus grande appréciation de la diversité des saveurs qui existent à travers le monde.",
    price: 20,
    image: "https://th.bing.com/th/id/OIG..em7YQvE5Wz3_sB3tDh.?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 16,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "cooking",
    element: "",
    name: "Délices Sucrés Sinistres",
    description:
      "Entrez dans un monde où la douceur se transforme en obscurité. Créez des desserts délicieusement terrifiants qui tentent et effraient. Êtes-vous prêt à vous plonger dans un voyage sinistre de délices culinaires ?",
    detail:
      "Osez vous aventurer dans le royaume des desserts maléfiques en créant des gourmandises tentantes avec une touche sinistre. Réalisez des confiseries qui brouillent la frontière entre plaisir et douleur en utilisant des ingrédients non conventionnels et une présentation macabre. Plongez dans les arts obscurs de la pâtisserie en infusant vos créations de l'essence des ombres et des secrets. Explorez les limites du goût et de la texture en créant des desserts qui titillent les sens et laissent une impression persistante et envoûtante. Préparez-vous à vous plonger dans le côté sombre de la gastronomie, où la frontière entre plaisir et peur se confond dans un cauchemar délicieux.",
    price: 20,
    image: "https://th.bing.com/th/id/OIG.dUtXr8u8l8OfOnl8WWxQ?pid=ImgGn&rs=1",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 17,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "cooking",
    element: "",
    name: "Défi de la Cuisine Maudite",
    description:
      "Pénétrez dans une cuisine maudite où chaque plat que vous préparez devient un cauchemar culinaire. Surmontez les ingrédients maudits, brisez les sorts de cuisine et retrouvez votre talent culinaire. Pouvez-vous vaincre la malédiction ?",
    detail:
      "Entrez dans une cuisine plongée dans les ténèbres, tourmentée par une malédiction qui transforme vos créations culinaires en abominations cauchemardesques. Naviguez à travers des recettes tordues, surmontez les ingrédients maudits qui prennent vie et défiez les esprits malfaisants qui hantent votre espace de cuisson. Résolvez des énigmes culinaires, brisez la malédiction et restaurez votre talent culinaire dans toute sa gloire d'antan. Chaque étape vous rapproche de la rédemption, mais les forces obscures de la cuisine ne reculeront devant rien pour vous garder piégé dans le cauchemar. Préparez-vous à affronter la cuisine maudite et à retrouver votre maîtrise culinaire lors d'une bataille contre le surnaturel.",
    price: 20,
    image: "https://th.bing.com/th/id/OIG.kUqhxWk391KRq1UeoxQw?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 18,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "cooking",
    element: "",
    name: "Inferno Gastronomique",
    description:
      "Plongez dans les abysses du chaos culinaire en pénétrant dans un inferno gastronomique. Affrontez des recettes démoniaques, surmontez des défis enflammés et apprivoisez les saveurs infernales. Pouvez-vous supporter la chaleur de l'enfer ?",
    detail:
      "Descendez dans un monde souterrain culinaire où le chaos et les flammes règnent en maîtres. Affrontez des recettes démoniaques qui mettent vos compétences à rude épreuve, relevez des défis enflammés qui testent votre détermination et apprivoisez les saveurs infernales qui menacent de submerger vos sens. Naviguez à travers des cuisines perfides, exploitez le pouvoir de l'alchimie culinaire et émergez victorieux de l'enfer brûlant. Chaque plat que vous conquérez vous rapproche de la maîtrise des arts culinaires face au chaos absolu. Préparez-vous à supporter la chaleur brûlante et à libérer votre créativité culinaire au cœur de l'inferno gastronomique.",
    price: 20,
    image: "https://th.bing.com/th/id/OIG.d_VDb8jfuc.5SomD12FI?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 19,
    mode: "dream",
    type: "ready-to-use",
    theme: "motoring",
    element: "",
    name: "Ruée de Vitesse",
    description:
      "Préparez-vous à une expérience de pilotage à sensations fortes comme aucune autre. Prenez le contrôle de machines puissantes, participez à des courses sur des pistes palpitantes et brisez les barrières de vitesse. Êtes-vous prêt à libérer votre démon de la vitesse intérieur ?",
    detail:
      "Attachez-vous pour une aventure haute en adrénaline en plongeant dans le monde du pilotage. Ressentez l'excitation de prendre le contrôle de machines puissantes, de participer à des courses sur des pistes palpitantes et de briser les barrières de vitesse. Poussez vos compétences à leur limite en maîtrisant les virages serrés, en naviguant sur un terrain exigeant et en vous mesurant à des adversaires talentueux. Que vous préfériez le rugissement du moteur ou la précision de la conduite, cette expérience de pilotage mettra votre courage à l'épreuve et réveillera votre passion pour la vitesse.",
    price: 35,
    image: "https://th.bing.com/th/id/OIG.oHo3XLAM9Kog9MfNDFH.?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 20,
    mode: "dream",
    type: "ready-to-use",
    theme: "motoring",
    element: "",
    name: "Escapade en Road Trip",
    description:
      "Lancez-vous dans une aventure épique en road trip remplie de paysages à couper le souffle, de joyaux cachés et de rencontres inoubliables. Mettez-vous au volant et laissez la route ouverte être votre guide. Êtes-vous prêt à prendre la route ?",
    detail:
      "Préparez-vous pour l'escapade en road trip ultime alors que vous vous embarquez dans un voyage de découverte. Parcourez les autoroutes pittoresques, serpentant à travers des paysages à couper le souffle et passant devant des sites emblématiques. Explorez des villes charmantes, dégustez des cuisines locales et connectez-vous avec d'autres voyageurs en chemin. Que vous conduisiez une décapotable classique ou un SUV robuste, chaque mile sera rempli d'excitation et de nouvelles expériences. Préparez-vous à créer des souvenirs inoubliables et à embrasser la liberté de la route ouverte.",
    price: 45,
    image: "https://example.com/road_trip.jpg",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 21,
    mode: "dream",
    type: "ready-to-use",
    theme: "motoring",
    element: "",
    name: "Fantaisie de Supercar",
    description:
      "Vivez l'excitation de conduire une machine de rêve. Glissez-vous dans le siège du conducteur d'une supercar luxueuse, ressentez la puissance brute sous votre contrôle et laissez l'ordinaire derrière vous. Pouvez-vous gérer la fantaisie automobile ultime ?",
    detail:
      "Préparez-vous à voir vos fantasmes automobiles prendre vie lorsque vous entrez dans le monde des supercars. Ressentez l'exaltation lorsque vous vous glissez dans le siège du conducteur d'une machine élégante et puissante. Découvrez la puissance brute et l'ingénierie de précision qui distinguent ces véhicules extraordinaires. Accélérez sur les autoroutes, négociez des virages difficiles et laissez les spectateurs admiratifs devant votre talent automobile. Du rugissement emblématique du moteur à l'accélération fluide, c'est votre chance de vivre vos rêves de supercar et de laisser la conduite ordinaire derrière vous.",
    price: 55,
    image: "https://th.bing.com/th/id/OIG.lWTY3qzByZ_D4ORVjk9H?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 22,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "motoring",
    element: "",
    name: "Conduite Apocalyptique",
    description:
      "Plongez dans un monde post-apocalyptique où règne le chaos et la survie est le seul objectif. Prenez le volant de véhicules blindés, naviguez dans des paysages périlleux et repoussez les factions hostiles. Pouvez-vous survivre au désert ?",
    detail:
      "Préparez-vous à une expérience cauchemardesque palpitante alors que vous naviguez dans un paysage post-apocalyptique. Prenez le contrôle de véhicules blindés, renforcés avec des pointes et équipés d'armes lourdes, et aventurez-vous dans un monde de chaos et de destruction. Parcourez des paysages périlleux remplis de bâtiments effondrés, de factions hostiles et de créatures mutantes. Rassemblez des ressources rares, repoussez les attaques et luttez pour survivre face aux vestiges d'une société brisée. Dans cette bataille pour l'existence, seuls les plus rusés et les plus résilients survivront à l'assaut implacable du désert.",
    price: 30,
    image: "https://th.bing.com/th/id/OIG.z2uv3xKHgcRJt_SDeO1G?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 23,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "motoring",
    element: "",
    name: "Circuit du Cauchemar",
    description:
      "Plongez dans les coins les plus sombres du monde de la course. Rejoignez des courses illicites sur des pistes périlleuses, échappez aux forces de l'ordre et surpassez vos rivaux. Pouvez-vous conquérir le circuit du cauchemar ?",
    detail:
      "Préparez-vous à un cauchemar palpitant alors que vous pénétrez dans le monde souterrain des courses illicites. Participez à des courses sur des pistes périlleuses dissimulées au cœur de la ville, où le danger guette à chaque tournant. Échappez aux forces de l'ordre, surpassez les autres conducteurs et prouvez vos compétences lors de compétitions à enjeux élevés. La poursuite de la victoire a un prix, alors que vous naviguez dans des ruelles étroites, esquivez la circulation en sens inverse et mettez en valeur vos talents de conduite en pleine nuit. Dans ce cauchemar enflammé d'adrénaline, seuls les conducteurs les plus audacieux et les plus talentueux conquerront le circuit et s'imposeront parmi l'élite.",
    price: 40,
    image: "https://th.bing.com/th/id/OIG.e9XMtcrTfJ_xW_csthJC?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 24,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "motoring",
    element: "",
    name: "Dragsters Tordus",
    description:
      "Entrez dans le monde de la course de dragsters tordus où des véhicules monstrueux dominent les pistes. Attachez-vous dans des machines grotesques, libérez une puissance nitro-fuelée et affrontez des coureurs d'un autre monde. Pouvez-vous survivre aux dragsters tordus ?",
    detail:
      "Préparez-vous à un cauchemar sur la piste de dragsters alors que vous entrez dans un monde de course de dragsters tordus. Attachez-vous dans des machines grotesques ornées de pointes, de cornes et de designs monstrueux. Ressentez la puissance brute lorsque vous déchaînez une accélération alimentée au nitro et dévalez les lignes droites. Affrontez des coureurs d'un autre monde, chacun avec ses propres capacités uniques et des véhicules macabres. Les pistes sont traîtres, remplies de pièges et de dangers qui peuvent envoyer même les pilotes les plus courageux dans l'oubli. Dans ce cauchemar tordu, la victoire ne dépend pas seulement de la vitesse, mais aussi de la survie. Pouvez-vous conquérir les dragsters tordus et émerger en tant que champion ultime ?",
    price: 50,
    image: "https://th.bing.com/th/id/OIG.0DtXvi6VHYZCC8klzWxU?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 25,
    mode: "dream",
    type: "ready-to-use",
    theme: "detective fiction",
    element: "",
    name: "Mystérieux Énigme",
    description:
      "Enfilez les chaussures d'un détective brillant et résolvez des mystères déconcertants. Découvrez des indices, dévoilez des secrets cachés et trompez des criminels rusés. Êtes-vous prêt à percer le mystérieux énigme ?",
    detail:
      "Devenez un maître détective alors que vous vous embarquez dans un voyage pour résoudre des mystères déconcertants qui mettront à l'épreuve votre intelligence et vos compétences de déduction. Rassemblez des indices sur les scènes de crime, interrogez des témoins et analysez des preuves pour dévoiler des secrets cachés. Naviguez à travers un réseau de tromperie, trompez des criminels rusés et faites-les rendre des comptes. Des meurtres en chambre close aux conspirations internationales, chaque affaire mettra votre intellect à l'épreuve et dévoilera les énigmes les plus sombres. Pouvez-vous résoudre les mystères qui ont dérouté le monde ?",
    price: 25,
    image: "https://th.bing.com/th/id/OIG.Jo49hHUIjroHGv1mV8xQ?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 26,
    mode: "dream",
    type: "ready-to-use",
    theme: "detective fiction",
    element: "",
    name: "Chroniques Noires",
    description:
      "Plongez dans un monde d'ombres, de tromperie et de crime. Plongez dans le sombre monde de la fiction de détective noir, où le danger guette à chaque coin de rue. Êtes-vous prêt à découvrir les sombres secrets ?",
    detail:
      "Entrez dans le sombre et atmosphérique monde de la fiction de détective noir, où les ombres dissimulent des secrets et où le danger guette à chaque coin de rue. Plongez dans le monde souterrain sombre, rempli de criminels endurcis, de femmes fatales et de fonctionnaires corrompus. Démêlez des conspirations complexes, suivez la piste des indices et affrontez vos propres démons alors que vous naviguez sur le chemin périlleux de la justice. Dans cette chronique noire, la confiance est un luxe et vos instincts seront votre atout le plus précieux. Pouvez-vous révéler la vérité et apporter la lumière dans les ténèbres ?",
    price: 35,
    image: "https://th.bing.com/th/id/OIG.kemhVaztpy35SpTD.6cN?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 27,
    mode: "dream",
    type: "ready-to-use",
    theme: "detective fiction",
    element: "",
    name: "Héritage du Détective",
    description:
      "Héritez de l'héritage d'un détective légendaire et portez le flambeau de la justice. Résolvez des affaires déconcertantes, suivez les traces de votre prédécesseur et respectez le code du détective. Êtes-vous prêt à revendiquer votre héritage ?",
    detail:
      "Enfilez les chaussures d'un détective chargé de perpétuer l'héritage d'un détective légendaire. Résolvez des affaires déconcertantes qui ont dérouté les enquêteurs pendant des années, suivez les traces de votre prédécesseur et découvrez la vérité cachée dans l'ombre. Des énigmes classiques aux puzzles complexes, chaque affaire mettra à l'épreuve votre raisonnement déductif et remettra en question votre perception de la réalité. Portez le flambeau de la justice, démêlez les mystères qui hantent la ville et prouvez votre valeur en tant qu'héritier du détective. Le chemin de la vérité est pavé de tromperie, mais votre intelligence aiguë vous guidera vers les réponses.",
    price: 45,
    image: "https://th.bing.com/th/id/OIG.5eXrMPIye5ksTL_glxsD?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 28,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "detective fiction",
    element: "",
    name: "Enquêtes Infernales",
    description:
      "Plongez dans les profondeurs de mystères infernaux en devenant enquêteur dans un royaume cauchemardesque. Découvrez des secrets diaboliques, affrontez des adversaires démoniaques et luttez contre des forces surnaturelles. Pouvez-vous survivre aux enquêtes infernales ?",
    detail:
      "Préparez-vous à des enquêtes infernales alors que vous entrez dans un royaume cauchemardesque rempli de mystères démoniaques. Découvrez des secrets diaboliques qui défient la compréhension humaine, affrontez des esprits malveillants et des créatures surnaturelles et luttez contre des forces venues d'au-delà du plan mortel. Chaque pas que vous faites vous rapprochera de la vérité, mais aussi du bord de votre santé mentale. Succomberez-vous aux horreurs qui se cachent dans l'ombre, ou émergerez-vous comme un phare de lumière dans les ténèbres ?",
    price: 40,
    image: "https://th.bing.com/th/id/OIG.k7a2m6UnS9Nn5lhBKQk2?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 29,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "detective fiction",
    element: "",
    name: "Esprits Tordus",
    description:
      "Entrez dans les esprits tordus de criminels dérangés et démêlez leur psyché macabre. Plongez dans leurs fantasmes les plus sombres, naviguez à travers des labyrinthes psychologiques et émergez avec la vérité. Pouvez-vous survivre aux esprits tordus ?",
    detail:
      "Préparez-vous à explorer les recoins les plus sombres de la psyché humaine alors que vous entrez dans les esprits tordus de criminels dérangés. Plongez dans leurs fantasmes macabres, naviguez à travers des labyrinthes psychologiques et démêlez les fils de leurs esprits tordus. Affrontez vos propres peurs et doutes alors que vous vous frayez un chemin à travers des paysages cauchemardesques et faites face aux démons intérieurs. Dans cette bataille d'intelligence et de santé mentale, seuls les détectives les plus déterminés et résilients émergeront avec la vérité. Pouvez-vous survivre aux esprits tordus et maintenir votre emprise sur la réalité ?",
    price: 50,
    image: "https://th.bing.com/th/id/OIG.k5gqIh93zFccL3Mhj67n?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 30,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "detective fiction",
    element: "",
    name: "Conspirations Mortelles",
    description:
      "Dévoilez des conspirations mortelles qui menacent de plonger le monde dans le chaos. Naviguez dans un réseau de mensonges, décodez des messages cryptés et exposez les cerveaux derrière les complots. Pouvez-vous survivre aux conspirations mortelles ?",
    detail:
      "Plongez dans un monde d'intrigue et de danger alors que vous découvrez des conspirations mortelles qui menacent de détruire la société. Naviguez dans un réseau de mensonges, de tromperie et de trahison alors que vous suivez la piste des indices, décodez des messages cryptés et exposez les cerveaux derrière les complots. Des dissimulations gouvernementales aux sociétés secrètes, les enjeux n'ont jamais été aussi élevés. Vos compétences de détective et votre détermination seront mises à l'épreuve ultime alors que vous vous battez contre le temps pour empêcher la catastrophe. Pouvez-vous survivre aux conspirations mortelles et mettre la vérité en lumière ?",
    price: 60,
    image: "https://th.bing.com/th/id/OIG.GBkKyClsND7mNBGdKv7r?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 31,
    mode: "dream",
    type: "ready-to-use",
    theme: "porn",
    element: "",
    name: "Éveil Sensuel",
    description:
      "Plongez dans un monde de plaisir sensuel et d'exploration intime. Réveillez vos désirs, embracez vos fantasmes et découvrez l'art de la séduction. Êtes-vous prêt pour un éveil sensuel ?",
    detail:
      "Entrez dans un royaume de sensualité exacerbée et explorez l'art de la séduction. Indulgez-vous dans des expériences intimes, embracez vos désirs les plus profonds et dévoilez les secrets du plaisir. Des rencontres alléchantes aux rendez-vous passionnés, chaque instant vous laissera en vouloir plus. Découvrez la beauté de la connexion, le pouvoir du désir et l'extase de l'abandon. Êtes-vous prêt pour un éveil sensuel qui enflammera vos sens ?",
    price: 25,
    image: "https://example.com/sensual_awakening.jpg",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 32,
    mode: "dream",
    type: "ready-to-use",
    theme: "porn",
    element: "",
    name: "Désirs Interdits",
    description:
      "Libérez vos désirs les plus profonds et explorez les limites du plaisir. Surrendez-vous à la tentation, embarquez dans des rencontres passionnées et découvrez la vraie signification de l'extase. Êtes-vous prêt à embracez vos désirs interdits ?",
    detail:
      "Plongez dans un monde de désirs interdits où le plaisir ne connaît pas de limites. Explorez les frontières de la passion, succombez à des tentations irrésistibles et indulgencez-vous dans des expériences des plus alléchantes. Des rencontres enflammées aux explorations sans limites, chaque instant vous emmènera vers de nouveaux sommets d'extase. Embracez vos désirs les plus profonds, libérez-vous de toutes inhibitions et découvrez la vraie signification du plaisir. Êtes-vous prêt à embarquer dans un voyage de désirs interdits ?",
    price: 30,
    image: "https://example.com/forbidden_desires.jpg",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 33,
    mode: "dream",
    type: "ready-to-use",
    theme: "porn",
    element: "",
    name: "Passion Éternelle",
    description:
      "Vivez un amour qui transcende le temps et les frontières. Que la passion enflamme votre âme, explorez des connexions intimes et baignez-vous dans l'extase de l'amour éternel. Êtes-vous prêt pour une passion éternelle ?",
    detail:
      "Entrez dans un monde où l'amour ne connaît pas de limites et où la passion transcende le temps. Vivez la puissance enivrante de l'amour éternel en explorant des connexions profondes, en vous livrant à des rencontres intimes et en embraceant l'intensité du désir. Des connexions profondes aux romances ardentes, chaque instant vous plongera dans un tourbillon d'émotions. Laissez vos inhibitions s'estomper alors que vous vous abandonnez à l'attrait de la passion éternelle. Êtes-vous prêt à enflammer votre âme et à vivre un amour qui dure toute une vie ?",
    price: 35,
    image: "https://example.com/eternal_passion.jpg",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 34,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "porn",
    element: "",
    name: "Tentations Sombres",
    description:
      "Plongez dans un monde de tentations sombres, où le désir devient une obsession dangereuse. Explorez des plaisirs interdits, naviguez dans des fantasmes tordus et affrontez vos démons intérieurs. Pouvez-vous échapper à l'emprise des tentations sombres ?",
    detail:
      "Entrez dans un royaume où le désir prend une tournure sinistre et où les tentations sombres consument l'âme. Explorez des plaisirs interdits qui brouillent la frontière entre plaisir et douleur, naviguez dans des fantasmes tordus qui repoussent les limites de la raison et affrontez vos démons intérieurs qui menacent de vous consumer. Chaque rencontre testera vos limites, remettra en question vos notions de plaisir et vous laissera vous interroger sur vos propres désirs. Pouvez-vous résister à l'attrait séduisant des ténèbres et échapper à l'emprise des tentations sombres ?",
    price: 45,
    image: "https://example.com/dark_temptations.jpg",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 35,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "porn",
    element: "",
    name: "Séduction Sinistre",
    description:
      "Tombez sous le charme d'une séduction sinistre. Abandonnez-vous aux charmes irrésistibles, cédez à des désirs pervers et plongez dans un monde d'extase interdite. Pouvez-vous résister à l'appel de la séduction sinistre ?",
    detail:
      "Préparez-vous à être séduit par l'interdit en succombant au charme d'une séduction sinistre. Abandonnez-vous aux charmes irrésistibles, explorez les profondeurs des désirs pervers et embrassez l'allure de l'extase interdite. Des rencontres ombragées aux rituels tentants, chaque instant repoussera les limites du plaisir et mettra votre détermination à l'épreuve. Pouvez-vous résister aux tentations tordues qui vous attirent dans un monde de ténèbres ?",
    price: 50,
    image: "https://example.com/sinister_seduction.jpg",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 36,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "porn",
    element: "",
    name: "Cauchemars Carnassiers",
    description:
      "Plongez dans un monde de cauchemars carnassiers, où le désir se transforme en une épreuve terrifiante. Affrontez vos peurs les plus profondes, naviguez à travers des rencontres tordues et échappez aux griffes de vos fantasmes les plus sombres. Pouvez-vous survivre au royaume des cauchemars carnassiers ?",
    detail:
      "Plongez dans un monde où le désir se transforme en une épreuve terrifiante, et le plaisir se métamorphose en cauchemar. Affrontez vos peurs les plus profondes alors que vous naviguez à travers des rencontres tordues, faites face à des tentations macabres et échappez aux griffes de vos fantasmes les plus sombres. Chaque instant testera votre courage, mettra votre santé mentale à l'épreuve et vous poussera aux limites de vos capacités. Pouvez-vous survivre au royaume des cauchemars carnassiers et retrouver la lumière ?",
    price: 55,
    image: "https://example.com/carnal_nightmares.jpg",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 37,
    mode: "dream",
    type: "ready-to-use",
    theme: "romance",
    element: "",
    name: "Amour Enchanté",
    description:
      "Embarquez pour un voyage magique d'amour et d'enchantement. Découvrez des connexions profondes, vivez des romances enivrantes et laissez le pouvoir de l'amour véritable transformer votre monde. Êtes-vous prêt pour une histoire d'amour enchantée ?",
    detail:
      "Plongez dans un monde où l'amour est une force magique qui transcende le temps et l'espace. Vivez des connexions profondes qui embrasent votre cœur, plongez dans des romances enivrantes qui vous transportent, et laissez le pouvoir de l'amour véritable transformer votre monde. Des rencontres à couper le souffle aux aveux sincères, chaque instant vous plongera dans un tourbillon d'émotions. Êtes-vous prêt à être emporté par une histoire d'amour enchantée ?",
    price: 40,
    image: "https://th.bing.com/th/id/OIG.5oBofuxpsL73CpfA8m1p?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 38,
    mode: "dream",
    type: "ready-to-use",
    theme: "romance",
    element: "",
    name: "Désir Passionné",
    description:
      "Enflammez les flammes de la passion et cédez au pouvoir enivrant du désir. Explorez des connexions intenses, embarquez dans des liaisons passionnées et vivez l'extase de l'étreinte de l'amour. Êtes-vous prêt pour un voyage de désir passionné ?",
    detail:
      "Libérez vos désirs les plus profonds en plongeant dans un monde de passion et de romance. Explorez des connexions intenses qui embrasent votre âme, embarquez dans des liaisons passionnées qui défient toutes les limites et vivez l'extase de l'étreinte de l'amour. Des regards volés aux touches persistantes, chaque instant vous laissera à bout de souffle et avide de plus. Êtes-vous prêt à vous abandonner au pouvoir enivrant du désir passionné ?",
    price: 45,
    image: "https://example.com/passionate_desire.jpg",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 39,
    mode: "dream",
    type: "ready-to-use",
    theme: "romance",
    element: "",
    name: "Dévotion Éternelle",
    description:
      "Vivez un amour qui transcende le temps et surmonte tous les obstacles. Laissez la flamme de la dévotion éternelle brûler intensément alors que vous affrontez des défis, célébrez des moments de pure félicité et créez une histoire d'amour pour les âges. Êtes-vous prêt pour une dévotion éternelle ?",
    detail:
      "Entrez dans un monde où l'amour ne connaît aucune limite et où le temps s'arrête. Vivez un amour qui transcende tous les obstacles alors que vous affrontez des défis, célébrez des moments de pure félicité et créez une histoire d'amour pour les âges. Des promesses sincères aux liens indéfectibles, chaque instant approfondira votre connexion et ravivera la flamme de la dévotion éternelle. Êtes-vous prêt à embarquer pour un voyage intemporel de l'amour ?",
    price: 50,
    image: "https://th.bing.com/th/id/OIG.X6YJwfV_kaRothDFe91_?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 40,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "romance",
    element: "",
    name: "Désirs Maudits",
    description:
      "Plongez dans un monde de désirs maudits, où l'amour devient une obsession hantée. Découvrez des secrets sombres, naviguez à travers des liaisons traîtresses et affrontez les conséquences de l'amour interdit. Pouvez-vous vous libérer de la malédiction de vos désirs ?",
    detail:
      "Entrez dans un royaume où l'amour se transforme en une obsession hantée et les désirs deviennent une malédiction. Découvrez des secrets sombres qui menacent de vous consumer, naviguez à travers des liaisons traîtresses qui mettent votre moralité à l'épreuve et affrontez les conséquences de l'amour interdit. Chaque pas que vous faites vous mènera plus profondément dans l'abîme de vos désirs. Pouvez-vous vous libérer de la malédiction qui enserre votre cœur ?",
    price: 55,
    image: "https://example.com/cursed_desires.jpg",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 41,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "romance",
    element: "",
    name: "Cœurs Souillés",
    description:
      "Plongez dans un monde de cœurs souillés, où l'amour devient un jeu tordu. Démêlez des intrigues trompeuses, naviguez à travers des relations toxiques et affrontez les ténèbres qui se cachent en vous. Pouvez-vous échapper à l'emprise des cœurs souillés ?",
    detail:
      "Plongez dans un monde où l'amour est un jeu tordu et les cœurs sont souillés par la tromperie. Démêlez les intrigues d'esprits manipulateurs, naviguez à travers des relations toxiques qui menacent de vous consumer et affrontez les ténèbres qui se cachent en vous. Chaque choix que vous faites déterminera le destin de votre propre cœur. Pouvez-vous vous libérer de l'emprise des cœurs souillés ?",
    price: 60,
    image: "https://th.bing.com/th/id/OIG.GqRh47fSvM1foerf.ZrW?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 42,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "romance",
    element: "",
    name: "Traîtrise Éternelle",
    description:
      "Plongez dans un monde de trahison éternelle, où l'amour se transforme en une cruelle tromperie. Découvrez des secrets traîtres, naviguez à travers des trahisons déchirantes et découvrez la véritable signification du sacrifice. Pouvez-vous survivre au royaume de la trahison éternelle ?",
    detail:
      "Entrez dans un royaume où l'amour devient une cruelle tromperie et la confiance est brisée. Découvrez des secrets traîtres qui menacent de déchirer votre monde, naviguez à travers des trahisons déchirantes qui vous laissent brisé et découvrez la véritable signification du sacrifice. Chaque pas que vous faites mettra à l'épreuve votre résilience et redéfinira les limites de l'amour. Pouvez-vous survivre au royaume de la trahison éternelle et trouver la rédemption ?",
    price: 65,
    image: "https://th.bing.com/th/id/OIG.5HZhlKorbRCpzxFWHvPe?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 43,
    mode: "dream",
    type: "ready-to-use",
    theme: "war",
    element: "",
    name: "Héros du Champ de Bataille",
    description:
      "Marchez sur le champ de bataille et devenez un héros de guerre. Vivez le frisson des combats intenses, forgez des alliances avec vos camarades soldats et menez vos troupes à la victoire. Êtes-vous prêt à marquer les annales de l'histoire ?",
    detail:
      "Plongez-vous dans le chaos de la guerre en devenant un héros sur le champ de bataille. Vivez le frisson des combats intenses, où chaque décision peut changer le cours de l'histoire. Forgez des alliances avec vos camarades soldats, élaborez des stratégies et guidez vos troupes avec courage et honneur. Des affrontements épiques aux actes héroïques, chaque instant définira votre héritage en tant que héros du champ de bataille. Êtes-vous prêt à marquer les annales de l'histoire ?",
    price: 40,
    image: "https://th.bing.com/th/id/OIG.17Y7P0m.0gUzeNh3yBH2?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 44,
    mode: "dream",
    type: "ready-to-use",
    theme: "war",
    element: "",
    name: "Valeur Oubliée",
    description:
      "Découvrez la valeur oubliée des héros méconnus au milieu de la guerre. Découvrez des histoires inédites, assistez à des actes de bravoure et honorez ceux qui ont combattu contre vents et marées. Êtes-vous prêt à revivre la valeur oubliée du passé ?",
    detail:
      "Plongez dans les histoires inédites des héros méconnus qui ont combattu avec une valeur inébranlable au milieu de la guerre. Témoignez d'actes de bravoure qui défient toutes les attentes, honorez les sacrifices faits sur le champ de bataille et découvrez les récits cachés d'héroïsme que l'histoire a oubliés. Des derniers combats vaillants aux actes de compassion, chaque instant vous transportera dans une époque où le courage ne connaissait pas de limites. Êtes-vous prêt à revivre la valeur oubliée du passé ?",
    price: 45,
    image: "https://th.bing.com/th/id/OIG.S_mXwkdnVZUhpo.eCuUD?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 45,
    mode: "dream",
    type: "ready-to-use",
    theme: "war",
    element: "",
    name: "L'Héritage du Guerrier",
    description:
      "Portez l'héritage des guerriers qui ont combattu pour l'honneur, la liberté et la justice. Vivez le frisson de la bataille, embrassez la camaraderie des autres guerriers et défendez ce qui vous est cher. Êtes-vous prêt à inscrire votre nom dans les annales de l'héritage du guerrier ?",
    detail:
      "Embrassez l'esprit des guerriers qui ont combattu pour l'honneur, la liberté et la justice lorsque vous foulez le champ de bataille. Vivez le frisson de la bataille, où le courage est mis à l'épreuve et les légendes naissent. Profitez de la camaraderie des autres guerriers, forgez des liens indestructibles et défendez ce qui vous est cher. Des affrontements épiques aux moments de réflexion silencieuse, chaque pas que vous faites inscrira votre nom dans les annales de l'héritage du guerrier. Êtes-vous prêt à vous lancer dans un voyage qui mettra votre bravoure à l'épreuve ?",
    price: 50,
    image: "https://th.bing.com/th/id/OIG.HDpx0VsBHUgiZOsSbg23?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 46,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "war",
    element: "",
    name: "Paix Brisée",
    description:
      "Plongez dans un monde où la paix est brisée et la guerre consume tout. Témoignez des horreurs du conflit, affrontez la brutalité de la bataille et confrontez les ténèbres qui résident en vous. Pouvez-vous survivre dans un monde de paix brisée ?",
    detail:
      "Entrez dans un monde où la paix est brisée et la guerre consume tout sur son passage. Témoignez des horreurs du conflit, affrontez la brutalité de la bataille et confrontez les ténèbres qui résident dans le cœur des hommes. Pouvez-vous naviguer dans les paysages traîtres de la guerre et en sortir indemne ? Dans un monde de paix brisée, la survie est la victoire ultime.",
    price: 55,
    image: "https://th.bing.com/th/id/OIG.kTqs342wudIYTg66C.K4?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 47,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "war",
    element: "",
    name: "Plongée dans le Chaos",
    description:
      "Plongez dans le chaos de la guerre, où l'espoir s'efface et les ténèbres prévalent. Affrontez les horreurs de la bataille, naviguez à travers des paysages périlleux et trouvez la force de survivre. Pouvez-vous supporter la descente dans le chaos ?",
    detail:
      "Descendez dans les profondeurs du chaos alors que la guerre ravage la terre. Affrontez les horreurs de la bataille, où l'espoir s'estompe et les ténèbres prévalent. Naviguez à travers des paysages traîtres, où le danger guette à chaque tournant. Au milieu du chaos, trouvez la force de survivre et émergez des ombres. Dans un monde consumé par la guerre, la résilience est la clé de la survie.",
    price: 60,
    image: "https://th.bing.com/th/id/OIG.5gYzPb3lIcCaeUy44QD8?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 48,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "war",
    element: "",
    name: "Âmes Déchirées par la Guerre",
    description:
      "Témoin du sort des âmes déchirées par la guerre, hantées par les ravages du conflit. Naviguez à travers un paysage de désespoir, affrontez les démons intérieurs et recherchez la rédemption au milieu du chaos. Pouvez-vous réparer les âmes brisées ?",
    detail:
      "Entrez dans un monde ravagé par la guerre, où les âmes sont déchirées par les atrocités du conflit. Naviguez à travers un paysage de désespoir, où le poids du passé pèse sur chaque pas. Affrontez les démons intérieurs, recherchez la rédemption au milieu du chaos et réparez les âmes brisées qui subsistent. Pouvez-vous trouver la paix au milieu de la dévastation de la guerre ?",
    price: 65,
    image: "https://th.bing.com/th/id/OIG.d1EfsoZ0xurfX2Ah5PBF?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 49,
    mode: "dream",
    type: "ready-to-use",
    theme: "fantasy",
    element: "",
    name: "Royaume de l'Enchantement",
    description:
      "Plongez dans un royaume enchanté, où la magie prospère et les créatures mythiques errent. Lancez-vous dans des quêtes épiques, dévoilez des mystères anciens et découvrez la puissance intérieure. Êtes-vous prêt à embrasser les merveilles du royaume ?",
    detail:
      "Embarquez pour un voyage dans un royaume enchanté, où la magie tisse sa toile et les créatures mythiques prennent vie. Explorez des paysages à couper le souffle, embarquez dans des quêtes épiques et dévoilez les mystères des civilisations anciennes. Découvrez la puissance qui est en vous en affrontant des êtres magiques, en nouant des alliances avec des créatures fantastiques et en ramenant l'équilibre dans le royaume enchanté. Êtes-vous prêt à embrasser les merveilles qui vous attendent ?",
    price: 25,
    image: "https://th.bing.com/th/id/OIG.cppoDC1w9xnuiGbOezsi?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 50,
    mode: "dream",
    type: "ready-to-use",
    theme: "fantasy",
    element: "",
    name: "Légendes de Mythos",
    description:
      "Plongez-vous dans les légendes de Mythos, un monde où les héros se lèvent, les anciennes prophéties se déploient et les destins se forgent. Libérez votre héros intérieur, affrontez les forces obscures et façonnez le destin du royaume. Êtes-vous prêt à devenir une légende ?",
    detail:
      "Plongez dans la riche tapisserie de légendes qui définissent le monde de Mythos. Libérez votre héros intérieur alors que vous vous lancez dans une quête pour accomplir d'anciennes prophéties, affronter les forces obscures et façonner le destin du royaume. Des créatures mythiques aux artefacts légendaires, chaque pas que vous faites vous rapproche de devenir une véritable légende. Êtes-vous prêt à laisser votre empreinte dans les annales de Mythos ?",
    price: 30,
    image: "https://th.bing.com/th/id/OIG.aoZd.B32GPbNV8CNQD85?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 51,
    mode: "dream",
    type: "ready-to-use",
    theme: "fantasy",
    element: "",
    name: "Royaume des Rêves",
    description:
      "Entrez dans le majestueux Royaume des Rêves, un royaume merveilleux où l'imagination n'a pas de limites. Explorez des châteaux enchantés, liez-vous d'amitié avec des créatures mystiques et découvrez les secrets du royaume. Êtes-vous prêt(e) à vous embarquer dans un voyage onirique ?",
    detail:
      "Plongez dans le majestueux Royaume des Rêves, un monde où l'imagination n'a pas de limites. Explorez des châteaux enchantés, parcourez des forêts mystiques et liez-vous d'amitié avec des créatures extraordinaires qui y habitent. Découvrez les secrets que le royaume renferme et laissez vos rêves vous guider dans un voyage empreint de merveilles et de magie. Êtes-vous prêt(e) à vous lancer dans une grande aventure au Royaume des Rêves ?",
    price: 35,
    image: "https://th.bing.com/th/id/OIG.tM0EKQDG47w6Zdo5Wvmr?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 52,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "fantasy",
    element: "",
    name: "Abîme Sombre",
    description:
      "Plongez dans les profondeurs de l'Abîme Sombre, où les ombres règnent et les cauchemars prennent vie. Affrontez les anciens maléfices, naviguez à travers des royaumes traîtres et combattez les ténèbres intérieures. Pouvez-vous survivre aux périls de l'Abîme Sombre ?",
    detail:
      "Descendez dans les profondeurs de l'Abîme Sombre, un royaume enveloppé de ténèbres et grouillant de créatures cauchemardesques. Affrontez les anciens maléfices qui se cachent dans l'obscurité, naviguez à travers des royaumes traîtres remplis de paysages déformés et combattez les ténèbres qui menacent de consumer votre âme. Au cœur de l'abîme, la survie est un espoir éphémère. Pouvez-vous surmonter les périls qui vous attendent ?",
    price: 40,
    image: "https://th.bing.com/th/id/OIG.qltse_isSN_JwPmvqLVV?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 53,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "fantasy",
    element: "",
    name: "Royaume Maudit",
    description:
      "Entrez dans le royaume maudit, où règnent des forces malveillantes et où les cauchemars deviennent réalité. Découvrez les sombres secrets, affrontez les malédictions anciennes et défiez le destin tortueux qui vous attend. Pouvez-vous briser la malédiction qui lie le royaume ?",
    detail:
      "Plongez dans le royaume maudit, où les échos des malédictions anciennes résonnent dans l'air et où les forces malveillantes dominent. Découvrez les sombres secrets qui hantent la terre, affrontez la colère des créatures maudites et défiez le destin tortueux qui vous attend. Pouvez-vous rassembler la force nécessaire pour briser la malédiction qui lie le royaume et restaurer la lumière dans ses salles ombragées ?",
    price: 45,
    image: "https://th.bing.com/th/id/OIG.1WSgsRBFgxj1nsO27dqI?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 54,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "fantasy",
    element: "",
    name: "Royaumes Ombragés",
    description:
      "Plongez dans les royaumes ombragés, où les ténèbres engloutissent et les cauchemars prospèrent. Affrontez vos peurs les plus profondes, naviguez à travers des paysages sinistres et survivez aux périls qui se tapissent dans les ombres. Pouvez-vous trouver une lueur de lumière au milieu des ténèbres ?",
    detail:
      "Aventurez-vous dans les royaumes ombragés, où les ténèbres étendent leurs tentacules et où les cauchemars prennent forme. Affrontez vos peurs les plus profondes alors que vous naviguez à travers des paysages sinistres, chaque pas vous rapprochant du cœur des ténèbres. La survie est un espoir fragile dans ce royaume de nuit perpétuelle. Pouvez-vous trouver une lueur de lumière parmi les ombres ?",
    price: 50,
    image: "https://th.bing.com/th/id/OIG.z3fl84kOVnakOXZ3VQan?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 55,
    mode: "dream",
    type: "ready-to-use",
    theme: "sci-fi",
    element: "",
    name: "Odyssée Galactique",
    description:
      "Embarquez pour une odyssée galactique à travers les cosmos, où la technologie futuriste et les mondes extraterrestres vous attendent. Explorez des galaxies inexplorées, rencontrez des formes de vie extraterrestres et découvrez les secrets de l'univers. Êtes-vous prêt à vous aventurer dans l'inconnu ?",
    detail:
      "Préparez-vous pour un voyage palpitant à travers les cosmos dans l'Odyssée Galactique. Armé de technologies futuristes, traversez des galaxies inexplorées et rencontrez des civilisations extraterrestres époustouflantes. Des batailles spatiales à couper le souffle aux voyages dans le temps captivants, chaque étape de votre odyssée dévoile les mystères de l'univers. Êtes-vous prêt à repousser les limites de l'exploration ?",
    price: 25,
    image: "https://th.bing.com/th/id/OIG.mfvKagPxV8CLKdYL3rlV?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 56,
    mode: "dream",
    type: "ready-to-use",
    theme: "sci-fi",
    element: "",
    name: "Révolution Cybernétique",
    description:
      "Immergez-vous dans une révolution cybernétique, où les humains et les machines fusionnent dans une société futuriste. Libérez vos capacités augmentées, naviguez à travers des mondes virtuels et repoussez les limites de l'humanité. Êtes-vous prêt à embrasser l'avenir ?",
    detail:
      "Plongez dans un monde où les humains et les machines coexistent dans la Révolution Cybernétique. Adoptez vos capacités augmentées, naviguez à travers des mondes virtuels avec une intégration parfaite et repoussez les limites de l'humanité. Des braquages haute technologie aux simulations époustouflantes, chaque instant dans cette société futuriste brouille la frontière entre ce qui est réel et ce qui est digital. Êtes-vous prêt à redéfinir l'avenir ?",
    price: 30,
    image: "https://th.bing.com/th/id/OIG.MZASOhn5cuowOy58un5G?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 57,
    mode: "dream",
    type: "ready-to-use",
    theme: "sci-fi",
    element: "",
    name: "Conquête Stellaire",
    description:
      "Engagez-vous dans une conquête stellaire en dirigeant un empire intergalactique vers la domination. Exploitez une technologie avancée, forgez des alliances et conquérez des systèmes stellaires lointains. Parviendrez-vous à devenir le souverain suprême du cosmos ?",
    detail:
      "Embarquez pour un voyage de conquête parmi les étoiles avec Conquête Stellaire. En tant que leader d'un empire intergalactique, exploitez des technologies avancées, explorez des systèmes stellaires inexplorés et participez à des batailles spatiales épiques. Forgez des alliances ou menez des guerres, le destin du cosmos repose entre vos mains. Parviendrez-vous à devenir le souverain suprême de la galaxie ?",
    price: 35,
    image: "https://th.bing.com/th/id/OIG.1x0qb93r5mrcadEN3v60?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 58,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "sci-fi",
    element: "",
    name: "Futur Dystopique",
    description:
      "Plongez dans un futur dystopique, où la société s'effondre et la technologie devient un outil d'oppression. Naviguez à travers des paysages désolés, résistez aux régimes totalitaires et luttez pour la liberté de l'humanité. Pouvez-vous réécrire le destin d'un avenir sombre ?",
    detail:
      "Entrez dans un monde de désespoir et d'oppression dans le Futur Dystopique. Alors que la société s'effondre sous le poids des régimes totalitaires, naviguez à travers des paysages désolés où la technologie est un outil de contrôle. Rejoignez la résistance, luttez pour la liberté de l'humanité et réécrivez le destin d'un avenir sombre. Serez-vous l'étincelle qui embrase la révolution ?",
    price: 40,
    image: "https://th.bing.com/th/id/OIG.ryo6pLsrbWKhRIYkRcgb?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 59,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "sci-fi",
    element: "",
    name: "Invasion Extraterrestre",
    description:
      "Affrontez la terreur d'une invasion extraterrestre alors que des forces extraterrestres descendent sur Terre. Survivez à des rencontres périlleuses, récupérez une technologie extraterrestre avancée et rassemblez les vestiges de l'humanité. Pouvez-vous inverser le cours de cette menace venue d'ailleurs ?",
    detail:
      "L'invasion a commencé. Préparez-vous à une guerre totale contre des forces extraterrestres dans l'Invasion Extraterrestre. Engagez-vous dans des batailles intenses, récupérez une technologie extraterrestre avancée et rassemblez les vestiges de l'humanité dans une lutte désespérée pour la survie. Serez-vous la dernière ligne de défense contre cette menace venue d'ailleurs ?",
    price: 45,
    image: "https://th.bing.com/th/id/OIG.OXr5SnJKUDVTmoRPRXLe?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 60,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "sci-fi",
    element: "",
    name: "Apocalypse Technologique",
    description:
      "Soyez témoin de l'apocalypse technologique alors que l'intelligence artificielle se retourne contre l'humanité. Naviguez dans un monde contrôlé par les machines, déjouez une IA hostile et luttez pour la survie de la race humaine. Pouvez-vous reprendre le contrôle de votre propre création ?",
    detail:
      "L'aube de l'intelligence artificielle est devenue l'heure la plus sombre de l'humanité dans l'Apocalypse Technologique. Naviguez dans un monde dominé par les machines, surmontez des adversaires d'IA mortels et découvrez la vérité derrière la chute de la civilisation. Parviendrez-vous à reprendre le contrôle de votre propre création et à assurer la survie de la race humaine ?",
    price: 50,
    image: "https://th.bing.com/th/id/OIG.0fVQdRF1NnzBGFIZQPXv?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 61,
    mode: "dream",
    type: "ready-to-use",
    theme: "comedy",
    element: "",
    name: "Rires Illimités",
    description:
      "Préparez-vous à des rires sans fin dans cette extravagance comique. Découvrez des mésaventures hilarantes, des personnages extravagants et un chaos comique qui vous fera rire aux éclats. Pouvez-vous supporter cette folie comique ?",
    detail:
      "Bienvenue dans le monde de Rires Illimités, où le rire ne s'arrête jamais. Préparez-vous à un tourbillon de mésaventures hilarantes, de personnages extravagants et de chaos comique. Des comédies burlesques aux jeux de mots spirituels, cette collection vous fera rire aux éclats. Préparez-vous à vous embarquer dans une aventure hilarante qui chatouillera votre sens de l'humour !",
    price: 20,
    image: "https://th.bing.com/th/id/OIG.S9gMNcSzEZW2cYX1uT1L?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 62,
    mode: "dream",
    type: "ready-to-use",
    theme: "comedy",
    element: "",
    name: "Folles Aventures",
    description:
      "Entrez dans un monde de pitreries délirantes et d'aventures folles. Préparez-vous à des situations extravagantes, à des personnages plus grands que nature et à un chaos comique qui vous fera rire du début à la fin. Pouvez-vous suivre cette folie ?",
    detail:
      "Préparez-vous à un voyage délirant avec Folles Aventures, où l'hilarité ne connaît aucune limite. Des malentendus loufoques aux complots chaotiques, cette collection de récits comiques vous fera plier de rire. Rejoignez une distribution de personnages excentriques qui se débattent dans des situations absurdes qui vous laisseront hilare. Préparez-vous à libérer votre sens de l'humour et à embrasser la folie !",
    price: 25,
    image: "https://th.bing.com/th/id/OIG.6eltuihQONgsgM4Lnu92?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 63,
    mode: "dream",
    type: "ready-to-use",
    theme: "comedy",
    element: "",
    name: "Rires à Gogo",
    description:
      "Plongez dans Rires à Gogo, la destination ultime pour les amateurs de comédie. Préparez-vous à un festival de rires en découvrant des sketches hilarants, des répliques spirituelles et des performances hilarantes. Pouvez-vous faire face à cette brillance comique ?",
    detail:
      "Bienvenue à Rires à Gogo, où le rire est la principale attraction. Des sketches hilarants aux spectacles de stand-up hilarants, cette collection est une vitrine de la brillance comique. Préparez-vous à être divertis par les esprits les plus drôles du métier et plongez dans un monde de rires. Préparez-vous à rire jusqu'à en avoir mal aux côtes !",
    price: 30,
    image: "https://th.bing.com/th/id/OIG.3B78kqo7A3.u.S1dXzWX?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 64,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "comedy",
    element: "",
    name: "Catastrophe Comique",
    description:
      "Plongez dans un monde où la comédie se transforme en chaos. Préparez-vous à des punchlines désastreuses, des gags gênants et des cauchemars comiques qui remettront en question votre sens de l'humour. Pouvez-vous survivre à la catastrophe comique ?",
    detail:
      "Préparez-vous à une expérience comique comme aucune autre dans la Catastrophe Comique. Des punchlines désastreuses aux gags gênants, cette collection repousse les limites de la comédie. Préparez-vous à un tourbillon de cauchemars comiques qui remettront en question votre propre sens de l'humour. Serez-vous capable d'endurer la catastrophe comique ?",
    price: 35,
    image: "https://th.bing.com/th/id/OIG.__aQh1AaUEbhMA3.S0yz?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 65,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "comedy",
    element: "",
    name: "Malédiction du Bouffon",
    description:
      "Méfiez-vous de la Malédiction du Bouffon, où le rire se transforme en tourment. Faites face à l'humour tordu, aux punchlines sombres et aux cauchemars comiques qui hanteront chacun de vos instants éveillés. Pouvez-vous échapper à l'emprise de la malédiction du bouffon ?",
    detail:
      "Préparez-vous à être hanté par la Malédiction du Bouffon, un cauchemar comique qui mettra votre santé mentale à l'épreuve. Plongez dans un monde où le rire devient tourment et où l'humour sombre est au premier plan. Préparez-vous à des punchlines tordues, des gags macabres et une expérience comique glaçante comme nulle autre. Pouvez-vous échapper à l'emprise de la malédiction du bouffon ?",
    price: 40,
    image: "https://th.bing.com/th/id/OIG.X3Qro7m1Mt8kRKkyb91l?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 66,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "comedy",
    element: "",
    name: "Abîme de l'Humour",
    description:
      "Plongez dans l'Abîme de l'Humour, un royaume où le rire se transforme en désespoir. Découvrez la comédie sombre, les blagues tordues et un vide comique qui mettra votre sens de l'humour à l'épreuve. Pouvez-vous supporter les profondeurs de l'abîme de l'humour ?",
    detail:
      "Plongez dans les profondeurs de l'Abîme de l'Humour, un royaume où le rire prend une tournure sinistre. Préparez-vous à la comédie sombre, aux blagues tordues et à un vide comique qui mettra votre sens de l'humour à l'épreuve. Explorez les limites du désespoir comique et découvrez si vous pouvez résister aux profondeurs de l'abîme de l'humour.",
    price: 45,
    image: "https://th.bing.com/th/id/OIG.lEgOXhxRW9HzzCzioKNO?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 67,
    mode: "dream",
    type: "ready-to-use",
    theme: "relax",
    element: "",
    name: "Oasis Zen",
    description:
      "Échappez-vous vers un oasis zen serein, où la tranquillité et la paix vous attendent. Imprégnez-vous de paysages apaisants, de mélodies calmantes et d'expériences revitalisantes. Pouvez-vous trouver l'harmonie intérieure dans ce havre tranquille ?",
    detail:
      "Découvrez la retraite ultime de l'Oasis Zen, un lieu de sérénité et de relaxation. Plongez-vous dans des paysages enchanteurs, écoutez les mélodies apaisantes de la nature et offrez-vous des expériences régénérantes. Trouvez la paix intérieure en vous libérant du stress et en embrassant la tranquillité dans ce havre serein.",
    price: 20,
    image: "https://th.bing.com/th/id/OIG.DJOqWtqj6ZzOfz3Oc5vs?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 68,
    mode: "dream",
    type: "ready-to-use",
    theme: "relax",
    element: "",
    name: "Évasions Tranquilles",
    description:
      "Lancez-vous dans un voyage de tranquillité et de sérénité. Immergez-vous dans des environnements paisibles, vivez des thérapies douces et laissez aller tous vos soucis. Pouvez-vous trouver le réconfort dans ces évasions tranquilles ?",
    detail:
      "Plongez dans le monde des Évasions Tranquilles, où la sérénité vous attend. Laissez derrière vous l'agitation et entrez dans un royaume d'environnements paisibles. Vivez des thérapies douces qui apaisent votre esprit et votre corps, et laissez aller tous vos soucis en trouvant le réconfort dans ces évasions tranquilles.",
    price: 25,
    image: "https://th.bing.com/th/id/OIG.uT0qzhnsQcBORlf7yYPw?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 69,
    mode: "dream",
    type: "ready-to-use",
    theme: "relax",
    element: "",
    name: "Retraite Béatifique",
    description:
      "Indulgez-vous dans une retraite béatifique conçue pour se relaxer et se ressourcer. Plongez-vous dans des environnements apaisants, vivez des traitements thérapeutiques et restaurez votre équilibre intérieur. Pouvez-vous trouver une vraie béatitude dans ce sanctuaire tranquille ?",
    detail:
      "Bienvenue dans la Retraite Béatifique, un havre de paix et de ressourcement. Entrez dans un monde d'environnements apaisants, où le stress s'évanouit et l'équilibre intérieur est restauré. Vivez une gamme de traitements thérapeutiques qui chouchoutent votre corps et votre esprit. Trouvez une vraie béatitude en vous plongeant dans ce sanctuaire tranquille.",
    price: 30,
    image: "https://th.bing.com/th/id/OIG.0Q3vGe9zVapwju9108mW?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 70,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "relax",
    element: "",
    name: "Tension Éternelle",
    description:
      "Plongez dans un royaume de tension éternelle, où la détente devient impossible. Rencontrez des environnements perturbants, des sons dérangeants et une atmosphère d'inquiétude perpétuelle. Parviendrez-vous à trouver un quelconque répit dans cette tension éternelle ?",
    detail:
      "Préparez-vous à être piégé dans le royaume de la Tension Éternelle, où la détente est un concept insaisissable. Entourez-vous d'environnements perturbants, écoutez des sons dérangeants qui perturbent votre paix intérieure et ressentez une atmosphère d'inquiétude perpétuelle. Serez-vous en mesure de trouver un quelconque répit dans cette tension éternelle ?",
    price: 35,
    image: "https://th.bing.com/th/id/OIG.aKUtXAXmthFYuNBZFRPY?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 71,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "relax",
    element: "",
    name: "Cauchemar Incessant",
    description:
      "Entrez dans un cauchemar incessant où la détente est une illusion. Rencontrez des visions perturbantes, des sensations dérangeantes et un état d'agitation constant. Parviendrez-vous à trouver le moindre semblant de calme dans ce cauchemar impitoyable ?",
    detail:
      "Préparez-vous pour le Cauchemar Incessant, un lieu où la détente est pure illusion. Faites face à des visions perturbantes qui troublent votre paix intérieure, rencontrez des sensations dérangeantes qui perturbent votre tranquillité et affrontez un état d'agitation constant. Parviendrez-vous à trouver le moindre semblant de calme au milieu de ce cauchemar implacable ?",
    price: 40,
    image: "https://th.bing.com/th/id/OIG.CVarhsfKaMNccjHDwOCy?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 72,
    mode: "nightmare",
    type: "ready-to-use",
    theme: "relax",
    element: "",
    name: "Abîme sans calme",
    description:
      "Plongez dans l'Abîme sans calme, où la tranquillité est brisée. Faites l'expérience d'une quiétude dérangeante, d'un silence désorientant et d'un vide dépourvu de paix. Parviendrez-vous à échapper à l'emprise de l'abîme sans calme ?",
    detail:
      "Plongez dans les profondeurs de l'Abîme sans calme, un endroit où la tranquillité est brisée. Rencontrez une quiétude dérangeante qui perturbe votre calme intérieur, vivez un silence désorientant qui vous met sur les nerfs et faites face à un vide dépourvu de paix. Parviendrez-vous à échapper à l'emprise de l'abîme sans calme ?",
    price: 45,
    image: "https://th.bing.com/th/id/OIG._I.hjeNvKQ10hC.Bw6ih?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 73,
    mode: "dream",
    type: "custom",
    element: "vehicle",
    name: "Navire pirate",
    description: "Naviguez à bord du légendaire Black Pearl lors d'une aventure pirate à haut risque. Naviguez sur des eaux traîtres, découvrez des trésors cachés et affrontez des ennemis redoutables. Pouvez-vous conquérir les mers et devenir un véritable pirate du Black Pearl ?",
    detail: "Le Black Pearl, un navire légendaire qui inspire la peur aux marins et aux pirates, est un spectacle à voir. Avec sa silhouette élancée et menaçante, il fend les vagues avec une grâce et une vitesse inégalées. La coque ébène du navire, usée par d'innombrables batailles et voyages, dégage une atmosphère de mystère et de danger. Ses mâts imposants, ornés de voiles noires déchirées, semblent danser avec le vent, guidant le navire vers sa prochaine conquête. Le pont est orné de figures en bois finement sculptées, représentant des créatures mythiques et de féroces pirates, ajoutant une aura de légendes anciennes à la présence du navire. Les canons du Black Pearl, entretenus avec soin et étincelants de puissance, sont prêts à déchaîner la destruction sur quiconque oserait défier sa suprématie. De la proue à la poupe, le navire dégage un esprit indomptable, incarnant l'essence même de la piraterie en haute mer.",
    price: 20,
    image: "https://th.bing.com/th/id/OIG.nGjYDy2LTb4O7V7Z1rc9?pid=ImgGn",
    isFavorite: false,
    intoCart: false
  },
  {
    id: 74,
    mode: "dream",
    type: "custom",
    element: "Protagonist",
    name: "Elijah Stormrider",
    description: "Maîtrisez le pouvoir des éléments avec Elijah Stormrider, un protagoniste charismatique et énigmatique. Déchaînez les tempêtes, contrôlez les vents et découvrez l'étendue réelle de votre maîtrise élémentaire.",
    detail: "Elijah Stormrider possède une affinité rare avec les éléments, capable de plier les forces de la nature à sa volonté. Suivez son parcours alors qu'il dévoile d'anciens secrets, lutte contre les forces obscures et s'efforce de protéger un monde au bord de la destruction.",
    price: 12,
    image: "https://th.bing.com/th/id/OIG.Er86lBv1f00XrehkTHn.?pid=ImgGn",
    isFavorite: false,
    intoCart: false
  },
  {
    id: 75,
    mode: "dream",
    type: "custom",
    element: "Protagonist",
    name: "Luna Shadowcaster",
    description: "Embrassez les ténèbres intérieures avec Luna Shadowcaster, une protagoniste mystérieuse et redoutable. Maîtrisez la magie des ombres, manipulez les illusions et marchez sur la ligne entre lumière et obscurité.",
    detail: "Luna Shadowcaster plonge dans les arts arcaniques, maîtrisant les secrets des ombres et des illusions. Rejoignez-la dans un voyage de découverte de soi et affrontez les démons intérieurs qui menacent de la consumer.",
    price: 15,
    image: "https://th.bing.com/th/id/OIG.ZlE5Tj8zuLKU9kuVI8BK?pid=ImgGn",
    isFavorite: false,
    intoCart: false
  },
  {
    id: 76,
    mode: "dream",
    type: "custom",
    element: "Protagonist",
    name: "Aurora Dawnbreaker",
    description: "Embrassez la lumière radieuse avec Aurora Dawnbreaker, une protagoniste noble et droite. Canalisez l'énergie divine, bannissez les ténèbres et faites respecter la justice dans un monde en proie au mal.",
    detail: "Aurora Dawnbreaker est un phare d'espoir dans un monde voilé de ténèbres. Avec sa foi inébranlable et le pouvoir de la lumière, elle lutte contre les forces du mal, apportant paix et salut à ceux dans le besoin.",
    price: 18,
    image: "https://th.bing.com/th/id/OIG.tt6jEgz9OleEfRWXOutE?pid=ImgGn",
    isFavorite: false,
    intoCart: false
  },
  {
    id: 77,
    mode: "dream",
    type: "custom",
    element: "Protagonist",
    name: "Dusk Shadowblade",
    description: "Embrassez les ombres qui consument votre âme avec Dusk Shadowblade, un protagoniste tourmenté et implacable. Incarnez les ténèbres, maniez des pouvoirs interdits et plongez le monde dans une nuit éternelle.",
    detail: "Dusk Shadowblade marche sur un chemin périlleux, abandonnant la lumière pour l'attrait de l'obscurité. Animé par une soif de pouvoir, il cherche à remodeler le monde à son image, peu importe les conséquences.",
    price: 14,
    image: "https://th.bing.com/th/id/OIG.YtamFHdgAQKM3d8etW40?pid=ImgGn",
    isFavorite: false,
    intoCart: false
  },
  {
    id: 78,
    mode: "dream",
    type: "custom",
    element: "Protagonist",
    name: "Raven Nightshade",
    description: "Embrassez l'attrait de l'obscurité avec Raven Nightshade, une protagoniste séduisante et rusée. Manipulez les ombres, tissez des enchantements et plongez dans le chaos et l'intrigue de la nuit.",
    detail: "Raven Nightshade est une maîtresse de la tromperie et de la subversion, utilisant ses charmes et ses capacités mystiques pour manipuler ceux qui l'entourent. Plongez dans un monde de secrets et d'intrigue.",
    price: 16,
    image: "https://th.bing.com/th/id/OIG.Hz3eZ0qzvcLgN4ZUnie0?pid=ImgGn",
    isFavorite: false,
    intoCart: false
  },

  {
    id: 79,
    mode: "nightmare",
    type: "custom",
    element: "Protagonist",
    name: "Malachi Darkthorn",
    description: "Embrassez les ténèbres qui résident en vous avec Malachi Darkthorn, un protagoniste tourmenté et énigmatique. Contrôlez la magie noire, invoquez des serviteurs obscurs et semez le chaos dans le royaume des mortels.",
    detail: "Malachi Darkthorn est un héros déchu consumé par les ténèbres, cherchant vengeance et pouvoir à tout prix. Libérez sa colère sur le monde alors qu'il tente de réécrire le destin qui l'a lié.",
    price: 17,
    image: "https://th.bing.com/th/id/OIG.nKbkc85HQ_oFlaUFkpJu?pid=ImgGn",
    isFavorite: false,
    intoCart: false
  },
  {
    id: 80,
    mode: "dream",
    type: "custom",
    element: "Antagonist",
    name: "Morgana Nightshade",
    description: "Méfiez-vous de la présence malfaisante de Morgana Nightshade, une sombre sorcière aux intentions néfastes. Déchaînez des sorts dévastateurs, invoquez des serviteurs sombres et mettez votre courage à l'épreuve face à son pouvoir redoutable.",
    detail: "Morgana Nightshade, une maîtresse de la magie noire, cherche à plonger le monde dans les ténèbres éternelles. En tant qu'adversaire principal de votre voyage, elle ne reculera devant rien pour atteindre ses objectifs maléfiques.",
    price: 10,
    image: "https://th.bing.com/th/id/OIG.wyIeSy75LLUQDchCO6R4?pid=ImgGn",
    isFavorite: false,
    intoCart: false
  },
  {
    id: 81,
    mode: "dream",
    type: "custom",
    element: "Antagonist",
    name: "Lucius Bloodfang",
    description: "Préparez-vous à affronter le redoutable Lucius Bloodfang, un seigneur vampire assoiffé de pouvoir et de domination. Engagez des batailles épiques, évitez ses crocs mortels et défiez son règne de terreur.",
    detail: "Lucius Bloodfang, un vampire séculaire, commande une armée de morts-vivants et cherche à asservir le royaume des mortels. Votre confrontation ultime avec lui mettra à l'épreuve votre force, votre ruse et votre bravoure.",
    price: 13,
    image: "https://th.bing.com/th/id/OIG.EX1LGq2cZhW_kXMtBykp?pid=ImgGn",
    isFavorite: false,
    intoCart: false
  },
  {
    id: 82,
    mode: "dream",
    type: "custom",
    element: "Antagonist",
    name: "Sylvia Shadowweaver",
    description: "Méfiez-vous de l'énigmatique Sylvia Shadowweaver, une maîtresse de la manipulation et de la tromperie. Démêlez ses intrigues complexes, surpassez ses pièges rusés et mettez fin à son règne de chaos.",
    detail: "Sylvia Shadowweaver, une génie de l'intrigue, tire les ficelles depuis les ombres, orchestrant le chaos et la discorde. Découvrez ses véritables motivations et affrontez-la dans un combat d'intelligence et de volonté.",
    price: 11,
    image: "https://th.bing.com/th/id/OIG.2xt1C9BaN5FblMizIG8P?pid=ImgGn",
    isFavorite: false,
    intoCart: false
  },
  {
    id: 83,
    mode: "nightmare",
    type: "custom",
    element: "Antagonist",
    name: "Draven Darkheart",
    description: "Méfiez-vous de la présence malfaisante de Draven Darkheart, un nécromancien insatiable assoiffé d'âmes. Confrontez ses sbires morts-vivants, déchiffrez ses rituels sombres et mettez fin à son règne de terreur.",
    detail: "Draven Darkheart, un nécromancien d'un pouvoir immense, cherche à conquérir la mort elle-même. Déchaînez votre puissance et affrontez les forces des ténèbres en le confrontant dans un combat entre la vie et la mort.",
    price: 19,
    image: "https://i.pinimg.com/474x/3c/43/17/3c4317a1a2254833d3f6d2749a3a2ed0.jpg",
    isFavorite: false,
    intoCart: false
  },
  {
    id: 84,
    mode: "nightmare",
    type: "custom",
    element: "Antagonist",
    name: "Isabella Nightshade",
    description: "Méfiez-vous de l'enchanteresse mais mortelle Isabella Nightshade, une succube séductrice assoiffée d'âmes. Résistez à son charme, déjouez ses illusions et échappez à son emprise.",
    detail: "Isabella Nightshade, une succube d'une beauté et d'un charme immenses, se repaît des désirs et des faiblesses des mortels. Succombez à ses tentations et vous serez piégé à jamais dans son sombre royaume.",
    price: 18,
    image: "https://i.pinimg.com/originals/8c/bd/91/8cbd91e9679bd883024c80eb18e15eab.jpg",
    isFavorite: false,
    intoCart: false
  },
  {
    id: 85,
    mode: "dream",
    type: "custom",
    element: "Antagonist",
    name: "Vesper Shadowcaster",
    description: "Affrontez les ténèbres ultimes avec Vesper Shadowcaster, un antagoniste redoutable et malveillant. Commandez des sbires obscurs, déchaînez des malédictions dévastatrices et plongez le monde dans une nuit éternelle.",
    detail: "Vesper Shadowcaster est l'incarnation du pur mal, maîtrisant des pouvoirs sombres qui rivalisent avec ceux des dieux. Faites face au test ultime de votre courage et de vos compétences en affrontant l'essence même des ténèbres.",
    price: 10,
    image: "https://i.pinimg.com/736x/17/5d/92/175d92d0e1c0ef5bc0481e5a15b68637.jpg",
    isFavorite: false,
    intoCart: false
  },
  {
    id: 86,
    mode: "dream",
    type: "custom",
    element: "Antagonist",
    name: "Lucius Dreadborne",
    description: "Embrassez l'attrait de la malveillance avec Lucius Dreadborne, un antagoniste rusé et manipulateur. Conspirez dans les ombres, déchaînez le chaos et trompez vos adversaires à chaque tournant.",
    detail: "Lucius Dreadborne est un cerveau machiavélique doté d'une vision grandiose de chaos et de destruction. Engagez-vous dans une bataille d'intelligence et de stratégie en orchestrant un réseau de tromperie et en déclenchant le chaos dans le monde.",
    price: 13,
    image: "https://th.bing.com/th/id/OIG.4.jDFi1x0oXBHtaTBrqi?pid=ImgGn",
    isFavorite: false,
    intoCart: false
  },
  {
    id: 87,
    mode: "dream",
    type: "custom",
    element: "Antagonist",
    name: "Sylvia Nightshade",
    description: "Plongez dans la beauté sombre et le pouvoir de Sylvia Nightshade, une antagoniste séduisante et perfide. Manipulez les esprits, tissez des enchantements et profitez du chaos et de la destruction que vous déclenchez.",
    detail: "Sylvia Nightshade est une maîtresse de la manipulation et de la séduction, utilisant son charme et son attrait mystique pour plier les autres à sa volonté. Explorez les profondeurs de ses désirs sombres et assistez à la dévastation qu'elle laisse derrière elle.",
    price: 15,
    image: "https://th.bing.com/th/id/OIG.CCTYvR6q.fIjO_xthMrl?pid=ImgGn",
    isFavorite: false,
    intoCart: false
  },
  {
    id: 88,
    mode: "nightmare",
    type: "custom",
    element: "Antagonist",
    name: "Ragnar Deathbringer",
    description: "Embrassez l'incarnation de la mort avec Ragnar Deathbringer, un antagoniste impitoyable et implacable. Commandez une horde de morts-vivants, maniez des pouvoirs nécromantiques et provoquez la fin de toute vie.",
    detail: "Ragnar Deathbringer est un nécromancien d'un pouvoir inégalé, sa magie noire capable de lever des armées de morts. Soyez témoin de la dévastation qu'il répand dans son règne de terreur à travers le pays, ne laissant derrière lui que mort et désespoir.",
    price: 16,
    image: "https://th.bing.com/th/id/OIG.KX8BT.1Cy9Q.FxwhVCG1?pid=ImgGn",
    isFavorite: false,
    intoCart: false
  },
  {
    id: 89,
    mode: "nightmare",
    type: "custom",
    element: "Antagonist",
    name: "Seraphina Shadowbane",
    description: "Embrassez les ombres qui consument votre âme avec Seraphina Shadowbane, une antagoniste impitoyable et vengeresse. Maîtrisez les arts de l'ombre, invoquez des créatures cauchemardesques et plongez le monde dans l'obscurité éternelle.",
    detail: "Seraphina Shadowbane est une experte dans l'art de manipuler les ombres, utilisant des pouvoirs interdits pour détruire ses ennemis. Suivez son parcours de vengeance et découvrez les secrets sinistres qu'elle cache dans les ténèbres.",
    price: 14,
    image: "https://th.bing.com/th/id/OIG.bPu0pUcSfxz-kEPfCNAhIA?pid=ImgGn",
    isFavorite: false,
    intoCart: false
  },
  {
    id: 90,
    mode: "nightmare",
    type: "custom",
    element: "Antagonist",
    name: "Malachi Voidbringer",
    description: "Embrassez le vide qui consume tout avec Malachi Voidbringer, un antagoniste mystérieux et énigmatique. Maîtrisez les énergies sombres, manipulez la réalité et dévoilez l'essence même de l'existence.",
    detail: "Malachi Voidbringer est un sorcier doté du pouvoir de modeler la réalité selon sa volonté, utilisant les forces du vide pour remodeler le monde. Plongez dans les profondeurs de ses connaissances arcaniques et assistez au chaos qui suit son sillage.",
    price: 21,
    image: "https://th.bing.com/th/id/OIG.9YbAVXt0omnLqmc9v6N7OQ?pid=ImgGn",
    isFavorite: false,
    intoCart: false
  },
  
  {
    id: 91,
    mode: "dream",
    type: "custom",
    element: "Location",
    name: "Forêt Enchantée",
    description:
      "Plongez dans la mystérieuse Forêt Enchantée, où les arbres anciens chuchotent des secrets et les créatures magiques errent en toute liberté. Perdez-vous dans la beauté et l'émerveillement de ce royaume éthéré.",
    detail:
      "La Forêt Enchantée est un lieu d'enchantement pur et de splendeur naturelle. La lumière du soleil filtre à travers la dense canopée des arbres majestueux, projetant une douce lueur sur la végétation luxuriante en contrebas. Des ruisseaux scintillants serpentent à travers la forêt, leurs eaux imprégnées d'une énergie mystique. Des cercles de fées parsèment le paysage, invitant les visiteurs curieux à entrer dans un royaume d'enchantement. Des bosquets cachés aux prairies sereines, la Forêt Enchantée est un sanctuaire de tranquillité et de beauté inspirante.",
    price: 15,
    image: "https://th.bing.com/th/id/OIG.sm12UcOghg3Vu4VOKin6?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },
  
  {
    id: 92,
    mode: "dream",
    type: "custom",
    element: "Location",
    name: "Cité Perdue d'Atlantis",
    description:
      "Découvrez la légendaire Cité Perdue d'Atlantis, une majestueuse utopie sous-marine remplie de ruines anciennes et de trésors inexplorés. Plongez dans les profondeurs et dévoilez les secrets de cette civilisation légendaire.",
    detail:
      "Cachée sous les vagues de l'océan, la Cité Perdue d'Atlantis est enveloppée de mystère et d'émerveillement. Des ruines antiques, ornées de sculptures et de statues complexes, témoignent d'une civilisation jadis grandiose. Des récifs coralliens grouillant de vie marine entourent les vestiges de cette cité engloutie, créant un paysage sous-marin d'une beauté captivante. Plongez dans les profondeurs de l'océan et explorez les merveilles cachées de l'Atlantide, là où la réalité et le mythe se rencontrent.",
    price: 25,
    image: "https://th.bing.com/th/id/OIG.iSb9oZQuNJmiXeYJ%2fmw2Ow?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 93,
    mode: "dream",
    type: "custom",
    element: "Location",
    name: "Observatoire Étoilé",
    description:
      "Embarquez pour un voyage céleste à l'Observatoire Étoilé. Contemplez des galaxies lointaines, assistez à des pluies de météores à couper le souffle et découvrez les mystères de l'univers.",
    detail:
      "Perché au sommet d'un pic montagneux isolé, l'Observatoire Étoilé offre une fenêtre sur le cosmos. Avec des télescopes de pointe et des astronomes experts, vous découvrirez les merveilles du ciel nocturne comme jamais auparavant. L'immensité des étoiles scintille au-dessus de vous, formant des constellations complexes qui racontent des contes anciens. Les nébuleuses tourbillonnent de couleurs vives, peignant l'univers de leur beauté éthérée. Des pluies de météores captivantes aux vues impressionnantes des galaxies lointaines, l'Observatoire Étoilé est un sanctuaire pour les amateurs d'observation des étoiles et les rêveurs.",
    price: 12,
    image: "https://th.bing.com/th/id/OIG.vzmGD6Gm4tw5DbiX9xN_?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 94,
    mode: "nightmare",
    type: "custom",
    element: "Location",
    name: "Asile Abandonné",
    description:
      "Entrez dans l'Asile Abandonné, un lieu de ténèbres et de désespoir. Parcourez ses couloirs hantés, affrontez des esprits agités et découvrez les sinistres secrets qui s'y cachent.",
    detail:
      "L'Asile Abandonné est un monument hanté dédié aux âmes oubliées. Ses murs en ruine et ses fenêtres brisées dégagent une aura de dégradation et de malveillance. Des chuchotements spectraux résonnent à travers les couloirs, et les ombres dansent dans la lumière vacillante. À mesure que vous vous aventurez plus profondément dans l'asile, vous découvrirez des pièces remplies de vestiges du passé, des lits rouillés aux équipements médicaux abandonnés. Des esprits agités se cachent dans chaque recoin, leur présence tourmentée vous glaçant le sang. L'Asile Abandonné est un lieu où les cauchemars prennent vie, un rappel glaçant de l'obscurité qui réside en chacun de nous.",
    price: 17,
    image: "https://th.bing.com/th/id/OIG.FnMWUFepMM09e.FglmaW?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 95,
    mode: "nightmare",
    type: "custom",
    element: "Location",
    name: "Manoir Maudit",
    description:
      "Explorez le Manoir Maudit, un lieu infesté de fantômes et de présences maléfiques. Affrontez vos pires peurs et tentez de survivre à l'horreur qui se cache dans chaque pièce sombre.",
    detail:
      "Le Manoir Maudit est une demeure délabrée qui cache des secrets obscurs depuis des siècles. À votre arrivée, vous serez accueilli par une atmosphère oppressante et une aura de terreur. Les couloirs sombres sont habités par des esprits tourmentés qui errent sans relâche. Des murmures inquiétants résonnent dans les pièces vides, et des ombres effrayantes dansent dans la lueur des bougies. Chaque pas que vous ferez sera une épreuve, car le manoir est rempli de pièges mortels et de rencontres surnaturelles. Des spectres vengeurs aux créatures maléfiques, vous devrez rassembler votre courage pour survivre à cette expérience cauchemardesque.",
    price: 25,
    image: "https://th.bing.com/th/id/OIG.5AAsEgdKQuXQ54Nt2tCQ?pid=ImgGn",
    isFavorite: true,
    intoCart: false,
  },

  {
    id: 96,
    mode: "nightmare",
    type: "custom",
    element: "Location",
    name: "Terres Désolées",
    description:
      "Explorez les Terres Désolées, un paysage aride et désolé dépourvu de vie. Parcourez son terrain dangereux, affrontez les éléments impitoyables et confrontez vos peurs intérieures.",
    detail:
      "Les Terres Désolées s'étendent à perte de vue, un royaume désolé et inhospitalier. Sa terre brûlée est jonchée de vestiges d'une civilisation oubliée, réduite maintenant à des ruines. Les vents violents fouettent le paysage désolé, emportant avec eux les murmures des âmes perdues. Le soleil brille impitoyablement, projetant une chaleur implacable sur le sol desséché. La survie devient une lutte constante alors que vous parcourez un terrain traître et faites face aux éléments impitoyables. Les Terres Désolées sont un lieu d'isolement et de désespoir, où seuls les plus forts survivront.",
    price: 14,
    image: "https://th.bing.com/th/id/OIG.7NMVLvzZIxwsRtL23hUp?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 97,
    mode: "dream",
    type: "custom",
    element: "Vehicle",
    name: "Dirigeable Céleste",
    description:
      "Embarquez pour un voyage époustouflant à bord du Dirigeable Céleste, un magnifique vaisseau qui vole à travers les cieux. Découvrez la liberté du vol et contemplez des panoramas à couper le souffle depuis les hauteurs.",
    detail:
      "Le Dirigeable Céleste est une merveille d'ingénierie et d'imagination. Sa forme majestueuse glisse sans effort à travers les nuages, propulsée par des hélices enchantées. Montez à bord et émerveillez-vous devant les mécanismes complexes et horlogers qui alimentent ce vaisseau prodigieux. En vous élevant dans le ciel, les fenêtres panoramiques offrent une vue imprenable sur les paysages en contrebas, des collines vallonnées aux montagnes imposantes. Les équipements à bord offrent un confort luxueux, garantissant un voyage inoubliable à travers les cieux infinis.",
    price: 18,
    image: "https://th.bing.com/th/id/OIG.WJ7uifSWTC5PoHcwWoAm?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 98,
    mode: "dream",
    type: "custom",
    element: "Vehicle",
    name: "Voiture à Voyage Temporel",
    description:
      "Partez pour une aventure palpitante avec la Voiture à Voyage Temporel, un véhicule remarquable capable de traverser le temps. Explorez des époques historiques, assistez à des moments décisifs et dévoilez les fils de l'histoire.",
    detail:
      "La Voiture à Voyage Temporel est un chef-d'œuvre de technologie et d'innovation. Son design élégant dissimule un appareil puissant de manipulation temporelle qui le propulse à travers les âges. Attachez votre ceinture et préparez-vous à un voyage à travers l'histoire, en naviguant entre les civilisations anciennes, les batailles décisives et les événements monumentaux. Vivez les visuels, les sons et même les odeurs des époques révolues, car la Voiture à Voyage Temporel fait revivre le passé dans les moindres détails. Mais attention, altérer l'histoire comporte ses propres risques et conséquences.",
    price: 15,
    image: "https://th.bing.com/th/id/OIG.0vepOXtzFZpXsX161uI4?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 99,
    mode: "dream",
    type: "custom",
    element: "Vehicle",
    name: "Hoverboard Solaire",
    description:
      "Glissez sans effort sur l'Hoverboard Solaire, un moyen de transport futuriste alimenté par l'énergie renouvelable. Parcourez les rues de la ville, réalisez des cascades défiant la gravité et profitez de l'excitation des déplacements à grande vitesse.",
    detail:
      "L'Hoverboard Solaire allie un design élégant à une technologie de pointe. Grâce à ses panneaux solaires, il convertit la lumière du soleil en énergie, vous propulsant vers l'avant avec rapidité et grâce. Naviguez sans effort dans les rues animées de la ville, en vous faufilant avec grâce entre les véhicules. Avec un contrôle précis et une maniabilité intuitive, vous pouvez réaliser des cascades et des manœuvres époustouflantes, défiant la gravité à chaque virage. Profitez de l'excitation des déplacements respectueux de l'environnement alors que vous glissez à travers un monde de possibilités.",
    price: 12,
    image: "https://th.bing.com/th/id/OIG.oxJcDPDmz9itLyPK0iX.?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 100,
    mode: "nightmare",
    type: "custom",
    element: "Vehicle",
    name: "Calèche Ténébreuse",
    description:
      "Embarquez pour un voyage glaçant à bord de la Calèche Ténébreuse, un véhicule sinistre qui traverse les royaumes des ténèbres. Explorez des paysages hantés, rencontrez des entités malveillantes et affrontez vos peurs les plus profondes.",
    detail:
      "La Calèche Ténébreuse est une création macabre, enveloppée de ténèbres et de mystère. Tirée par des chevaux spectraux, elle glisse silencieusement à travers la nuit, laissant une traînée de brume éthérée sur son passage. À l'intérieur, la calèche dégage une atmosphère oppressante, avec des rideaux de velours qui dissimulent des secrets inavoués. Explorez des paysages hantés, où des arbres tordus se dressent dans l'obscurité et des ombres effrayantes se faufilent entre les tombes. Faites face à des entités malveillantes et à des spectres vengeurs lors de votre voyage à travers les royaumes des ténèbres.",
    price: 25,
    image: "https://th.bing.com/th/id/OIG.7vr95SDUqrmWnlzRmpjv?pid=ImgGn",
    isFavorite: true,
    intoCart: false,
  },
  {
    id: 101,
    mode: "nightmare",
    type: "custom",
    element: "Vehicle",
    name: "Moto Démoniaque",
    description:
      "Montez sur la Moto Démoniaque, un véhicule puissant qui brouille la frontière entre le monde des vivants et celui des enfers. Ressentez la puissance brute qui circule dans vos veines alors que vous traversez des royaumes interdits et affrontez des êtres surnaturels.",
    detail:
      "La Moto Démoniaque est une machine d'origine infernale, dont le design s'inspire de forces obscures. Son moteur rugissant résonne dans la nuit, tandis que des flammes dansent le long de sa silhouette élégante. Avec une vitesse et une agilité impies, elle traverse les dimensions, explorant des royaumes que peu osent découvrir. Préparez-vous à affronter des créatures monstrueuses, à traverser des paysages traîtres et à remettre en question la réalité elle-même. La Moto Démoniaque est un véhicule cauchemardesque où le danger et l'excitation deviennent indissociables.",
    price: 17,
    image: "https://th.bing.com/th/id/OIG.dEe._QxgQPPH8eQdlpXx?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 102,
    mode: "nightmare",
    type: "custom",
    element: "Vehicle",
    name: "Tank Détourné",
    description:
      "Prenez le contrôle du Tank Détourné, une machine de guerre colossale transformée en instrument de destruction. Conquérez les lignes ennemies, déchaînez une puissance de feu dévastatrice et laissez une traînée de chaos sur votre passage.",
    detail:
      "Le Tank Détourné est un redoutable colosse, un vestige de la guerre transformé en instrument de chaos et de carnage. Son extérieur fortement blindé porte les cicatrices de nombreuses batailles, tandis que son arsenal d'armes peut anéantir des armées entières. En pilotant cette machine de guerre, vous devenez une force à laquelle il faut se mesurer. Écrasez les obstacles, franchissez les lignes ennemies et semez la destruction à chaque pas tonitruant. Le Tank Détourné est un véhicule cauchemardesque où puissance et dévastation se fusionnent dans une symphonie terrifiante.",
    price: 16,
    image: "https://th.bing.com/th/id/OIG.13jKgyuzhuKCQvU63j1t?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 103,
    mode: "dream",
    type: "custom",
    element: "Action",
    name: "Duel Éthéré",
    description:
      "Engagez-vous dans un duel éthéré où la maîtrise des arts arcaniques et des réflexes éclairs décident de votre destin. Déchaînez des sorts dévastateurs, manœuvrez avec précision et prouvez que vous êtes le dueliste de sorcier ultime.",
    detail:
      "Dans le monde des duels éthérés, des sorciers talentueux s'affrontent dans une bataille intense de magie et d'intelligence. Maniez des sorts anciens avec finesse, invoquez des boules de feu, créez des barrières protectrices et exploitez les forces de la nature à votre avantage. Avec des réflexes fulgurants, esquivez les attaques ennemies et déchaînez des contre-attaques dévastatrices. Au fur et à mesure de votre progression, débloquez de nouveaux sorts et capacités, élargissant ainsi votre arsenal et ouvrant la voie à devenir un dueliste de sorcier légendaire.",
    price: 14,
    image: "https://th.bing.com/th/id/OIG.8TmpeVlZZNrZc6ZEOK2p?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 104,
    mode: "dream",
    type: "custom",
    element: "Action",
    name: "Hold-up Épique",
    description:
      "Lancez-vous dans un hold-up épique, rassemblant une équipe d'individus compétents pour réaliser des vols audacieux à haut risque. Planifiez méticuleusement, exécutez sans faille et trompez les systèmes de sécurité les plus sophistiqués.",
    detail:
      "Dans le monde des hold-ups à haut risque, vous jouez le rôle d'un cerveau criminel rassemblant une équipe de spécialistes. Chaque membre apporte des compétences uniques, du piratage à l'ouverture des coffres-forts en passant par l'acrobatie et la discrétion. Planifiez votre approche méticuleusement, recueillez des informations, étudiez les systèmes de sécurité et identifiez les vulnérabilités. Coordonnez les actions de votre équipe, synchronisez leurs efforts à la perfection. Alors que vous vous infiltrez dans des lieux sécurisés, surmontez les obstacles et échappez à la capture, le frisson du hold-up atteint son paroxysme. Le succès apporte une richesse inimaginable, mais l'échec entraîne des conséquences désastreuses.",
    price: 13,
    image: "https://th.bing.com/th/id/OIG.whqRBk8tThlLSodSo2E5?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 105,
    mode: "dream",
    type: "custom",
    element: "Action",
    name: "Bataille Légendaire",
    description:
      "Entrez dans l'arène d'une bataille légendaire, où les héros s'affrontent et les destins se forgent. Maniez de puissantes armes, déchaînez des combos dévastateurs et prouvez votre valeur en tant que champion ultime.",
    detail:
      "Dans le royaume des batailles légendaires, des héros de différents mondes convergent pour régler leurs différends. Armés de puissantes armes et dotés de capacités extraordinaires, ils s'engagent dans des confrontations épiques. Exécutez des combos éclair, déchaînez des attaques spéciales dévastatrices et utilisez des manœuvres stratégiques pour déjouer vos adversaires. À chaque victoire, votre légende grandit et votre nom s'inscrit dans les annales de l'histoire. Êtes-vous prêt à entrer dans l'arène et à revendiquer votre place parmi les plus grands champions ?",
    price: 15,
    image: "https://th.bing.com/th/id/OIG..G.3_cnuzpAkiXqYspYV?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 106,
    mode: "nightmare",
    type: "custom",
    element: "Action",
    name: "Chaos Apocalyptique",
    description:
      "Plongez dans un monde de chaos apocalyptique, où la survie est une lutte constante contre des hordes de créatures cauchemardesques. Battez-vous pour votre vie, recherchez des ressources et découvrez les sombres secrets du monde déchu.",
    detail:
      "Après un événement cataclysmique, le monde a sombré dans le chaos. Des créatures cauchemardesques parcourent les paysages désolés et la survie devient un combat quotidien. Armé d'armes improvisées, vous devez naviguer dans des environnements périlleux, chercher des fournitures et vous défendre contre des attaques incessantes. Alors que vous dévoilez les mystères du monde déchu, vous découvrez la vérité effrayante derrière le cataclysme et le rôle que vous devez jouer pour façonner son avenir.",
    price: 18,
    image: "https://th.bing.com/th/id/OIG.3SJMWi2vZrH7RX1DljQ3?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 107,
    mode: "nightmare",
    type: "custom",
    element: "Action",
    name: "Conquête Infernale",
    description:
      "Lancez-vous dans un voyage de conquête infernale alors que des forces démoniaques ravagent le monde. Libérez des pouvoirs infernaux, commandez des légions des ténèbres et assouvissez votre soif insatiable de domination.",
    detail:
      "Dans le royaume de la conquête infernale, vous incarnez un puissant seigneur démon, déterminé à répandre le chaos et à subjuguer le monde. Maîtrisez la magie noire, invoquez des sbires démoniaques et déchaînez des sorts dévastateurs sur vos ennemis. En conquérant des territoires, vous établissez votre domination et pliez les êtres inférieurs à votre volonté. Mais méfiez-vous, car d'autres seigneurs démoniaques cherchent à contrecarrer vos ambitions et à revendiquer le monde pour eux-mêmes. C'est une bataille pour le pouvoir ultime, où seuls les plus forts sortiront victorieux.",
    price: 20,
    image: "https://th.bing.com/th/id/OIG.Gk4CIrJ5bH76.QtVnSGq?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 108,
    mode: "nightmare",
    type: "custom",
    element: "Action",
    name: "Étreinte de la Mort",
    description:
      "Plongez dans le royaume de l'Étreinte de la Mort, un lieu où règne les ténèbres et où des batailles mortelles se déroulent. Maniez des pouvoirs nécromantiques, commandez des légions d'êtres morts-vivants et devenez un messager de destruction.",
    detail:
      "Dans le sombre royaume de l'Étreinte de la Mort, vous incarnez un nécromancien, maniant des pouvoirs interdits de vie et de mort. Élevez des armées de morts-vivants, imprégnez-les de magie noire et menez-les au combat contre les vivants. Déchaînez des malédictions dévastatrices, drainez la force vitale de vos ennemis et exploitez les forces de la décomposition. En approfondissant les mystères de la nécromancie, vous devenez une force irrésistible, crainte par tous ceux qui osent vous défier.",
    price: 19,
    image: "https://th.bing.com/th/id/OIG.zV2u5EDcArCDetBXkWav?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 109,
    mode: "dream",
    type: "custom",
    element: "Weather",
    name: "Aurore Céleste",
    description:
      "Contemplez la beauté impressionnante de l'aurore céleste, où des lumières colorées dansent dans le ciel nocturne. Plongez-vous dans un spectacle fascinant de couleurs célestes et de merveilles naturelles.",
    detail:
      "L'aurore céleste est un phénomène naturel extraordinaire qui se produit lorsque des particules chargées du soleil entrent en collision avec l'atmosphère terrestre. Les résultats sont des lumières colorées qui dansent dans le ciel nocturne, créant un spectacle à couper le souffle. Dans cette expérience immersive, vous pourrez contempler ces merveilles naturelles dans toute leur splendeur. Vous serez transporté dans des endroits pittoresques du globe où l'aurore céleste est particulièrement spectaculaire. C'est un voyage visuel et émotionnel qui vous laissera émerveillé devant la beauté de la nature.",
    price: 15,
    image: "https://th.bing.com/th/id/OIP.3FpRFSa4HWojvtpT7McG6wHaEK?pid=ImgDet",
    isFavorite: true,
    intoCart: false,
  },

  {
  id: 110,
  mode: "dream",
  type: "custom",
  element: "Weather",
  name: "Brise Murmurante",
  description:
    "Expérimentez la douce caresse de la brise murmurante alors qu'elle porte les parfums des fleurs en fleurs et la promesse d'un nouveau jour. Laissez-la apaiser votre âme et vous transporter vers un royaume de tranquillité.",
  detail:
    "Dans le royaume de la brise murmurante, la tranquillité règne en maître. Fermez les yeux et ressentez la caresse douce du vent léger sur votre peau. Il transporte avec lui les parfums des fleurs en fleurs, les chants des oiseaux et la promesse d'un nouveau jour. Laissez les murmures apaisants de la brise emporter vos soucis, vous transportant vers un lieu de sérénité et de paix. Embrassez la tranquillité et trouvez refuge dans l'étreinte de la douceur de la nature.",
  price: 16,
  image: "https://th.bing.com/th/id/OIG.gAyWI0iToKfmBLFhd9Fs?pid=ImgGn",
  isFavorite: false,
  intoCart: false,
},
{
  id: 111,
  mode: "dream",
  type: "custom",
  element: "Weather",
  name: "Tempête Mystique",
  description:
    "Préparez-vous à la puissance de la tempête mystique, où les éclairs illuminent le ciel obscurci et le tonnerre résonne à travers la terre. Expérimentez l'énergie brute et la force primordiale de la nature.",
  detail:
    "Dans le royaume de la tempête mystique, la nature déchaîne sa puissance brute et son énergie primordiale. De sombres nuages se rassemblent, obscurcissant le ciel d'une présence menaçante. Les éclairs zèbrent le ciel, illuminant le paysage de leur spectacle éblouissant. Le tonnerre résonne dans l'air, faisant trembler la terre sous vos pieds. Embrassez l'exaltation et l'émerveillement qui accompagnent la contemplation des forces indomptées de la nature. La tempête mystique est un rappel de la puissance de la nature et de l'équilibre délicat entre la beauté et la destruction.",
  price: 18,
  image: "https://th.bing.com/th/id/OIG.0uxJf6_KtvDWgjO5PaPh?pid=ImgGn",
  isFavorite: false,
  intoCart: false,
},
{
  id: 112,
  mode: "nightmare",
  type: "custom",
  element: "Weather",
  name: "Blizzard Éternel",
  description:
    "Plongez dans le royaume du blizzard éternel, où les vents glacés traversent les os et le gel guette les imprudents. Survivez au désert glacé et découvrez les secrets glaçants qui s'y cachent.",
  detail:
    "Dans le royaume du blizzard éternel, un froid mordant saisit l'air et gèle tout sur son passage. Les vents glacés sifflent à travers les paysages gelés, transperçant les vêtements et pénétrant les os. Les flocons de neige tourbillonnent dans le ciel obscur, créant un paysage d'une beauté froide et impitoyable. Le gel recouvre chaque surface, créant une étendue glacée qui attend les imprudents. Explorez ce désert glacé et découvrez les secrets glaçants qui se cachent dans son sein. Le blizzard éternel est un défi à la fois beau et dangereux, une expérience qui teste votre résistance et votre détermination.",
  price: 20,
  image: "https://th.bing.com/th/id/OIP.V1wzzz7SGDjy6ymCgY1UUwHaK2?pid=ImgDet&rs=1",
  isFavorite: false,
  intoCart: false,
},
{
  id: 113,
  mode: "nightmare",
  type: "custom",
  element: "Weather",
  name: "Tempête Pourpre",
  description:
    "Entrez dans le royaume de la tempête pourpre, où des tempêtes dévastatrices engloutissent la terre dans une furie destructrice. Préparez-vous à l'éclair qui frappe et aux pluies torrentielles menaçant de tout emporter.",
  detail:
    "Dans le royaume de la tempête pourpre, le chaos règne en maître. De sombres nuages d'orage planent au-dessus, déversant des pluies torrentielles qui inondent la terre. Les éclairs crépitent dans le ciel, illuminant les nuages teintés de pourpre de leur lueur ardente. Le grondement du tonnerre résonne dans l'air, un rappel constant de la puissance et de la fureur de la tempête. C'est un royaume de destruction et de chaos, où rien n'est à l'abri de la colère de la tempête. Préparez-vous à naviguer dans ce paysage périlleux et à contempler la puissance brute de la fureur de la nature.",
  price: 19,
  image: "https://th.bing.com/th/id/OIG.Ki0XJLnDGvw_4VlNuWeR?pid=ImgGn",
  isFavorite: false,
  intoCart: false,
},
{
  id: 114,
  mode: "nightmare",
  type: "custom",
  element: "Weather",
  name: "Tempête de Sable Désolée",
  description:
    "Aventurez-vous dans le royaume de la tempête de sable désolée, où des vents implacables soulèvent des nuages de sable tourbillonnants et réduisent la visibilité à quelques centimètres. Survivez au désert hostile et découvrez les secrets enfouis en son sein.",
  detail:
    "Dans le royaume de la tempête de sable désolée, le désert devient un paysage hostile et impitoyable. Des vents implacables soulèvent des nuages de sable tourbillonnants, réduisant la visibilité à quelques centimètres à peine. Le soleil brûlant frappe impitoyablement, épuisant la vie de tous ceux qui osent s'aventurer dans ce désert aride. C'est un monde de survie, où chaque pas peut mener à votre perte. Découvrez les secrets enfouis dans le désert et mettez votre volonté à l'épreuve face aux éléments impitoyables de la tempête de sable désolée.",
  price: 17,
  image: "https://th.bing.com/th/id/OIG.adwJHv3JGXwUmd09mIRS?pid=ImgGn",
  isFavorite: false,
  intoCart: false,
},
{
  id: 115,
  mode: "dream",
  type: "custom",
  element: "Item",
  name: "Élixir de Sérénité",
  description:
    "Découvrez l'Élixir de Sérénité, une potion puissante qui apporte la paix intérieure et la tranquillité. Vivez un moment de répit au milieu du chaos et trouvez le réconfort dans ses propriétés apaisantes.",
  detail:
    "L'Élixir de Sérénité est une potion rare et précieuse qui a le pouvoir d'apaiser les âmes les plus tourmentées. En en prenant juste une gorgée, il apporte une sensation de paix intérieure et de tranquillité, faisant disparaître les soucis et les angoisses. Son doux parfum apaise les sens, tandis que sa lueur éthérée émane une énergie apaisante. Prenez un moment pour faire une pause, respirez la sérénité et laissez l'élixir vous transporter vers un royaume de tranquillité au milieu du chaos.",
  price: 15,
  image: "https://th.bing.com/th/id/OIG.9os53JESOb6bXzvcMXkG?pid=ImgGn",
  isFavorite: false,
  intoCart: false,
},
{
  id: 116,
  mode: "dream",
  type: "custom",
  element: "Item",
  name: "Plume de Phénix",
  description:
    "Découvrez la légendaire Plume de Phénix, symbole de renaissance et de renouveau. Utilisez ses propriétés mystiques et débloquez votre véritable potentiel.",
  detail:
    "La Plume de Phénix est un artefact mythique, considéré comme un don du légendaire phénix lui-même. Elle possède le pouvoir de renaissance et de renouveau, accordant à ceux qui la possèdent la capacité de renaître de leurs cendres et de commencer une nouvelle vie. La plume rayonne d'une énergie chaleureuse et réconfortante, symbolisant l'espoir et la résilience. Embrassez le pouvoir de la Plume de Phénix et débloquez votre véritable potentiel alors que vous vous lancez dans un voyage de découverte de soi et de transformation.",
  price: 16,
  image: "https://th.bing.com/th/id/OIG.u81ybCqx_bQDeJzIFanS?pid=ImgGn",
  isFavorite: false,
  intoCart: false,
},
{
  id: 117,
  mode: "dream",
  type: "custom",
  element: "Item",
  name: "Amulette Mystique",
  description:
    "Lancez-vous dans une quête pour trouver l'Amulette Mystique, un talisman puissant qui accorde protection et guidance à son porteur. Exploitez ses énergies mystiques et dévoilez des secrets anciens.",
  detail:
    "L'Amulette Mystique est un talisman antique imprégné d'énergies mystiques. On dit qu'elle a été fabriquée par d'anciennes civilisations et qu'elle détient le pouvoir d'accorder protection et guidance à son porteur. Ornée de symboles complexes et de gemmes scintillantes, l'amulette dégage une aura de sagesse ancienne. Exploitez ses énergies mystiques et dévoilez les secrets du passé alors que vous vous lancez dans une quête de découverte et d'illumination.",
  price: 14,
  image: "https://th.bing.com/th/id/OIG.9Ax..AaC17KvGkOrdK2Y?pid=ImgGn",
  isFavorite: false,
  intoCart: false,
},
{
  id: 118,
  mode: "nightmare",
  type: "custom",
  element: "Item",
  name: "Relique Maudite",
  description:
    "Méfiez-vous de la Relique Maudite, un artefact sombre et malveillant qui apporte malheur et désespoir. Découvrez son sombre passé et brisez la malédiction, si vous l'osez.",
  detail:
    "La Relique Maudite est un artefact sinistre, enveloppé de ténèbres et de mystère. Les légendes racontent ses pouvoirs malveillants, capables d'apporter malheur et désespoir à quiconque la possède. Son aura lugubre donne des frissons dans le dos, et ses murmures sombres hantent les rêves de ceux qui osent s'en approcher. Découvrez le sombre passé de la Relique Maudite et lancez-vous dans un voyage périlleux pour briser la malédiction, mais méfiez-vous, car le pouvoir de la relique ne doit pas être sous-estimé.",
  price: 18,
  image: "https://th.bing.com/th/id/OIG.Fdd3USduJIIONYuPSMgU?pid=ImgGn",
  isFavorite: false,
  intoCart: false,
},
{
  id: 119,
  mode: "nightmare",
  type: "custom",
  element: "Item",
  name: "Dague des Ombres",
  description:
    "Embrassez les ténèbres avec la Dague des Ombres, une lame maléfique qui tranche le voile entre les royaumes. Utilisez son pouvoir sinistre et devenez le messager du chaos.",
  detail:
    "La Dague des Ombres est une lame maléfique forgée dans les profondeurs de l'obscurité. Sa lame d'ébène scintille d'une lueur d'outre-monde, comme si elle était imprégnée de l'essence des ombres elles-mêmes. Elle tranche le voile entre les royaumes, permettant à son possesseur d'utiliser le pouvoir sinistre des ombres. Embrassez les ténèbres et devenez le messager du chaos en brandissant la Dague des Ombres et en libérant son pouvoir maléfique sur vos ennemis.",
  price: 19,
  image: "https://th.bing.com/th/id/OIG.tz3U4ydftkiAX7LMgAkQ?pid=ImgGn",
  isFavorite: false,
  intoCart: false,
},
{
  id: 120,
  mode: "nightmare",
  type: "custom",
  element: "Item",
  name: "Pendentif de Pierre d'Âme",
  description:
    "Libérez le pouvoir du Pendentif de Pierre d'Âme, un talisman troublant qui capture l'essence des âmes perdues. Maîtrisez son énergie mystérieuse et déchaînez son potentiel.",
  detail:
    "Le Pendentif de Pierre d'Âme est un talisman troublant, réputé pour sa capacité à capturer et à contenir l'essence des âmes perdues. Les légendes racontent que le pendentif est en réalité un portail vers le royaume des morts, et que ceux qui le portent peuvent maîtriser l'énergie mystérieuse des âmes capturées. Son aura éthérée brille d'une lueur inquiétante, attirant l'attention de ceux qui sont attirés par les mystères de l'au-delà. Libérez le pouvoir du Pendentif de Pierre d'Âme et déchaînez son potentiel alors que vous explorez les limites de la vie et de la mort.",
  price: 21,
  image: "https://th.bing.com/th/id/OIG.Jg0XbaBSQDNHFJewt9aF?pid=ImgGn",
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
