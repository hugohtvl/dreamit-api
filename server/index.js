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
    theme: "",
    element: "vehicle",
    name: "Pirate ship",
    description:
      "Sail aboard the legendary Black Pearl on a high-stakes pirate adventure. Navigate treacherous waters, uncover hidden riches, and face formidable foes. Can you conquer the seas and become a true pirate of the Black Pearl?",
    detail:
      "The Black Pearl, a legendary ship that strikes fear into the hearts of sailors and pirates alike, is a sight to behold. With its sleek and menacing silhouette, it cuts through the waves with unparalleled grace and speed. The ship's ebony hull, weathered by countless battles and journeys, exudes an air of mystery and danger. Its towering masts, adorned with tattered black sails, seem to dance with the wind, guiding the vessel towards its next conquest. The deck is adorned with intricately carved wooden figures, depicting mythical creatures and fierce pirates, adding an aura of ancient legends to the ship's presence. The Black Pearl's cannons, meticulously maintained and gleaming with power, stand ready to unleash devastation upon any who dare to challenge its supremacy. From bow to stern, the ship exudes an indomitable spirit, embodying the very essence of piracy on the high seas.",
    price: 20,
    image: "https://th.bing.com/th/id/OIG.nGjYDy2LTb4O7V7Z1rc9?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 74,
    mode: "dream",
    type: "Protagonist",
    name: "Elijah Stormrider",
    description:
      "Harness the power of the elements with Elijah Stormrider, a charismatic and enigmatic protagonist. Unleash thunderstorms, control the winds, and discover the true extent of your elemental mastery.",
    detail:
      "Elijah Stormrider possesses a rare affinity for the elements, capable of bending nature's forces to his will. Follow his journey as he unravels ancient secrets, battles against dark forces, and strives to protect a world teetering on the edge of destruction.",
    price: 12,
    image: "https://th.bing.com/th/id/OIG.Er86lBv1f00XrehkTHn.?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 75,
    mode: "dream",
    type: "Protagonist",
    name: "Luna Shadowcaster",
    description:
      "Embrace the darkness within with Luna Shadowcaster, a mysterious and formidable protagonist. Harness shadow magic, manipulate illusions, and walk the line between light and dark.",
    detail:
      "Luna Shadowcaster delves into the arcane arts, mastering the secrets of shadows and illusions. Join her on a journey of self-discovery and face the inner demons that threaten to consume her.",
    price: 15,
    image: "https://th.bing.com/th/id/OIG.ZlE5Tj8zuLKU9kuVI8BK?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 76,
    mode: "dream",
    type: "Protagonist",
    name: "Aurora Dawnbreaker",
    description:
      "Embrace the radiant light with Aurora Dawnbreaker, a noble and righteous protagonist. Channel divine energy, banish darkness, and uphold justice in a world plagued by evil.",
    detail:
      "Aurora Dawnbreaker is a beacon of hope in a world veiled in darkness. With her unwavering faith and the power of light, she fights against the forces of evil, bringing peace and salvation to those in need.",
    price: 18,
    image: "https://th.bing.com/th/id/OIG.tt6jEgz9OleEfRWXOutE?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 77,
    mode: "nightmare",
    type: "Protagonist",
    name: "Dusk Shadowblade",
    description:
      "Embrace the shadows that consume your soul with Dusk Shadowblade, a tormented and relentless protagonist. Embody darkness, wield forbidden powers, and plunge the world into eternal night.",
    detail:
      "Dusk Shadowblade walks a treacherous path, forsaking light for the allure of darkness. Driven by a thirst for power, he seeks to reshape the world in his image, regardless of the consequences.",
    price: 14,
    image: "https://th.bing.com/th/id/OIG.YtamFHdgAQKM3d8etW40?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 78,
    mode: "nightmare",
    type: "Protagonist",
    name: "Raven Nightshade",
    description:
      "Embrace the allure of darkness with Raven Nightshade, a seductive and cunning protagonist. Manipulate shadows, weave enchantments, and revel in the chaos and intrigue of the night.",
    detail:
      "Raven Nightshade is a master of deception and subterfuge, using her charms and mystical abilities to manipulate those around her. Dive into a world of secrets and intrigue",
    price: 16,
    image: "https://th.bing.com/th/id/OIG.vJe5GXSr951LSLekJodV?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 79,
    mode: "nightmare",
    type: "Protagonist",
    name: "Malachi Darkthorn",
    description:
      "Embrace the darkness that dwells within with Malachi Darkthorn, a tormented and enigmatic protagonist. Control dark magic, summon shadowy minions, and sow chaos in the mortal realm.",
    detail:
      "Malachi Darkthorn is a fallen hero consumed by darkness, seeking vengeance and power at any cost. Unleash his wrath upon the world as he seeks to rewrite the fate that bound him.",
    price: 17,
    image: "https://th.bing.com/th/id/OIG.nKbkc85HQ_oFlaUFkpJu?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 80,
    mode: "dream",
    type: "Antagonist",
    name: "Morgana Nightshade",
    description:
      "Beware the malevolent presence of Morgana Nightshade, a dark sorceress with nefarious intentions. Unleash devastating spells, summon dark minions, and test your mettle against her formidable power.",
    detail:
      "Morgana Nightshade, a mistress of dark magic, seeks to plunge the world into eternal darkness. As the primary adversary in your journey, she will stop at nothing to achieve her wicked goals.",
    price: 10,
    image: "https://th.bing.com/th/id/OIG.wyIeSy75LLUQDchCO6R4?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 81,
    mode: "dream",
    type: "Antagonist",
    name: "Lucius Bloodfang",
    description:
      "Prepare to face the fearsome Lucius Bloodfang, a vampire lord thirsty for power and dominance. Engage in epic battles, evade his deadly fangs, and challenge his reign of terror.",
    detail:
      "Lucius Bloodfang, a centuries-old vampire, commands an army of the undead and seeks to subjugate the mortal realm. Your ultimate showdown with him will test your strength, cunning, and bravery.",
    price: 13,
    image: "https://th.bing.com/th/id/OIG.EX1LGq2cZhW_kXMtBykp?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 82,
    mode: "dream",
    type: "Antagonist",
    name: "Sylvia Shadowweaver",
    description:
      "Beware the enigmatic Sylvia Shadowweaver, a mistress of manipulation and deception. Unravel her intricate schemes, outsmart her cunning traps, and bring an end to her reign of chaos.",
    detail:
      "Sylvia Shadowweaver, a mastermind of intrigue, pulls the strings from the shadows, orchestrating chaos and discord. Uncover her true motives and confront her in a battle of wits and wills.",
    price: 11,
    image: "https://th.bing.com/th/id/OIG.2xt1C9BaN5FblMizIG8P?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 83,
    mode: "nightmare",
    type: "Antagonist",
    name: "Draven Darkheart",
    description:
      "Beware the malevolent presence of Draven Darkheart, a necromancer with an insatiable hunger for souls. Confront his undead minions, decipher his dark rituals, and put an end to his reign of terror.",
    detail:
      "Draven Darkheart, a necromancer of immense power, seeks to conquer death itself. Unleash your might and face the forces of darkness as you confront him in a battle of life and death.",
    price: 19,
    image:
      "https://i.pinimg.com/474x/3c/43/17/3c4317a1a2254833d3f6d2749a3a2ed0.jpg",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 84,
    mode: "nightmare",
    type: "Antagonist",
    name: "Isabella Nightshade",
    description:
      "Beware the enchanting yet deadly Isabella Nightshade, a seductive succubus with a thirst for souls. Resist her allure, navigate her illusions, and break free from her clutches.",
    detail:
      "Isabella Nightshade, a succubus of immense beauty and charm, preys upon the desires and weaknesses of mortals. Succumb to her temptations, and you will be forever trapped in her dark realm.",
    price: 18,
    image:
      "https://i.pinimg.com/originals/8c/bd/91/8cbd91e9679bd883024c80eb18e15eab.jpg",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 85,
    mode: "dream",
    type: "Antagonist",
    name: "Vesper Shadowcaster",
    description:
      "Confront the ultimate darkness with Vesper Shadowcaster, a formidable and malevolent antagonist. Command shadowy minions, unleash devastating curses, and plunge the world into eternal night.",
    detail:
      "Vesper Shadowcaster is the embodiment of pure evil, wielding dark powers that rival those of the gods. Face the ultimate test of your courage and skill as you confront the very essence of darkness itself.",
    price: 10,
    image: "https://th.bing.com/th/id/OIG.gSKmRX7XLG4l6gLH1ODl?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 86,
    mode: "dream",
    type: "Antagonist",
    name: "Lucius Dreadborne",
    description:
      "Embrace the allure of villainy with Lucius Dreadborne, a cunning and manipulative antagonist. Scheme in the shadows, unleash chaos, and outwit your adversaries at every turn.",
    detail:
      "Lucius Dreadborne is a mastermind with a grand vision of chaos and destruction. Engage in a battle of wits and strategy as you orchestrate a web of deceit and unleash havoc upon the world.",
    price: 13,
    image: "https://th.bing.com/th/id/OIG.4.jDFi1x0oXBHtaTBrqi?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 87,
    mode: "dream",
    type: "Antagonist",
    name: "Sylvia Nightshade",
    description:
      "Embrace the dark beauty and power of Sylvia Nightshade, a seductive and treacherous antagonist. Manipulate minds, weave enchantments, and revel in the chaos and destruction you unleash.",
    detail:
      "Sylvia Nightshade is a mistress of manipulation and seduction, using her charm and mystical allure to bend others to her will. Explore the depths of her dark desires and witness the devastation she leaves in her wake.",
    price: 15,
    image: "https://th.bing.com/th/id/OIG.CCTYvR6q.fIjO_xthMrl?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 88,
    mode: "nightmare",
    type: "Antagonist",
    name: "Ragnar Deathbringer",
    description:
      "Embrace the embodiment of death with Ragnar Deathbringer, a merciless and unstoppable antagonist. Command an undead horde, wield necromantic powers, and bring about the end of all life.",
    detail:
      "Ragnar Deathbringer is a necromancer of unparalleled power, his dark magic capable of raising armies of the dead. Witness the devastation as he spreads his reign of terror across the land, leaving only death and despair in his wake.",
    price: 16,
    image: "https://th.bing.com/th/id/OIG.KX8BT.1Cy9Q.FxwhVCG1?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 89,
    mode: "nightmare",
    type: "Antagonist",
    name: "Seraphina Shadowbane",
    description:
      "Embrace the shadows that consume your soul with Seraphina Shadowbane, a ruthless and vengeful antagonist. Master the arts of assassination, sow discord, and strike fear into the hearts of your enemies.",
    detail:
      "Seraphina Shadowbane is an assassin without mercy, her skills honed to perfection through years of training and bloodshed. Experience the thrill of the hunt as she leaves a trail of darkness and despair in her wake.",
    price: 19,
    image: "https://th.bing.com/th/id/OIG.Rkc4hJ6bH7MGabqWjcoD?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 90,
    mode: "nightmare",
    type: "Antagonist",
    name: "Malachi Bloodthorn",
    description:
      "Embrace the embodiment of pure malevolence with Malachi Bloodthorn, a sadistic and tyrannical antagonist. Revel in the suffering of others, wield forbidden magics, and plunge the world into an eternal nightmare.",
    detail:
      "Malachi Bloodthorn is a dark sorcerer, his powers fueled by pain and suffering. Witness the depths of his depravity as he seeks to dominate and destroy all who stand in his way.",
    price: 22,
    image: "https://th.bing.com/th/id/OIG.P38.af1gl_vqqLtfKzlD?pid=ImgGn",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 91,
    mode: "dream",
    type: "Location",
    name: "Enchanted Forest",
    description:
      "Step into the mystical Enchanted Forest, where ancient trees whisper secrets and magical creatures roam freely. Lose yourself in the beauty and wonder of this ethereal realm.",
    detail:
      "The Enchanted Forest is a place of pure enchantment and natural splendor. Sunlight filters through the dense canopy of towering trees, casting a soft glow on the lush vegetation below. Sparkling streams meander through the forest, their waters imbued with mystical energy. Fairy rings dot the landscape, inviting curious visitors to enter a realm of enchantment. From hidden groves to serene meadows, the Enchanted Forest is a sanctuary of tranquility and awe-inspiring beauty.",
    price: 15,
    image: "https://example.com/enchanted-forest.jpg",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 92,
    mode: "dream",
    type: "Location",
    name: "Lost City of Atlantis",
    description:
      "Discover the fabled Lost City of Atlantis, a majestic underwater utopia filled with ancient ruins and untold treasures. Dive into the depths and uncover the secrets of this legendary civilization.",
    detail:
      "Hidden beneath the ocean waves, the Lost City of Atlantis lies shrouded in mystery and wonder. Ancient ruins, adorned with intricate carvings and statues, bear witness to a once-great civilization. Coral reefs teeming with vibrant marine life surround the submerged city, creating a mesmerizing spectacle. Glowing crystals illuminate the underwater streets and buildings, casting an otherworldly glow. As you explore the depths, you'll encounter sunken temples, grand palaces, and remnants of advanced technology that hint at the city's extraordinary past.",
    price: 18,
    image: "https://example.com/atlantis.jpg",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 93,
    mode: "dream",
    type: "Location",
    name: "Starry Observatory",
    description:
      "Embark on a celestial journey at the Starry Observatory. Gaze at distant galaxies, witness breathtaking meteor showers, and unravel the mysteries of the universe.",
    detail:
      "Perched atop a secluded mountain peak, the Starry Observatory offers a window to the cosmos. With state-of-the-art telescopes and expert astronomers, you'll witness the wonders of the night sky like never before. The vast expanse of stars twinkles overhead, forming intricate constellations that tell ancient tales. Nebulas swirl with vibrant colors, painting the universe with their ethereal beauty. From mesmerizing meteor showers to awe-inspiring views of distant galaxies, the Starry Observatory is a sanctuary for stargazers and dreamers alike.",
    price: 12,
    image: "https://example.com/starry-observatory.jpg",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 94,
    mode: "nightmare",
    type: "Location",
    name: "Abandoned Asylum",
    description:
      "Enter the eerie Abandoned Asylum, a place of darkness and despair. Traverse its haunted halls, confront restless spirits, and uncover the sinister secrets that lie within.",
    detail:
      "The Abandoned Asylum stands as a haunting monument to forgotten souls. Its crumbling walls and broken windows exude an aura of decay and malevolence. Ghostly whispers echo through the halls, and shadows dance in the flickering light. As you venture deeper into the asylum, you'll encounter rooms filled with remnants of the past, from rusty beds to discarded medical equipment. Restless spirits lurk in every corner, their tormented presence sending chills down your spine. The Abandoned Asylum is a place where nightmares come to life, a chilling reminder of the darkness that resides within.",
    price: 17,
    image: "https://example.com/abandoned-asylum.jpg",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 95,
    mode: "nightmare",
    type: "Location",
    name: "Cursed Manor",
    description:
      "Explore the Cursed Manor, a foreboding residence steeped in dark magic and tragic history. Uncover its cursed artifacts, encounter vengeful spirits, and try to escape its clutches.",
    detail:
      "The Cursed Manor stands as a testament to a bygone era, now consumed by an ancient curse. Its decaying walls and overgrown gardens harbor secrets best left undisturbed. Haunting melodies drift through the air, echoing the tragedies that unfolded within its walls. Ghostly apparitions manifest, their mournful gazes a constant reminder of the past. As you navigate the labyrinthine halls, you'll come across cursed artifacts, each with its own malevolent power. The Cursed Manor is a place of darkness and despair, where escape seems almost impossible.",
    price: 16,
    image: "https://example.com/cursed-manor.jpg",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 96,
    mode: "nightmare",
    type: "Location",
    name: "Desolate Wasteland",
    description:
      "Enter the Desolate Wasteland, a barren and desolate landscape devoid of life. Traverse its treacherous terrain, face harsh elements, and confront your inner fears.",
    detail:
      "The Desolate Wasteland stretches as far as the eye can see, a desolate and inhospitable realm. Its scorched earth is littered with remnants of a forgotten civilization, now reduced to ruins. Harsh winds whip through the barren landscape, carrying with them the whispers of lost souls. The sun beats down relentlessly, casting a relentless heat upon the parched ground. Survival becomes a constant struggle as you navigate treacherous terrain and face the harsh elements. The Desolate Wasteland is a place of isolation and despair, where only the strongest will endure.",
    price: 14,
    image: "https://example.com/desolate-wasteland.jpg",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 97,
    mode: "dream",
    type: "Vehicle",
    name: "Celestial Airship",
    description:
      "Embark on a breathtaking journey aboard the Celestial Airship, a magnificent vessel that soars through the skies. Experience the freedom of flight and witness breathtaking vistas from above.",
    detail:
      "The Celestial Airship is a marvel of engineering and imagination. Its majestic form glides effortlessly through the clouds, propelled by enchanted propellers. Step aboard and marvel at the intricate clockwork mechanisms that power this wondrous vessel. As you ascend into the sky, panoramic windows offer breathtaking views of landscapes below, from rolling hills to towering mountains. Onboard amenities provide luxurious comfort, ensuring an unforgettable journey through the boundless skies.",
    price: 18,
    image: "https://example.com/celestial-airship.jpg",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 98,
    mode: "dream",
    type: "Vehicle",
    name: "Time-Traveling Car",
    description:
      "Embark on a thrilling adventure with the Time-Traveling Car, a remarkable vehicle that can traverse through time. Explore historical eras, witness pivotal moments, and unravel the fabric of history.",
    detail:
      "The Time-Traveling Car is a masterpiece of technology and innovation. Its sleek design conceals the powerful time manipulation apparatus that propels it through the ages. Buckle up and prepare for a journey through history as you navigate ancient civilizations, pivotal battles, and monumental events. Experience the sights, sounds, and even the smells of bygone eras, as the Time-Traveling Car brings the past to life in vivid detail. But be cautious, as altering history carries its own risks and consequences.",
    price: 15,
    image: "https://example.com/time-traveling-car.jpg",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 99,
    mode: "dream",
    type: "Vehicle",
    name: "Solar-powered Hoverboard",
    description:
      "Glide effortlessly on the Solar-powered Hoverboard, a futuristic means of transportation powered by renewable energy. Zip through city streets, perform gravity-defying tricks, and embrace the thrill of high-speed travel.",
    detail:
      "The Solar-powered Hoverboard combines sleek design with cutting-edge technology. Harnessing the power of the sun, its solar panels convert sunlight into energy, propelling you forward with speed and grace. Effortlessly navigate bustling city streets, gracefully weaving through traffic. With precision control and intuitive handling, you can perform awe-inspiring tricks and maneuvers, defying gravity with every twist and turn. Embrace the exhilaration of eco-friendly travel as you glide through a world of possibilities.",
    price: 12,
    image: "https://example.com/solar-powered-hoverboard.jpg",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 100,
    mode: "nightmare",
    type: "Vehicle",
    name: "Shadowy Carriage",
    description:
      "Embark on a chilling journey aboard the Shadowy Carriage, a sinister vehicle that traverses the realms of darkness. Explore haunted landscapes, encounter malevolent entities, and confront your deepest fears.",
    detail:
      "The Shadowy Carriage is a macabre creation, shrouded in darkness and mystery. Pulled by spectral horses, it glides silently through the night, leaving a trail of ethereal mist in its wake. Inside, the carriage exudes an oppressive atmosphere, with velvet curtains that conceal windows revealing eerie sights. As you venture into the unknown, you'll encounter haunted forests, desolate graveyards, and other realms steeped in darkness. The Shadowy Carriage is a vehicle of nightmares, where every journey is a terrifying test of courage.",
    price: 19,
    image: "https://example.com/shadowy-carriage.jpg",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 101,
    mode: "nightmare",
    type: "Vehicle",
    name: "Demonic Motorcycle",
    description:
      "Ride the Demonic Motorcycle, a wickedly powerful vehicle that blurs the line between the living and the underworld. Feel the raw power coursing through your veins as you traverse forbidden realms and confront otherworldly beings.",
    detail:
      "The Demonic Motorcycle is a machine of infernal origin, its design inspired by dark forces. Its roaring engine echoes through the night, while flames dance along its sleek frame. With unholy speed and agility, it tears through dimensions, traversing realms that few dare to explore. Prepare to face monstrous creatures, navigate treacherous landscapes, and challenge the very fabric of reality. The Demonic Motorcycle is a vehicle of nightmares, where danger and thrill become inseparable.",
    price: 17,
    image: "https://example.com/demonic-motorcycle.jpg",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 102,
    mode: "nightmare",
    type: "Vehicle",
    name: "Hijacked Tank",
    description:
      "Take control of the Hijacked Tank, a colossal war machine turned instrument of destruction. Conquer enemy lines, unleash devastating firepower, and leave a trail of chaos in your wake.",
    detail:
      "The Hijacked Tank is a fearsome behemoth, a relic of warfare repurposed for chaos and carnage. Its heavily armored exterior bears the scars of countless battles, while its arsenal of weaponry can lay waste to entire armies. As you pilot this war machine, you become a force to be reckoned with. Crush obstacles, breach enemy lines, and sow destruction with each thunderous step. The Hijacked Tank is a vehicle of nightmares, where power and devastation merge into a terrifying symphony.",
    price: 16,
    image: "https://example.com/hijacked-tank.jpg",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 103,
    mode: "dream",
    type: "Action",
    name: "Ethereal Duel",
    description:
      "Engage in an ethereal duel, where mastery of the arcane arts and lightning-fast reflexes decide your fate. Unleash devastating spells, maneuver with precision, and prove yourself as the ultimate sorcerer duelist.",
    detail:
      "In the world of ethereal duels, skilled sorcerers face off in an intense battle of magic and wits. Wield ancient spells with finesse, conjuring fireballs, summoning protective barriers, and harnessing the forces of nature to your advantage. With lightning-fast reflexes, dodge enemy attacks and unleash devastating counterattacks. As you progress, unlock new spells and abilities, expanding your arsenal and paving your way to becoming a legendary sorcerer duelist.",
    price: 14,
    image: "https://example.com/ethereal-duel.jpg",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 104,
    mode: "dream",
    type: "Action",
    name: "Epic Heist",
    description:
      "Embark on an epic heist, assembling a team of skilled individuals to pull off daring, high-stakes robberies. Plan meticulously, execute flawlessly, and outsmart the most sophisticated security systems.",
    detail:
      "In the world of high-stakes heists, you play the role of a mastermind assembling a team of specialists. Each member brings unique skills, from hacking and safecracking to acrobatics and stealth. Plan your approach meticulously, gathering intel, studying security systems, and identifying vulnerabilities. Coordinate your team's actions, synchronizing their efforts to perfection. As you infiltrate secure locations, overcome obstacles, and evade capture, the thrill of the heist reaches its peak. Success brings unimaginable wealth, but failure carries dire consequences.",
    price: 13,
    image: "https://example.com/epic-heist.jpg",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 105,
    mode: "dream",
    type: "Action",
    name: "Legendary Battle",
    description:
      "Enter the arena of a legendary battle, where heroes clash and destinies are forged. Wield mighty weapons, unleash devastating combos, and prove your worth as the ultimate champion.",
    detail:
      "In the realm of legendary battles, heroes from different worlds converge to settle their differences. Armed with powerful weapons and imbued with extraordinary abilities, they engage in epic confrontations. Execute lightning-fast combos, unleash devastating special attacks, and utilize strategic maneuvers to outwit your opponents. With each victory, your legend grows, and your name becomes etched in the annals of history. Are you ready to step into the arena and claim your place among the greatest champions?",
    price: 15,
    image: "https://example.com/legendary-battle.jpg",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 106,
    mode: "nightmare",
    type: "Action",
    name: "Apocalyptic Chaos",
    description:
      "Plunge into a world of apocalyptic chaos, where survival is a constant struggle against hordes of nightmarish creatures. Fight for your life, scavenge for resources, and uncover the dark secrets of the fallen world.",
    detail:
      "In the aftermath of a cataclysmic event, the world has descended into chaos. Nightmarish creatures roam the desolate landscapes, and survival becomes a daily battle. Armed with improvised weapons, you must navigate treacherous environments, scavenge for supplies, and defend against relentless attacks. As you unravel the mysteries of the fallen world, you discover the harrowing truth behind the cataclysm and the role you must play in shaping its future.",
    price: 18,
    image: "https://example.com/apocalyptic-chaos.jpg",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 107,
    mode: "nightmare",
    type: "Action",
    name: "Infernal Conquest",
    description:
      "Embark on a journey of infernal conquest, as demonic forces ravage the world. Unleash hellish powers, command legions of darkness, and fulfill your insatiable thirst for dominion.",
    detail:
      "In the realm of infernal conquest, you play as a powerful demon lord, hell-bent on spreading chaos and subjugating the world. Harness dark magic, summon demonic minions, and unleash devastating spells upon your enemies. As you conquer territories, you establish your dominion and bend lesser beings to your will. But be wary, for rival demon lords seek to thwart your ambitions and claim the world for themselves. It's a battle for ultimate power, where only the strongest will emerge victorious.",
    price: 20,
    image: "https://example.com/infernal-conquest.jpg",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 108,
    mode: "nightmare",
    type: "Action",
    name: "Death's Embrace",
    description:
      "Step into the realm of Death's Embrace, a place where darkness reigns and deadly battles unfold. Wield necromantic powers, command undead legions, and become a harbinger of destruction.",
    detail:
      "In the desolate realm of Death's Embrace, you take on the role of a necromancer, wielding forbidden powers over life and death. Raise armies of undead, imbue them with dark magic, and lead them into battle against the living. Unleash devastating curses, drain the life force of your enemies, and harness the forces of decay. As you delve deeper into the mysteries of necromancy, you become an unstoppable force, feared by all who dare to oppose you.",
    price: 19,
    image: "https://example.com/deaths-embrace.jpg",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 109,
    mode: "dream",
    type: "Weather",
    name: "Celestial Aurora",
    description:
      "Witness the awe-inspiring beauty of the celestial aurora, where colorful lights dance across the night sky. Immerse yourself in a mesmerizing display of nature's wonder.",
    detail:
      "In the realm of celestial auroras, you find yourself in a world of breathtaking beauty. As day transitions into night, the sky becomes a canvas for a celestial spectacle. Vibrant hues of green, blue, and purple swirl and twirl, casting an enchanting glow upon the landscape. Stand in awe as shooting stars streak across the heavens, leaving trails of stardust in their wake. The celestial aurora is a manifestation of nature's splendor, a reminder of the wonders that exist beyond our reach.",
    price: 17,
    image: "https://example.com/celestial-aurora.jpg",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 110,
    mode: "dream",
    type: "Weather",
    name: "Whispering Breeze",
    description:
      "Experience the gentle touch of the whispering breeze, as it carries the scents of blooming flowers and the promise of a new day. Allow it to soothe your soul and transport you to a realm of tranquility.",
    detail:
      "In the realm of the whispering breeze, tranquility reigns supreme. Close your eyes and feel the soft caress of the gentle wind against your skin. It carries with it the scents of blooming flowers, the songs of birds, and the promise of a new day. Let the soothing whispers of the breeze wash away your worries, transporting you to a place of serenity and peace. Embrace the tranquility and find solace in the embrace of nature's gentle touch.",
    price: 16,
    image: "https://example.com/whispering-breeze.jpg",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 111,
    mode: "dream",
    type: "Weather",
    name: "Mystic Storm",
    description:
      "Brace yourself for the power of the mystic storm, where lightning illuminates the darkened skies and thunder echoes through the land. Experience the raw energy and primal force of nature.",
    detail:
      "In the realm of the mystic storm, nature unleashes its raw power and primal energy. Dark clouds gather, obscuring the sky with an ominous presence. Lightning streaks across the heavens, illuminating the landscape with its dazzling display. Thunder reverberates through the air, shaking the earth beneath your feet. Embrace the exhilaration and awe that comes with witnessing the untamed forces of nature. The mystic storm is a reminder of nature's might and the delicate balance between beauty and destruction.",
    price: 18,
    image: "https://example.com/mystic-storm.jpg",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 112,
    mode: "nightmare",
    type: "Weather",
    name: "Eternal Blizzard",
    description:
      "Step into the realm of the eternal blizzard, where icy winds cut through the bone and frostbite awaits the unprepared. Survive the frozen wasteland and unravel the chilling secrets that lie within.",
    detail:
      "In the realm of the eternal blizzard, an icy desolation stretches as far as the eye can see. Biting winds howl, carrying with them the sting of frost that can freeze a person's very soul. Snowflakes swirl and dance, forming an unforgiving landscape of ice and snow. It is a world where survival is a constant battle against the elements, where the unwary can succumb to frostbite within moments. Unravel the chilling secrets that lie within this frozen wasteland and discover the true meaning of endurance.",
    price: 20,
    image: "https://example.com/eternal-blizzard.jpg",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 113,
    mode: "nightmare",
    type: "Weather",
    name: "Crimson Tempest",
    description:
      "Enter the realm of the crimson tempest, where raging storms engulf the land in a fury of destruction. Brace yourself as lightning strikes and torrential rains threaten to wash away all traces of life.",
    detail:
      "In the realm of the crimson tempest, chaos reigns supreme. Dark storm clouds loom overhead, unleashing torrential rains that flood the land. Lightning crackles across the sky, illuminating the crimson-hued clouds with its fiery glow. The roar of thunder echoes through the air, a constant reminder of the power and fury of the tempest. It is a realm of destruction and chaos, where nothing is safe from the wrath of the storm. Brace yourself as you navigate this treacherous landscape and witness the raw power of nature's fury.",
    price: 19,
    image: "https://example.com/crimson-tempest.jpg",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 114,
    mode: "nightmare",
    type: "Weather",
    name: "Desolate Sandstorm",
    description:
      "Venture into the realm of the desolate sandstorm, where relentless winds whip up swirling clouds of sand and visibility is reduced to mere inches. Survive the harsh desert and uncover the secrets buried within.",
    detail:
      "In the realm of the desolate sandstorm, the desert becomes a hostile and unforgiving landscape. Relentless winds whip up swirling clouds of sand, reducing visibility to mere inches. The scorching sun beats down mercilessly, draining the life out of all who dare to venture into this barren wasteland. It is a world of survival, where every step could lead to your demise. Uncover the secrets buried within the desert and test your will against the harsh elements of the desolate sandstorm.",
    price: 17,
    image: "https://example.com/desolate-sandstorm.jpg",
    isFavorite: false,
    intoCart: false,
  },

  {
    id: 115,
    mode: "dream",
    type: "Item",
    name: "Elixir of Serenity",
    description:
      "Discover the Elixir of Serenity, a potent concoction that brings inner peace and tranquility. Experience a moment of respite amidst the chaos and find solace in its calming properties.",
    detail:
      "The Elixir of Serenity is a rare and precious potion that holds the power to calm even the most troubled souls. With just a sip, it brings a sense of inner peace and tranquility, washing away worries and anxieties. Its gentle aroma soothes the senses, while its ethereal glow emanates a calming energy. Take a moment to pause, breathe in the serenity, and let the elixir transport you to a realm of tranquility amidst the chaos.",
    price: 15,
    image: "https://example.com/elixir-of-serenity.jpg",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 116,
    mode: "dream",
    type: "Item",
    name: "Phoenix Feather",
    description:
      "Uncover the legendary Phoenix Feather, a symbol of rebirth and renewal. Harness its mystical properties and unlock your true potential.",
    detail:
      "The Phoenix Feather is a mythical artifact, believed to be a gift from the legendary phoenix itself. It possesses the power of rebirth and renewal, granting those who possess it the ability to rise from the ashes and start anew. The feather radiates a warm and comforting energy, symbolizing hope and resilience. Embrace the power of the Phoenix Feather and unlock your true potential as you embark on a journey of self-discovery and transformation.",
    price: 16,
    image: "https://example.com/phoenix-feather.jpg",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 117,
    mode: "dream",
    type: "Item",
    name: "Mystic Amulet",
    description:
      "Embark on a quest to find the Mystic Amulet, a powerful talisman that grants its wearer protection and guidance. Tap into its mystical energies and unlock ancient secrets.",
    detail:
      "The Mystic Amulet is an ancient talisman imbued with mystical energies. It is said to have been crafted by ancient civilizations and holds the power to grant protection and guidance to its wearer. Adorned with intricate symbols and shimmering gemstones, the amulet exudes an aura of ancient wisdom. Tap into its mystical energies and unlock the secrets of the past as you embark on a quest of discovery and enlightenment.",
    price: 14,
    image: "https://example.com/mystic-amulet.jpg",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 118,
    mode: "nightmare",
    type: "Item",
    name: "Cursed Relic",
    description:
      "Beware the Cursed Relic, a dark and malevolent artifact that brings misfortune and despair. Uncover its dark history and break the curse, if you dare.",
    detail:
      "The Cursed Relic is a sinister artifact, shrouded in darkness and mystery. Legends tell of its malevolent powers, capable of bringing misfortune and despair to anyone who possesses it. Its eerie aura sends chills down the spine, and its dark whispers haunt the dreams of those who dare to come near. Uncover the dark history of the Cursed Relic and embark on a perilous journey to break the curse, but beware, for the relic's power is not to be underestimated.",
    price: 18,
    image: "https://example.com/cursed-relic.jpg",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 119,
    mode: "nightmare",
    type: "Item",
    name: "Shadow Dagger",
    description:
      "Embrace the darkness with the Shadow Dagger, a wicked blade that cuts through the veil between realms. Harness its sinister power and become a harbinger of chaos.",
    detail:
      "The Shadow Dagger is a wicked blade forged in the depths of darkness. Its ebony blade shimmers with an otherworldly glow, as if infused with the essence of shadows themselves. It cuts through the veil between realms, allowing its wielder to harness the sinister power of the shadows. Embrace the darkness and become a harbinger of chaos as you wield the Shadow Dagger and unleash its malevolent power upon your enemies.",
    price: 19,
    image: "https://example.com/shadow-dagger.jpg",
    isFavorite: false,
    intoCart: false,
  },
  {
    id: 120,
    mode: "nightmare",
    type: "Item",
    name: "Soulstone Pendant",
    description:
      "Unleash the power of the Soulstone Pendant, a haunting talisman that captures the essence of lost souls. Harness their restless energy and wield it as your own.",
    detail:
      "The Soulstone Pendant is a haunting talisman that holds the essence of lost souls trapped within its ethereal confines. It glimmers with a ghostly light, and whispers of forgotten voices echo from within. By harnessing the restless energy of these trapped souls, the pendant grants its wearer access to a wellspring of power. Unleash the haunting energy of the Soulstone Pendant and wield it as your own, as you navigate the realms of the living and the dead.",
    price: 17,
    image: "https://example.com/soulstone-pendant.jpg",
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
