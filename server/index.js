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
    type: "ready-to-use",
    theme: "travel",
    element: "",
    name: "World Explorer",
    description:
      "Embark on an unforgettable journey through ancient ruins, vibrant cities, and breathtaking landscapes. Explore diverse cultures, savor delicious cuisine, and create lasting memories. Are you ready to experience the world?",
    detail:
      "Uncover the wonders of travel as you embark on an immersive journey across continents and cultures. Discover hidden gems, iconic landmarks, and enchanting natural wonders. From bustling cities to serene beaches, each destination offers a unique blend of history, art, and adventure. Capture the essence of your travels through vibrant photographs and heartfelt journal entries. Embrace the joy of exploration and let your wanderlust guide you towards incredible experiences. Get ready to embark on a transformative journey that will broaden your horizons and leave you with cherished memories for a lifetime.",
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
    name: "Adventurous Escapade",
    description:
      "Embark on a thrilling adventure across uncharted territories and distant lands. Discover hidden treasures, encounter exotic wildlife, and immerse yourself in vibrant cultures. Are you ready to embrace the spirit of exploration?",
    detail:
      "Unleash your sense of adventure as you traverse unknown territories and embark on a journey of discovery. From remote rainforests to ancient ruins, each destination offers an opportunity to immerse yourself in unique landscapes and rich traditions. Engage with friendly locals, sample tantalizing cuisine, and delve into the fascinating history of each place. Whether trekking through majestic mountains or diving into crystal-clear waters, every step will unveil new wonders and create indelible memories. Embrace the unknown, ignite your curiosity, and let the spirit of exploration guide you towards extraordinary experiences.",
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
    name: "Tropical Paradise",
    description:
      "Escape to a tropical paradise of palm-fringed beaches, turquoise waters, and endless sunshine. Indulge in luxurious resorts, thrilling water sports, and rejuvenating spa treatments. Are you ready to experience blissful relaxation?",
    detail:
      "Unwind and rejuvenate in the lap of luxury as you escape to a tropical paradise. Feel the warm sand between your toes, listen to the gentle lapping of waves, and bask in the glorious sunshine. Immerse yourself in a world of relaxation with invigorating spa treatments, soothing yoga sessions, and peaceful beachside meditation. Indulge in delectable cuisine and savor tropical cocktails as you watch breathtaking sunsets paint the sky. Whether you choose to lounge by the pool, embark on water adventures, or simply soak in the serene atmosphere, this idyllic getaway promises to replenish your body, mind, and soul.",
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
    name: "Dark Odyssey",
    description:
      "Embark on a nightmarish journey through haunted realms and cursed landscapes. Face sinister creatures, unravel chilling mysteries, and navigate treacherous paths. Can you survive the horrors that lurk in the shadows?",
    detail:
      "Prepare yourself for a bone-chilling odyssey as you venture into the darkest corners of haunted realms and cursed landscapes. From eerie ghost towns to desolate graveyards, each step will test your courage and resilience. Confront sinister creatures that hunger for your fear, unravel chilling mysteries that whisper from the shadows, and navigate treacherous paths that lead to unspeakable horrors. Only the strongest will survive the nightmarish onslaught. Will you be consumed by darkness or emerge as a true survivor? Brace yourself for a heart-pounding adventure that will push your sanity to the edge.",
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
    name: "Twisted Expeditions",
    description:
      "Embark on a harrowing expedition through twisted dimensions and distorted realities. Navigate mazes of madness, encounter otherworldly entities, and unravel mind-bending enigmas. Will you succumb to the madness or emerge as a beacon of sanity?",
    detail:
      "Venture into the depths of twisted dimensions where reality bends and distorts with every step. Navigate through labyrinths of madness, where walls shift and corridors lead to unknown realms. Encounter otherworldly entities that exist beyond human comprehension and face mind-bending enigmas that challenge the very fabric of your sanity. Will you succumb to the horrors that lurk in the shadows or emerge as a beacon of light in the abyss? Prepare for a nightmarish odyssey that will test the limits of your courage and resilience.",
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
    name: "Cursed Journeys",
    description:
      "Embark on cursed journeys to haunted destinations where malevolent forces reign supreme. Confront vengeful spirits, solve ancient curses, and survive paranormal encounters. Will you break free from the curse or become trapped in eternal darkness?",
    detail:
      "Prepare for cursed journeys to haunted destinations where the line between the living and the dead is blurred. Confront vengeful spirits seeking retribution, decipher ancient curses that bind souls to eternal torment, and survive chilling encounters with the paranormal. Each step will bring you closer to the heart of darkness as you unravel the secrets that shroud these accursed realms. Will you break free from the curse that ensnares your soul or succumb to the malevolent forces that lurk in the shadows? Brace yourself for a terrifying adventure where survival hinges on your ability to confront the supernatural.",
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
    name: "Pirate Adventure",
    description:
      "Join Captain Jack Sparrow on a thrilling pirate adventure filled with treacherous seas, hidden treasures, and epic battles. Can you survive the pirate's life and claim the ultimate prize ?",
    detail:
      "Embark on a thrilling pirate adventure with Captain Jack Sparrow, a charismatic and cunning pirate leading a loyal crew of skilled sailors, swordsmen, and navigators. Together, they set sail on the legendary Black Pearl, navigating treacherous seas with towering waves and unpredictable currents. Their quest takes them to Skull Island, a remote and perilous land shrouded in legends and guarded by supernatural creatures. However, their journey is obstructed by Captain Blackbeard, a ruthless and cunning adversary who seeks to claim the ultimate treasure. As alliances shift and betrayals unfold, epic battles on land and sea ensue amidst an atmosphere of dark storm clouds, thunder, lightning, and torrential rain. Will Captain Jack Sparrow overcome the challenges and outwit Captain Blackbeard to secure the treasure? Find out in this swashbuckling tale of bravery, treachery, and unexpected alliances.",
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
    name: "Secret Agent Mission",
    description:
      "Step into the shoes of a secret agent on a high-stakes mission to save the world. Uncover hidden clues, outsmart enemies, and stop a diabolical plot. Are you ready to become the ultimate spy?",
    detail:
      "Become a master of espionage as you embark on a thrilling secret agent mission. Navigate through intricate mazes, infiltrate enemy hideouts, and decode encrypted messages. Utilize state-of-the-art gadgets, showcase your combat skills, and engage in adrenaline-pumping chase sequences. With the fate of the world hanging in the balance, it's up to you to outwit the cunning villains and bring them to justice. Prepare for heart-pounding action, suspenseful plot twists, and the ultimate test of your spy abilities.",
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
    name: "Ninja Warrior Training",
    description:
      "Embark on a rigorous training program to become a skilled ninja warrior. Learn ancient martial arts techniques, overcome physical challenges, and unlock your inner strength. Are you ready to embrace the way of the ninja?",
    detail:
      "Immerse yourself in the ancient art of ninjutsu as you train to become a formidable warrior. Master stealthy movements, hone your combat skills, and navigate through obstacle courses designed to test your agility and endurance. Learn the secrets of camouflage, the art of swordsmanship, and the ability to harness your inner energy. Face off against fellow trainees in friendly sparring sessions and participate in thrilling missions that push your skills to the limit. As you progress on your journey, you'll uncover the true essence of being a ninja and discover the power that lies within you.",
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
    name: "Doomsday Survival Challenge",
    description:
      "Immerse yourself in a post-apocalyptic world and test your survival skills. Face relentless challenges, scavenge for resources, and outwit hostile factions. Are you ready to confront the darkness that awaits?",
    detail:
      "Step into a nightmarish future where society has collapsed, and chaos reigns supreme. In this post-apocalyptic world, you must navigate through desolate landscapes, scavenge for scarce resources, and fend off hostile factions vying for control. Battle against hunger, disease, and the constant threat of violence as you fight to survive. Your decisions will determine your fate as you confront the harsh realities of a world on the brink of oblivion. Get ready to face your deepest fears and discover what it truly means to survive in the face of utter devastation.",
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
    name: "Haunted Mansion Exploration",
    description:
      "Brave the horrors of a haunted mansion as you unravel its dark secrets. Navigate ghostly corridors, solve sinister puzzles, and confront vengeful spirits. Are you prepared to enter a realm of eternal darkness?",
    detail:
      "Enter a mansion shrouded in darkness and filled with unspeakable horrors. Explore its eerie hallways, each step echoing with the whispers of the restless spirits that dwell within. Solve enigmatic puzzles, decipher cryptic messages, and uncover the tragic history of the mansion and its inhabitants. But be wary, for malevolent entities lurk in the shadows, eager to claim unsuspecting souls. Face your deepest fears, summon your courage, and discover the truth behind the haunting. Get ready to confront the supernatural and survive the nightmarish depths of the haunted mansion.",
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
    name: "Apocalyptic Zombie Escape",
    description:
      "Plunge into a world overrun by the undead. Outmaneuver hordes of ravenous zombies, scavenge for supplies, and fight for your survival. Can you escape the clutches of the zombie apocalypse?",
    detail:
      "In a world ravaged by a relentless zombie outbreak, you must navigate through desolate cities, abandoned structures, and treacherous landscapes. Outsmart hordes of ravenous zombies, scavenge for vital supplies, and fortify your defenses. Every decision counts as you form alliances, face moral dilemmas, and confront the limits of your humanity. Will you succumb to the insatiable hunger of the undead or rise as a beacon of hope in a world consumed by darkness? Get ready to face the relentless onslaught of the zombie apocalypse and fight for your survival against all odds.",
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
    name: "Gourmet Chef Masterclass",
    description:
      "Unleash your culinary creativity and master the art of gourmet cooking. Learn from world-renowned chefs, experiment with flavors, and elevate your gastronomic skills. Are you ready to embark on a journey of culinary excellence?",
    detail:
      "Indulge in the world of gastronomy as you join renowned chefs in a masterclass designed to unleash your culinary potential. Learn the techniques of molecular gastronomy, discover the art of plating, and explore the fusion of diverse cuisines. Experiment with exotic ingredients, savor the aroma of freshly ground spices, and create dishes that tantalize the taste buds. From delicate pastries to elaborate multi-course meals, each lesson will expand your repertoire and elevate your cooking to new heights. Prepare to embark on a culinary adventure where creativity knows no bounds.",
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
    name: "Farm-to-Table Experience",
    description:
      "Immerse yourself in the world of sustainable cooking as you discover the joys of farm-to-table cuisine. Harvest fresh produce, learn traditional cooking methods, and embrace a healthier way of eating. Are you ready to embark on a culinary journey that reconnects you with nature?",
    detail:
      "Step into the realm of sustainable cooking as you explore the farm-to-table movement. Roam through lush organic farms, handpick seasonal produce, and learn the art of preserving flavors through traditional methods. Engage with local farmers, discover the importance of responsible agriculture, and gain insights into the nutritional benefits of fresh ingredients. From creating wholesome meals to crafting homemade preserves, each experience will deepen your connection with the land and ignite a passion for sustainable living. Get ready to savor the pure flavors of nature in every bite.",
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
    name: "World Cuisine Exploration",
    description:
      "Embark on a global culinary adventure as you explore the rich tapestry of flavors from around the world. Discover diverse cooking techniques, traditional recipes, and the essence of each culture's cuisine. Are you ready to tantalize your taste buds with an array of international delights?",
    detail:
      "Embark on a culinary journey that transcends borders as you delve into the world of global cuisine. Master the art of rolling sushi in Japan, learn the secrets of creating the perfect pasta in Italy, and embrace the vibrant spices of India. Immerse yourself in cultural traditions, connect with local chefs, and unlock the culinary secrets passed down through generations. From street food to haute cuisine, each destination will offer a unique culinary experience that reflects the soul of the culture. Prepare to broaden your palate and gain a deeper appreciation for the diversity of flavors that exist worldwide.",
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
    name: "Sinister Sweet Delights",
    description:
      "Enter a world where sweetness turns to darkness. Create hauntingly delicious desserts that tempt and terrify. Are you ready to indulge in a sinister journey of culinary delights?",
    detail:
      "Dare to venture into the realm of wicked desserts as you create tantalizing treats with a sinister twist. Craft confections that blur the line between pleasure and pain, using unconventional ingredients and macabre presentation. Delve into the dark arts of pastry, infusing your creations with the essence of shadows and secrets. Explore the boundaries of taste and texture as you create desserts that tempt the senses and leave a lingering, haunting impression. Get ready to indulge in the dark side of gastronomy, where the line between pleasure and fear blurs into a delicious nightmare.",
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
    name: "Cursed Kitchen Challenge",
    description:
      "Enter a cursed kitchen where every dish you prepare becomes a culinary nightmare. Overcome cursed ingredients, break kitchen spells, and reclaim your culinary talents. Can you conquer the curse?",
    detail:
      "Step into a kitchen shrouded in darkness, plagued by a curse that turns your culinary creations into nightmarish abominations. Navigate through twisted recipes, overcome cursed ingredients that come to life, and challenge the malevolent spirits that haunt your cooking space. Solve culinary puzzles, break the curse, and restore your culinary talents to their former glory. Every step brings you closer to redemption, but the kitchen's dark forces will stop at nothing to keep you trapped in the nightmare. Get ready to face the cursed kitchen and reclaim your culinary prowess in a battle against the supernatural.",
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
    name: "Gastronomic Inferno",
    description:
      "Plunge into the depths of culinary chaos as you enter a gastronomic inferno. Battle with demonic recipes, conquer fiery challenges, and tame the infernal flavors. Can you withstand the heat of the inferno?",
    detail:
      "Descend into a culinary underworld where chaos and flames reign supreme. Confront demonic recipes that push your skills to the limit, battle fiery challenges that test your resolve, and tame the infernal flavors that threaten to overwhelm your senses. Navigate through treacherous kitchens, harness the power of culinary alchemy, and emerge triumphant from the blazing inferno. Each dish you conquer brings you closer to mastering the culinary arts in the face of utter chaos. Get ready to withstand the scorching heat and unleash your culinary creativity in the midst of the gastronomic inferno.",
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
    name: "Velocity Rush",
    description:
      "Get ready for an adrenaline-fueled motoring experience like no other. Take control of powerful machines, race on thrilling tracks, and break speed barriers. Are you ready to unleash your inner speed demon?",
    detail:
      "Strap yourself in for a high-octane adventure as you dive into the world of motoring. Feel the rush of adrenaline as you take control of powerful machines, race on thrilling tracks, and break speed barriers. Push your skills to the limit as you master hairpin turns, navigate challenging terrain, and compete against skilled opponents. Whether you prefer the roar of the engine or the precision of handling, this motoring experience will test your mettle and ignite your passion for speed.",
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
    name: "Road Trip Escapade",
    description:
      "Embark on an epic road trip adventure filled with breathtaking landscapes, hidden gems, and unforgettable encounters. Get behind the wheel and let the open road be your guide. Are you ready to hit the highway?",
    detail:
      "Prepare yourself for the ultimate road trip escapade as you embark on a journey of discovery. Set off on scenic highways, winding through breathtaking landscapes and passing by iconic landmarks. Explore charming towns, indulge in local cuisines, and connect with fellow travelers along the way. Whether you're driving a classic convertible or a rugged SUV, every mile will be filled with excitement and new experiences. Get ready to create lifelong memories and embrace the freedom of the open road.",
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
    name: "Supercar Fantasy",
    description:
      "Experience the thrill of driving a dream machine. Slide into the driver's seat of a luxurious supercar, feel the raw power under your control, and leave ordinary behind. Can you handle the ultimate automotive fantasy?",
    detail:
      "Prepare to have your automotive fantasies come to life as you step into the world of supercars. Feel the exhilaration as you slide into the driver's seat of a sleek and powerful machine. Experience the raw power and precision engineering that sets these extraordinary vehicles apart. Accelerate on open highways, navigate challenging corners, and leave bystanders in awe of your automotive prowess. From the iconic roar of the engine to the smooth acceleration, this is your chance to live out your supercar dreams and leave ordinary driving behind.",
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
    name: "Apocalyptic Drive",
    description:
      "Enter a post-apocalyptic world where chaos reigns and survival is the only goal. Take the wheel of armored vehicles, navigate treacherous landscapes, and fend off hostile factions. Can you survive the wasteland?",
    detail:
      "Prepare for an adrenaline-pumping nightmare as you navigate a post-apocalyptic wasteland. Take control of armored vehicles, reinforced with spikes and equipped with heavy weaponry, and venture into a world of chaos and destruction. Navigate treacherous landscapes filled with collapsed buildings, hostile factions, and mutated creatures. Gather scarce resources, fend off attacks, and fight for survival against the remnants of a shattered society. In this battle for existence, only the most cunning and resilient will endure the relentless onslaught of the wasteland.",
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
    name: "Nightmare Circuit",
    description:
      "Plunge into the darkest corners of the racing world. Join illicit races on treacherous tracks, evade law enforcement, and outmaneuver rivals. Can you conquer the nightmare circuit?",
    detail:
      "Prepare for a heart-pounding nightmare as you enter the underground world of illicit racing. Join races on treacherous tracks hidden deep within the city, where danger lurks at every turn. Evade law enforcement, outmaneuver rival drivers, and prove your skills in high-stakes competitions. The pursuit of victory comes with a price, as you navigate narrow alleyways, dodge oncoming traffic, and unleash your driving skills in the dead of night. In this adrenaline-fueled nightmare, only the boldest and most skilled drivers will conquer the circuit and claim their place among the elite.",
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
    name: "Twisted Dragsters",
    description:
      "Enter the world of twisted drag racing where monstrous vehicles dominate the tracks. Strap into grotesque machines, unleash nitro-fueled power, and battle against otherworldly racers. Can you survive the twisted dragsters?",
    detail:
      "Prepare yourself for a nightmare on the drag strip as you enter a world of twisted drag racing. Strap into grotesque machines adorned with spikes, horns, and monstrous designs. Feel the raw power as you unleash nitro-fueled acceleration and tear down the straightaways. Battle against otherworldly racers, each with their own unique abilities and macabre vehicles. The tracks are treacherous, filled with traps and hazards that can send even the bravest racers into oblivion. In this twisted nightmare, victory is not only about speed but also survival. Can you conquer the dragsters and emerge as the ultimate champion?",
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
    name: "Mysterious Enigma",
    description:
      "Step into the shoes of a brilliant detective and solve perplexing mysteries. Uncover clues, unravel hidden secrets, and outsmart cunning criminals. Are you ready to crack the mysterious enigma?",
    detail:
      "Become a master detective as you embark on a journey to solve perplexing mysteries that will test your wits and deduction skills. Gather clues from crime scenes, interview witnesses, and analyze evidence to uncover hidden secrets. Navigate through a web of deception, outsmart cunning criminals, and bring them to justice. From locked-room murders to international conspiracies, each case will challenge your intellect and unravel the darkest enigmas. Can you solve the mysteries that have baffled the world?",
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
    name: "Noir Chronicles",
    description:
      "Immerse yourself in a world of shadows, deceit, and crime. Step into the gritty underworld of noir detective fiction, where danger lurks at every corner. Are you ready to uncover the dark secrets?",
    detail:
      "Enter the dark and atmospheric world of noir detective fiction, where shadows conceal secrets and danger lurks around every corner. Dive into the gritty underworld, filled with hardened criminals, femme fatales, and corrupt officials. Unravel complex conspiracies, follow the trail of clues, and confront your own demons as you navigate the treacherous path of justice. In this noir chronicle, trust is a luxury, and your instincts will be your most valuable asset. Can you expose the truth and bring light to the darkness?",
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
    name: "Sleuth's Legacy",
    description:
      "Inherit the legacy of a legendary detective and carry the torch of justice. Solve baffling cases, follow in the footsteps of your predecessor, and uphold the code of the sleuth. Are you ready to claim your legacy?",
    detail:
      "Step into the shoes of a detective tasked with upholding the legacy of a legendary sleuth. Solve baffling cases that have stumped investigators for years, follow in the footsteps of your predecessor, and uncover the truth that lies hidden in the shadows. From classic whodunits to intricate puzzles, each case will test your deductive reasoning and challenge your perception of reality. Carry the torch of justice, unravel the mysteries that haunt the city, and prove yourself worthy of the sleuth's legacy. The path to truth is paved with deception, but your keen intellect will guide you to the answers.",
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
    name: "Infernal Investigations",
    description:
      "Plunge into the depths of hellish mysteries as you become an investigator in a nightmarish realm. Uncover diabolical secrets, face demonic adversaries, and battle supernatural forces. Can you survive infernal investigations?",
    detail:
      "Prepare yourself for infernal investigations as you step into a nightmarish realm filled with demonic mysteries. Uncover diabolical secrets that defy human understanding, face off against malevolent spirits and supernatural creatures, and battle forces from beyond the mortal plane. Every step you take will bring you closer to the truth, but also closer to the edge of your sanity. Will you succumb to the horrors that lurk in the shadows, or will you emerge as a beacon of light in the darkness?",
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
    name: "Twisted Mindscapes",
    description:
      "Enter the twisted mindscapes of deranged criminals and unravel their macabre psyche. Delve into their darkest fantasies, navigate psychological mazes, and emerge with the truth. Can you survive the twisted mindscapes?",
    detail:
      "Prepare to explore the darkest corners of the human psyche as you enter the twisted mindscapes of deranged criminals. Delve into their macabre fantasies, navigate psychological mazes, and untangle the threads of their twisted minds. Confront your own fears and doubts as you navigate through nightmarish landscapes and face the demons within. In this battle of wits and sanity, only the most determined and resilient detectives will emerge with the truth. Can you survive the twisted mindscapes and maintain your grip on reality?",
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
    name: "Deadly Conspiracies",
    description:
      "Uncover deadly conspiracies that threaten to plunge the world into chaos. Navigate a web of lies, decode encrypted messages, and expose the masterminds behind the plots. Can you survive the deadly conspiracies?",
    detail:
      "Plunge into a world of intrigue and danger as you uncover deadly conspiracies that threaten to unravel society. Navigate a web of lies, deceit, and betrayal as you follow the trail of clues, decode encrypted messages, and expose the masterminds behind the plots. From government cover-ups to secret societies, the stakes have never been higher. Your detective skills and determination will be put to the ultimate test as you race against time to prevent catastrophe. Can you survive the deadly conspiracies and bring the truth to light?",
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
    name: "Sensual Awakening",
    description:
      "Indulge in a world of sensual pleasure and intimate exploration. Awaken your desires, embrace your fantasies, and experience the art of seduction. Are you ready for a sensual awakening?",
    detail:
      "Enter a realm of heightened sensuality and explore the art of seduction. Indulge in intimate experiences, embrace your deepest desires, and unlock the secrets of pleasure. From tantalizing encounters to passionate rendezvous, each moment will leave you craving for more. Discover the beauty of connection, the power of desire, and the ecstasy of surrender. Are you ready for a sensual awakening that will ignite your senses?",
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
    name: "Forbidden Desires",
    description:
      "Unleash your deepest, most forbidden desires and explore the boundaries of pleasure. Surrender to temptation, embark on passionate encounters, and discover the true meaning of ecstasy. Are you ready to embrace your forbidden desires?",
    detail:
      "Dive into a world of forbidden desires where pleasure knows no limits. Explore the boundaries of passion, surrender to irresistible temptations, and indulge in the most tantalizing experiences. From steamy encounters to uninhibited explorations, each moment will take you to new heights of ecstasy. Embrace your deepest longings, break free from inhibitions, and discover the true meaning of pleasure. Are you ready to embark on a journey of forbidden desires?",
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
    name: "Eternal Passion",
    description:
      "Experience a love that transcends time and boundaries. Let passion ignite your soul, explore intimate connections, and bask in the ecstasy of eternal love. Are you ready for an everlasting passion?",
    detail:
      "Enter a world where love knows no bounds and passion transcends time. Experience the intoxicating power of eternal love as you explore deep connections, indulge in intimate encounters, and embrace the intensity of desire. From soulful connections to fiery romances, each moment will immerse you in a whirlwind of emotions. Let your inhibitions fade away as you surrender to the allure of eternal passion. Are you ready to ignite your soul and experience love that lasts a lifetime?",
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
    name: "Dark Temptations",
    description:
      "Plunge into a world of dark temptations, where desire becomes a dangerous obsession. Explore forbidden pleasures, navigate twisted fantasies, and confront your inner demons. Can you escape the grip of dark temptations?",
    detail:
      "Enter a realm where desire takes a sinister turn and dark temptations consume the soul. Explore forbidden pleasures that blur the line between pleasure and pain, navigate twisted fantasies that push the boundaries of sanity, and confront your inner demons that threaten to consume you. Each encounter will test your limits, challenge your notions of pleasure, and leave you questioning your own desires. Can you resist the seductive allure of darkness and escape the grip of dark temptations?",
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
    name: "Sinister Seduction",
    description:
      "Fall under the spell of a sinister seduction. Surrender to irresistible charms, indulge in wicked desires, and descend into a world of forbidden ecstasy. Can you resist the allure of sinister seduction?",
    detail:
      "Prepare to be seduced by the forbidden as you fall under the spell of a sinister seduction. Surrender to irresistible charms, explore the depths of wicked desires, and embrace the allure of forbidden ecstasy. From shadowy encounters to tantalizing rituals, each moment will push the boundaries of pleasure and test your resolve. Can you resist the twisted temptations that beckon you into a world of darkness?",
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
    name: "Carnal Nightmares",
    description:
      "Plunge into a realm of carnal nightmares, where desire turns into a terrifying ordeal. Confront your deepest fears, navigate through twisted encounters, and escape the clutches of your darkest fantasies. Can you survive the realm of carnal nightmares?",
    detail:
      "Step into a realm where desire morphs into a terrifying ordeal, and pleasure transforms into a nightmare. Confront your deepest fears as you navigate through twisted encounters, face macabre temptations, and escape the clutches of your darkest fantasies. Each moment will test your courage, challenge your sanity, and push you to the edge of your limits. Can you survive the realm of carnal nightmares and find your way back to the light?",
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
    name: "Enchanted Love",
    description:
      "Embark on a magical journey of love and enchantment. Discover soulful connections, experience sweeping romances, and let the power of true love transform your world. Are you ready for an enchanted love story?",
    detail:
      "Step into a world where love is a magical force that transcends time and space. Experience soulful connections that ignite your heart, embrace sweeping romances that sweep you off your feet, and let the power of true love transform your world. From breathtaking encounters to heartfelt confessions, each moment will immerse you in a whirlwind of emotions. Are you ready to be swept away by an enchanted love story?",
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
    name: "Passionate Desire",
    description:
      "Ignite the flames of passion and surrender to the intoxicating power of desire. Explore intense connections, embark on passionate affairs, and experience the ecstasy of love's embrace. Are you ready for a journey of passionate desire?",
    detail:
      "Unleash your deepest desires as you dive into a world of passion and romance. Explore intense connections that set your soul on fire, embark on passionate affairs that defy all boundaries, and experience the ecstasy of love's embrace. From stolen glances to lingering touches, each moment will leave you breathless and yearning for more. Are you ready to surrender to the intoxicating power of passionate desire?",
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
    name: "Eternal Devotion",
    description:
      "Experience a love that transcends time and conquers all obstacles. Let the flame of eternal devotion burn bright as you navigate through challenges, celebrate moments of pure bliss, and create a love story for the ages. Are you ready for an eternal devotion?",
    detail:
      "Enter a world where love knows no boundaries and time stands still. Experience a love that transcends all obstacles as you navigate through challenges, celebrate moments of pure bliss, and create a love story for the ages. From heartfelt promises to unbreakable bonds, each moment will deepen your connection and ignite the flame of eternal devotion. Are you ready to embark on a timeless journey of love?",
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
    name: "Cursed Desires",
    description:
      "Plunge into a world of cursed desires, where love becomes a haunting obsession. Uncover dark secrets, navigate treacherous affairs, and face the consequences of forbidden love. Can you break free from the curse of your desires?",
    detail:
      "Enter a realm where love turns into a haunting obsession and desires become a curse. Uncover dark secrets that threaten to consume you, navigate treacherous affairs that test your morality, and face the consequences of forbidden love. Each step you take will lead you deeper into the abyss of your desires. Can you break free from the curse that binds your heart?",
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
    name: "Tainted Hearts",
    description:
      "Fall into a world of tainted hearts, where love becomes a twisted game. Unravel deceitful plots, navigate through toxic relationships, and confront the darkness that lurks within. Can you escape the grip of tainted hearts?",
    detail:
      "Dive into a world where love is a twisted game and hearts are tainted by deceit. Unravel the plots of manipulative minds, navigate through toxic relationships that threaten to consume you, and confront the darkness that lurks within. Each choice you make will determine the fate of your own heart. Can you break free from the grip of tainted hearts?",
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
    name: "Eternal Betrayal",
    description:
      "Plunge into a world of eternal betrayal, where love turns into a cruel deception. Uncover treacherous secrets, navigate through heart-wrenching betrayals, and discover the true meaning of sacrifice. Can you survive the realm of eternal betrayal?",
    detail:
      "Enter a realm where love becomes a cruel deception and trust is shattered. Uncover treacherous secrets that threaten to tear your world apart, navigate through heart-wrenching betrayals that leave you shattered, and discover the true meaning of sacrifice. Each step you take will test your resilience and redefine the boundaries of love. Can you survive the realm of eternal betrayal and find redemption?",
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
    name: "Battlefield Heroes",
    description:
      "Step onto the battlefield and become a hero of war. Experience the thrill of intense combat, forge alliances with fellow soldiers, and lead your troops to victory. Are you ready to make your mark in the annals of history?",
    detail:
      "Immerse yourself in the chaos of war as you step onto the battlefield as a hero. Experience the thrill of intense combat, where every decision can change the course of history. Forge alliances with fellow soldiers, strategize your moves, and lead your troops with courage and honor. From epic clashes to heroic acts, each moment will define your legacy as a battlefield hero. Are you ready to make your mark in the annals of history?",
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
    name: "Forgotten Valor",
    description:
      "Discover the forgotten valor of unsung heroes in the midst of war. Uncover untold stories, witness acts of bravery, and honor those who fought against all odds. Are you ready to relive the forgotten valor of the past?",
    detail:
      "Delve into the untold stories of unsung heroes who fought with unwavering valor in the midst of war. Witness acts of bravery that defy all odds, honor the sacrifices made on the battlefield, and uncover the hidden tales of heroism that history has forgotten. From valiant last stands to acts of compassion, each moment will transport you to a time where courage knew no bounds. Are you ready to relive the forgotten valor of the past?",
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
    name: "Warrior's Legacy",
    description:
      "Carry the legacy of warriors who fought for honor, freedom, and justice. Experience the thrill of battle, embrace the camaraderie of fellow warriors, and defend what you hold dear. Are you ready to write your name in the annals of the warrior's legacy?",
    detail:
      "Embrace the spirit of warriors who fought for honor, freedom, and justice as you step into the battlefield. Experience the thrill of battle, where courage is tested and legends are born. Embrace the camaraderie of fellow warriors, forge unbreakable bonds, and defend what you hold dear. From epic clashes to quiet moments of reflection, each step you take will write your name in the annals of the warrior's legacy. Are you ready to embark on a journey that will test your mettle?",
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
    name: "Shattered Peace",
    description:
      "Step into a world where peace is shattered, and war consumes all. Witness the horrors of conflict, face the brutality of battle, and confront the darkness that lies within. Can you survive in a world of shattered peace?",
    detail:
      "Enter a world where peace is shattered, and war engulfs everything in its path. Witness the horrors of conflict, face the brutality of battle, and confront the darkness that lies within the hearts of men. Can you navigate the treacherous landscapes of war and emerge unscathed? In a world of shattered peace, survival is the ultimate victory.",
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
    name: "Descent into Chaos",
    description:
      "Plunge into the chaos of war, where hope fades and darkness prevails. Confront the horrors of battle, navigate through treacherous landscapes, and find the strength to survive. Can you endure the descent into chaos?",
    detail:
      "Descend into the depths of chaos as war ravages the land. Confront the horrors of battle, where hope fades and darkness prevails. Navigate through treacherous landscapes, where danger lurks at every turn. Amidst the chaos, find the strength to survive and emerge from the shadows. In a world consumed by war, resilience is the key to survival.",
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
    name: "War-Torn Souls",
    description:
      "Witness the plight of war-torn souls, haunted by the ravages of conflict. Navigate through a landscape of despair, confront the demons within, and seek redemption amidst the chaos. Can you mend the shattered souls?",
    detail:
      "Enter a world ravaged by war, where souls are torn apart by the atrocities of conflict. Navigate through a landscape of despair, where the weight of the past burdens every step. Confront the demons within, seek redemption amidst the chaos, and mend the shattered souls that remain. Can you find solace in the midst of war's devastation?",
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
    name: "Realm of Enchantment",
    description:
      "Step into a realm of enchantment, where magic thrives and mythical creatures roam. Embark on epic quests, unravel ancient mysteries, and discover the power within. Are you ready to embrace the wonders of the enchanted realm?",
    detail:
      "Embark on a journey into a realm of enchantment, where magic weaves its tapestry and mythical creatures come to life. Explore breathtaking landscapes, embark on epic quests, and unravel the mysteries of ancient civilizations. Discover the power within you as you confront magical beings, forge alliances with fantastical creatures, and bring balance to the enchanted realm. Are you ready to embrace the wonders that await?",
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
    name: "Legends of Mythos",
    description:
      "Immerse yourself in the legends of Mythos, a world where heroes rise, ancient prophecies unfold, and destinies are forged. Unleash your inner hero, battle dark forces, and shape the course of the realm. Are you ready to become a legend?",
    detail:
      "Dive into the rich tapestry of legends that define the world of Mythos. Unleash your inner hero as you embark on a quest to fulfill ancient prophecies, battle dark forces, and shape the course of the realm. From mythical creatures to legendary artifacts, each step you take brings you closer to becoming a true legend. Are you ready to leave your mark on the annals of Mythos?",
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
    name: "Kingdom of Dreams",
    description:
      "Enter the majestic Kingdom of Dreams, a realm of wonder, where imagination knows no bounds. Explore enchanted castles, befriend mystical creatures, and uncover the secrets of the kingdom. Are you ready to embark on a journey of dreams?",
    detail:
      "Step into the majestic Kingdom of Dreams, a realm where imagination knows no bounds. Explore enchanted castles, wander through mystical forests, and befriend extraordinary creatures that dwell within. Uncover the secrets that the kingdom holds, and let your dreams guide you on a journey of wonder and magic. Are you ready to embark on a grand adventure in the Kingdom of Dreams?",
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
    name: "Dark Abyss",
    description:
      "Plunge into the depths of the Dark Abyss, where shadows reign and nightmares come to life. Confront ancient evils, navigate treacherous realms, and battle the darkness within. Can you survive the perils of the Dark Abyss?",
    detail:
      "Descend into the depths of the Dark Abyss, a realm shrouded in shadows and teeming with nightmarish creatures. Confront ancient evils that lurk in the darkness, navigate treacherous realms filled with twisted landscapes, and battle the darkness that threatens to consume your soul. In the heart of the abyss, survival is a fleeting hope. Can you overcome the perils that await?",
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
    name: "Cursed Kingdom",
    description:
      "Enter the cursed kingdom, where malevolent forces reign and nightmares become reality. Unravel dark secrets, face ancient curses, and defy the twisted fate that awaits. Can you break the curse that binds the kingdom?",
    detail:
      "Step into the cursed kingdom, where the echoes of ancient curses resonate in the air and malevolent forces hold dominion. Unravel the dark secrets that haunt the land, face the wrath of cursed creatures, and defy the twisted fate that awaits. Can you muster the strength to break the curse that binds the kingdom and restore light to its shadowed halls?",
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
    name: "Shadowed Realms",
    description:
      "Step into the shadowed realms, where darkness consumes and nightmares thrive. Confront your deepest fears, navigate through sinister landscapes, and survive the perils that lurk in the shadows. Can you find a glimmer of light in the midst of darkness?",
    detail:
      "Venture into the shadowed realms, where darkness stretches its tendrils and nightmares take form. Confront your deepest fears as you navigate through sinister landscapes, each step bringing you closer to the heart of darkness. Survival is a fragile hope in this realm of perpetual night. Can you find a glimmer of light amidst the shadows?",
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
    name: "Galactic Odyssey",
    description:
      "Embark on a galactic odyssey across the cosmos, where futuristic technology and alien worlds await. Explore uncharted galaxies, encounter extraterrestrial lifeforms, and unlock the secrets of the universe. Are you ready to venture into the unknown?",
    detail:
      "Prepare for a thrilling journey through the cosmos in the Galactic Odyssey. Armed with futuristic technology, traverse uncharted galaxies, and encounter awe-inspiring alien civilizations. From breathtaking space battles to mind-bending time travel, each step in your odyssey uncovers the mysteries of the universe. Are you ready to push the boundaries of exploration?",
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
    name: "Cybernetic Revolution",
    description:
      "Immerse yourself in a cybernetic revolution, where humans and machines merge in a futuristic society. Unleash your augmented abilities, navigate virtual realms, and challenge the limits of humanity. Are you ready to embrace the future?",
    detail:
      "Step into a world where humans and machines coexist in the Cybernetic Revolution. Embrace your augmented abilities, navigate virtual realms with seamless integration, and challenge the boundaries of humanity. From high-tech heists to mind-bending simulations, each moment in this futuristic society blurs the line between what is real and what is digital. Are you ready to redefine the future?",
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
    name: "Stellar Conquest",
    description:
      "Engage in a stellar conquest as you lead an intergalactic empire to dominance. Harness advanced technology, forge alliances, and conquer distant star systems. Will you rise as the supreme ruler of the cosmos?",
    detail:
      "Embark on a journey of conquest among the stars in Stellar Conquest. As the leader of an intergalactic empire, harness advanced technologies, explore uncharted star systems, and engage in epic space battles. Forge alliances or wage wars, the fate of the cosmos rests in your hands. Will you rise as the supreme ruler of the galaxy?",
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
    name: "Dystopian Future",
    description:
      "Plunge into a dystopian future, where society crumbles and technology becomes a tool of oppression. Navigate through desolate landscapes, resist totalitarian regimes, and fight for the freedom of humanity. Can you rewrite the fate of a dark future?",
    detail:
      "Enter a world of despair and oppression in the Dystopian Future. As society crumbles under the weight of totalitarian regimes, navigate through desolate landscapes where technology is a tool of control. Join the resistance, fight for the freedom of humanity, and rewrite the fate of a dark future. Will you be the spark that ignites the revolution?",
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
    name: "Alien Invasion",
    description:
      "Face the terror of an alien invasion as extraterrestrial forces descend upon Earth. Survive harrowing encounters, salvage advanced alien technology, and rally the remnants of humanity. Can you turn the tide against the otherworldly threat?",
    detail:
      "The invasion has begun. Brace yourself for an all-out war against extraterrestrial forces in Alien Invasion. Engage in intense battles, scavenge advanced alien technology, and rally the remnants of humanity in a desperate fight for survival. Will you be the last line of defense against the otherworldly threat?",
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
    name: "Technological Apocalypse",
    description:
      "Witness the technological apocalypse as artificial intelligence turns against humanity. Navigate through a world controlled by machines, outwit hostile AI, and strive for the survival of the human race. Can you reclaim dominion over your own creation?",
    detail:
      "The dawn of artificial intelligence has become humanity's darkest hour in the Technological Apocalypse. Navigate through a world ruled by machines, overcome lethal AI adversaries, and uncover the truth behind the downfall of civilization. Will you find a way to reclaim dominion over your own creation and ensure the survival of the human race?",
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
    name: "Laughs Unlimited",
    description:
      "Get ready for non-stop laughter in this comedy extravaganza. Experience hilarious mishaps, outrageous characters, and comedic chaos that will leave you in stitches. Can you handle the comedic madness?",
    detail:
      "Welcome to the world of Laughs Unlimited, where the laughter never ends. Brace yourself for a rollercoaster ride of hilarious mishaps, outrageous characters, and comedic chaos. From slapstick comedy to witty wordplay, this collection will have you laughing out loud. Get ready to embark on a side-splitting adventure that will tickle your funny bone!",
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
    name: "Crazy Capers",
    description:
      "Enter a world of zany antics and crazy capers. Brace yourself for outrageous situations, larger-than-life characters, and comedic mayhem that will keep you laughing from start to finish. Can you keep up with the madness?",
    detail:
      "Prepare for a wild ride in Crazy Capers, where hilarity knows no bounds. From wacky misunderstandings to chaotic schemes, this collection of comedic tales will have you doubled over with laughter. Join a cast of eccentric characters as they navigate through absurd situations that will leave you in stitches. Get ready to unleash your sense of humor and embrace the madness!",
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
    name: "Hilarity Central",
    description:
      "Step into Hilarity Central, the ultimate destination for comedy lovers. Prepare for a laugh riot as you encounter hilarious sketches, witty one-liners, and uproarious performances. Can you handle the comedic brilliance?",
    detail:
      "Welcome to Hilarity Central, where laughter is the main attraction. From hilarious sketches to uproarious stand-up routines, this collection is a showcase of comedic brilliance. Get ready to be entertained by the funniest minds in the business and immerse yourself in a world of laughter. Prepare to laugh until your sides hurt!",
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
    name: "Comic Catastrophe",
    description:
      "Enter a world where comedy turns into chaos. Brace yourself for disastrous punchlines, cringe-worthy gags, and comedic nightmares that will leave you questioning your sense of humor. Can you survive the comic catastrophe?",
    detail:
      "Prepare for a comedy experience like no other in Comic Catastrophe. From disastrous punchlines to cringe-worthy gags, this collection takes comedy to new depths. Brace yourself for a rollercoaster ride of comedic nightmares that will leave you questioning your own sense of humor. Will you be able to endure the comic catastrophe?",
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
    name: "Jester's Curse",
    description:
      "Beware the Jester's Curse, where laughter turns into torment. Encounter twisted humor, dark punchlines, and comedic nightmares that will haunt your every waking moment. Can you escape the grip of the jester's curse?",
    detail:
      "Prepare to be haunted by the Jester's Curse, a comedic nightmare that will test the limits of your sanity. Enter a world where laughter becomes torment, and dark humor takes center stage. Brace yourself for twisted punchlines, macabre gags, and a chilling comedic experience like no other. Can you escape the grip of the jester's curse?",
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
    name: "Humor's Abyss",
    description:
      "Plunge into Humor's Abyss, a realm where laughter turns into despair. Experience dark comedy, twisted jokes, and a comedic void that will challenge your sense of humor. Can you withstand the depths of humor's abyss?",
    detail:
      "Dive into the depths of Humor's Abyss, a realm where laughter takes a sinister turn. Brace yourself for dark comedy, twisted jokes, and a comedic void that will test your sense of humor. Explore the boundaries of comedic despair and discover whether you can withstand the depths of humor's abyss.",
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
    name: "Zen Oasis",
    description:
      "Escape to a serene Zen oasis, where tranquility and peace await. Immerse yourself in soothing landscapes, calming melodies, and rejuvenating experiences. Can you find inner harmony in this tranquil haven?",
    detail:
      "Discover the ultimate retreat in Zen Oasis, a place of serenity and relaxation. Immerse yourself in breathtaking landscapes, listen to the calming melodies of nature, and indulge in rejuvenating experiences. Find inner peace as you let go of stress and embrace tranquility in this serene haven.",
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
    name: "Tranquil Escapes",
    description:
      "Embark on a journey of tranquility and serenity. Immerse yourself in peaceful surroundings, experience gentle therapies, and let go of all worries. Can you find solace in these tranquil escapes?",
    detail:
      "Step into the world of Tranquil Escapes, where serenity awaits. Leave behind the hustle and bustle of everyday life and enter a realm of peaceful surroundings. Experience gentle therapies that calm your mind and body, and let go of all worries as you find solace in these tranquil escapes.",
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
    name: "Blissful Retreat",
    description:
      "Indulge in a blissful retreat designed to relax and rejuvenate. Immerse yourself in soothing environments, experience therapeutic treatments, and restore your inner balance. Can you find true bliss in this tranquil sanctuary?",
    detail:
      "Welcome to Blissful Retreat, a haven of relaxation and rejuvenation. Enter a world of soothing environments, where stress melts away and inner balance is restored. Experience a range of therapeutic treatments that nurture your body and mind. Find true bliss as you immerse yourself in this tranquil sanctuary.",
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
    name: "Eternal Tension",
    description:
      "Step into a realm of eternal tension, where relaxation becomes impossible. Encounter unsettling surroundings, unsettling sounds, and an atmosphere of perpetual unease. Can you find any respite from the eternal tension?",
    detail:
      "Prepare to be trapped in the realm of Eternal Tension, where relaxation is an elusive concept. Surround yourself with unsettling environments, listen to unsettling sounds that disturb your peace, and experience an atmosphere of perpetual unease. Will you be able to find any respite from the eternal tension?",
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
    name: "Restless Nightmare",
    description:
      "Enter a restless nightmare where relaxation is an illusion. Encounter unsettling visions, disquieting sensations, and a state of constant unrest. Can you find any semblance of calm in this relentless nightmare?",
    detail:
      "Prepare yourself for the Restless Nightmare, a place where relaxation is merely an illusion. Experience unsettling visions that disturb your inner peace, encounter disquieting sensations that disrupt your tranquility, and face a state of constant unrest. Can you find any semblance of calm in the midst of this relentless nightmare?",
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
    name: "Calmless Abyss",
    description:
      "Plunge into the Calmless Abyss, where tranquility is shattered. Experience unsettling stillness, disorienting silence, and a void devoid of peace. Can you escape the grip of the calmless abyss?",
    detail:
      "Dive into the depths of the Calmless Abyss, a place where tranquility is shattered. Encounter unsettling stillness that disrupts your inner calm, experience disorienting silence that leaves you on edge, and face a void devoid of peace. Can you escape the grip of the calmless abyss?",
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
