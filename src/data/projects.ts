export type Category =
  | "Musées & expositions"
  | "Centres d'interprétation"
  | "Espaces tourisme"
  | "Scénographie temporaire"
  | "Signalétique & graphisme"
  | "Mobilier sur-mesure";

export const CATEGORIES: Category[] = [
  "Musées & expositions",
  "Centres d'interprétation",
  "Espaces tourisme",
  "Scénographie temporaire",
  "Signalétique & graphisme",
  "Mobilier sur-mesure",
];

export interface Project {
  slug: string;
  title: string;
  city: string;
  categories: Category[];
  year: string;
  program: string;
  surface: string;
  status: string;
  intervention: string;
  mission: string;
  thumb: string;
  hero: string;
  gallery: string[];
  excerpt: string;
  context: string;
  response: string;
  matter: string;
  data: { label: string; value: string }[];
  featured?: boolean;
}

const P = "/images/projects";

export const projects: Project[] = [
  {
    slug: "abbaye-beaulieu-en-rouergue",
    title: "Abbaye de Beaulieu-en-Rouergue",
    city: "Ginals (82)",
    categories: ["Musées & expositions"],
    year: "2022",
    program: "Parcours de visite permanent — monument national",
    surface: "Abbaye cistercienne",
    status: "Livré",
    intervention: "Muséographie & scénographie",
    mission: "Conception & réalisation",
    thumb: `${P}/abbaye-beaulieu-en-rouergue-hero.jpg`,
    hero: `${P}/abbaye-beaulieu-en-rouergue-hero.jpg`,
    gallery: [
      `${P}/abbaye-beaulieu-en-rouergue-hero.jpg`,
      `${P}/abbaye-beaulieu-en-rouergue-1.jpg`,
      `${P}/abbaye-beaulieu-en-rouergue-2.jpg`,
      `${P}/abbaye-beaulieu-en-rouergue-3.jpg`,
    ],
    excerpt:
      "Un parcours de visite qui révèle l'architecture cistercienne du XIIIᵉ siècle sans jamais la concurrencer.",
    context:
      "Monument géré par le Centre des monuments nationaux, l'abbaye conjugue architecture gothique et collection d'art contemporain. L'enjeu : donner des clés de lecture au visiteur tout en préservant la puissance nue des espaces.",
    response:
      "La scénographie repose sur un vocabulaire discret et réversible : dispositifs autoportants, graphisme sobre, éclairage rasant. Chaque intervention se retire devant la pierre et laisse respirer les volumes.",
    matter:
      "Matériaux bruts, teintes minérales et contrastes maîtrisés. Le mobilier de médiation dialogue avec la matière du monument sans la masquer.",
    data: [
      { label: "Maître d'ouvrage", value: "Centre des monuments nationaux" },
      { label: "Livraison", value: "2022" },
      { label: "Type", value: "Parcours permanent" },
      { label: "Lieu", value: "Ginals (82)" },
    ],
    featured: true,
  },
  {
    slug: "salon-occitanie-innov-2023",
    title: "Salon Occitanie Innov 2023",
    city: "Toulouse (31)",
    categories: ["Scénographie temporaire", "Mobilier sur-mesure"],
    year: "2023",
    program: "Scénographie événementielle — salon professionnel",
    surface: "Cité de Toulouse",
    status: "Livré",
    intervention: "Scénographie & agencement",
    mission: "Conception & réalisation",
    thumb: `${P}/salon-occitanie-innov-2023-hero.jpg`,
    hero: `${P}/salon-occitanie-innov-2023-hero.jpg`,
    gallery: [
      `${P}/salon-occitanie-innov-2023-hero.jpg`,
      `${P}/salon-occitanie-innov-2023-1.jpg`,
      `${P}/salon-occitanie-innov-2023-2.jpg`,
      `${P}/salon-occitanie-innov-2023-3.jpg`,
    ],
    excerpt:
      "Un événement de l'innovation régionale mis en espace : lisibilité des parcours, identité forte, montage rapide.",
    context:
      "Pour l'agence de développement économique AD'OCC, il s'agissait de scénographier un salon rassemblant start-ups, institutions et grands comptes dans un temps de montage très contraint.",
    response:
      "Un système modulaire structure les îlots thématiques et les zones de rencontre. Le graphisme grand format oriente les flux ; le mobilier sur-mesure combine réemploi et remontabilité.",
    matter:
      "Structures légères, signalétique colorée et matériaux réutilisables. L'ensemble se déploie et se démonte en quelques heures.",
    data: [
      { label: "Maître d'ouvrage", value: "AD'OCC" },
      { label: "Année", value: "2023" },
      { label: "Type", value: "Événementiel" },
      { label: "Lieu", value: "Cité de Toulouse" },
    ],
    featured: true,
  },
  {
    slug: "maison-biodiversite-buzet",
    title: "Maison de la biodiversité",
    city: "Buzet-sur-Tarn (31)",
    categories: ["Centres d'interprétation", "Mobilier sur-mesure"],
    year: "2020",
    program: "Centre d'interprétation — biodiversité",
    surface: "Parcours intérieur & extérieur",
    status: "Livré",
    intervention: "Muséographie sensorielle",
    mission: "Conception & réalisation",
    thumb: `${P}/maison-biodiversite-buzet-hero.jpg`,
    hero: `${P}/maison-biodiversite-buzet-hero.jpg`,
    gallery: [
      `${P}/maison-biodiversite-buzet-hero.jpg`,
      `${P}/maison-biodiversite-buzet-1.jpg`,
      `${P}/maison-biodiversite-buzet-2.jpg`,
      `${P}/maison-biodiversite-buzet-3.jpg`,
    ],
    excerpt:
      "Une scénographie sensorielle et éco-conçue pour sensibiliser petits et grands à la biodiversité locale.",
    context:
      "Pour le Département de la Haute-Garonne, la Maison de la biodiversité devait s'adresser à tous les publics, de la classe primaire au visiteur familial, en intérieur comme en extérieur.",
    response:
      "Le parcours mêle manipulations, dispositifs multimédias ludiques et immersion sensorielle. Une logique d'escape game rythme la visite ; le prolongement extérieur ancre le propos dans le paysage réel.",
    matter:
      "Éco-conception affirmée : matériaux biosourcés, mobilier durable et dispositifs tactiles pensés pour l'usage intensif.",
    data: [
      { label: "Maître d'ouvrage", value: "Département de la Haute-Garonne" },
      { label: "Livraison", value: "2020" },
      { label: "Approche", value: "Éco-conception" },
      { label: "Publics", value: "Tous publics" },
    ],
    featured: true,
  },
  {
    slug: "plongee-au-coeur-des-canyons",
    title: "Plongée au cœur des canyons",
    city: "Marseille (13)",
    categories: ["Musées & expositions", "Scénographie temporaire"],
    year: "2020",
    program: "Exposition immersive itinérante",
    surface: "Format itinérant",
    status: "Livré",
    intervention: "Scénographie immersive & multimédia",
    mission: "Conception & réalisation",
    thumb: `${P}/plongee-au-coeur-des-canyons-hero.jpg`,
    hero: `${P}/plongee-au-coeur-des-canyons-hero.jpg`,
    gallery: [
      `${P}/plongee-au-coeur-des-canyons-hero.jpg`,
      `${P}/plongee-au-coeur-des-canyons-1.jpg`,
      `${P}/plongee-au-coeur-des-canyons-2.jpg`,
      `${P}/plongee-au-coeur-des-canyons-3.jpg`,
    ],
    excerpt:
      "Une immersion audiovisuelle dans les canyons sous-marins, conçue pour voyager de site en site.",
    context:
      "Le Parc national des Calanques souhaitait faire découvrir un patrimoine naturel invisible, situé au large et en profondeur, à travers une exposition capable de circuler sur le territoire.",
    response:
      "La scénographie plonge le visiteur dans un environnement sombre et enveloppant, structuré par la projection et le son. Le dispositif, léger et modulable, se remonte facilement dans des lieux variés.",
    matter:
      "Toiles imprimées, audiovisuel immersif et structures démontables. L'obscurité maîtrisée devient le principal matériau de l'expérience.",
    data: [
      { label: "Maître d'ouvrage", value: "Parc national des Calanques" },
      { label: "Livraison", value: "2020" },
      { label: "Type", value: "Exposition itinérante" },
      { label: "Registre", value: "Immersif" },
    ],
    featured: true,
  },
  {
    slug: "musee-histoire-marseille-canal-de-suez",
    title: "Le canal de Suez — Musée d'Histoire",
    city: "Marseille (13)",
    categories: ["Musées & expositions", "Scénographie temporaire"],
    year: "2018",
    program: "Exposition temporaire — musée d'Histoire",
    surface: "Salle d'exposition temporaire",
    status: "Livré",
    intervention: "Scénographie d'exposition",
    mission: "Conception & réalisation",
    thumb: `${P}/musee-histoire-marseille-canal-de-suez-hero.jpg`,
    hero: `${P}/musee-histoire-marseille-canal-de-suez-hero.jpg`,
    gallery: [
      `${P}/musee-histoire-marseille-canal-de-suez-hero.jpg`,
      `${P}/musee-histoire-marseille-canal-de-suez-1.jpg`,
      `${P}/musee-histoire-marseille-canal-de-suez-2.jpg`,
      `${P}/musee-histoire-marseille-canal-de-suez-3.jpg`,
    ],
    excerpt:
      "Une traversée historique et géopolitique du canal de Suez, entre récit documentaire et pièces de collection.",
    context:
      "Le Musée d'Histoire de Marseille consacrait une exposition temporaire à l'histoire du canal de Suez, de son percement à ses enjeux contemporains, à partir d'un fonds documentaire riche.",
    response:
      "La scénographie articule séquences narratives et mise en valeur des œuvres. Cimaises, vitrines et graphisme conduisent le visiteur le long d'un fil chronologique clair et sensible.",
    matter:
      "Vitrines sur-mesure, tirages grand format et jeux de lumière au service des documents fragiles.",
    data: [
      { label: "Maître d'ouvrage", value: "Ville de Marseille" },
      { label: "Année", value: "2018" },
      { label: "Type", value: "Exposition temporaire" },
      { label: "Registre", value: "Histoire" },
    ],
  },
  {
    slug: "gare-robert-doisneau",
    title: "Gare Robert Doisneau",
    city: "Carlux (24)",
    categories: ["Centres d'interprétation", "Espaces tourisme"],
    year: "2018",
    program: "Espace d'interprétation & lieu de visite",
    surface: "Ancienne gare réhabilitée",
    status: "Livré",
    intervention: "Muséographie & scénographie",
    mission: "Conception & réalisation",
    thumb: `${P}/gare-robert-doisneau-hero.jpg`,
    hero: `${P}/gare-robert-doisneau-hero.jpg`,
    gallery: [
      `${P}/gare-robert-doisneau-hero.jpg`,
      `${P}/gare-robert-doisneau-1.jpg`,
      `${P}/gare-robert-doisneau-2.jpg`,
      `${P}/gare-robert-doisneau-3.jpg`,
    ],
    excerpt:
      "Une ancienne gare transformée en lieu de découverte autour de l'œuvre photographique de Robert Doisneau.",
    context:
      "La Communauté de communes du Pays de Fénelon a réhabilité la gare de Carlux pour en faire un équipement culturel et touristique dédié à la photographie humaniste.",
    response:
      "Le parcours joue de l'esprit du lieu ferroviaire pour raconter le regard du photographe. Cadrages, agrandissements et dispositifs de médiation guident une lecture émouvante de l'image.",
    matter:
      "Grands tirages, mobilier évoquant l'univers de la gare et éclairage soigné des photographies.",
    data: [
      { label: "Maître d'ouvrage", value: "CC Pays de Fénelon" },
      { label: "Livraison", value: "2018" },
      { label: "Type", value: "Espace d'interprétation" },
      { label: "Thème", value: "Photographie" },
    ],
    featured: true,
  },
  {
    slug: "chateau-de-foix",
    title: "Château de Foix",
    city: "Foix (09)",
    categories: ["Musées & expositions", "Espaces tourisme"],
    year: "2018",
    program: "Parcours de visite — monument historique",
    surface: "2 000 m²",
    status: "Livré",
    intervention: "Muséographie & scénographie",
    mission: "Conception & réalisation",
    thumb: `${P}/chateau-de-foix-hero.jpg`,
    hero: `${P}/chateau-de-foix-hero.jpg`,
    gallery: [
      `${P}/chateau-de-foix-hero.jpg`,
      `${P}/chateau-de-foix-1.jpg`,
      `${P}/chateau-de-foix-2.jpg`,
      `${P}/chateau-de-foix-3.jpg`,
    ],
    excerpt:
      "Un parcours immersif dans le château comtal, du corps de garde à la salle d'armes, au fil de mille ans d'histoire.",
    context:
      "Le Département de l'Ariège a repensé la visite du château de Foix, forteresse médiévale emblématique, pour en faire une expérience vivante à l'échelle de ses 2 000 m².",
    response:
      "La scénographie séquence la visite en tableaux successifs : reconstitutions, dispositifs sensoriels et médiation multimédia font revivre le quotidien médiéval sans dénaturer la pierre.",
    matter:
      "Mobilier robuste, reconstitutions et audiovisuel intégrés à l'architecture défensive du monument.",
    data: [
      { label: "Maître d'ouvrage", value: "Département de l'Ariège" },
      { label: "Surface", value: "2 000 m²" },
      { label: "Livraison", value: "2018" },
      { label: "Type", value: "Parcours permanent" },
    ],
    featured: true,
  },
  {
    slug: "office-tourisme-grand-tourmalet",
    title: "Office de tourisme Grand Tourmalet",
    city: "Bagnères-de-Bigorre (65)",
    categories: ["Espaces tourisme", "Mobilier sur-mesure"],
    year: "2018",
    program: "Aménagement d'accueil touristique",
    surface: "Espace d'accueil",
    status: "Livré",
    intervention: "Agencement & signalétique",
    mission: "Conception & réalisation",
    thumb: `${P}/office-tourisme-grand-tourmalet-hero.jpg`,
    hero: `${P}/office-tourisme-grand-tourmalet-hero.jpg`,
    gallery: [
      `${P}/office-tourisme-grand-tourmalet-hero.jpg`,
      `${P}/office-tourisme-grand-tourmalet-1.jpg`,
      `${P}/office-tourisme-grand-tourmalet-2.jpg`,
      `${P}/office-tourisme-grand-tourmalet-3.jpg`,
    ],
    excerpt:
      "Un espace d'accueil qui met en désir la destination montagne dès le premier regard.",
    context:
      "L'office de tourisme du Grand Tourmalet souhaitait un lieu d'accueil chaleureux, fonctionnel et identitaire, à la hauteur de l'un des sites pyrénéens les plus fréquentés.",
    response:
      "Le comptoir, la signalétique et les espaces d'information sont conçus comme un ensemble cohérent. Le mobilier sur-mesure fluidifie l'accueil et scénarise la découverte du territoire.",
    matter:
      "Bois, teintes montagne et grandes images de paysage. L'agencement conjugue confort d'accueil et robustesse d'usage.",
    data: [
      { label: "Maître d'ouvrage", value: "OT Grand Tourmalet" },
      { label: "Livraison", value: "2018" },
      { label: "Type", value: "Espace tourisme" },
      { label: "Lieu", value: "Bagnères-de-Bigorre" },
    ],
  },
  {
    slug: "mediatheque-chalucet-toulon",
    title: "Médiathèque Chalucet",
    city: "Toulon (83)",
    categories: ["Signalétique & graphisme"],
    year: "2020",
    program: "Signalétique culturelle & directionnelle",
    surface: "Équipement culturel",
    status: "Livré",
    intervention: "Signalétique & graphisme",
    mission: "Conception & réalisation",
    thumb: `${P}/mediatheque-chalucet-toulon-hero.jpg`,
    hero: `${P}/mediatheque-chalucet-toulon-hero.jpg`,
    gallery: [
      `${P}/mediatheque-chalucet-toulon-hero.jpg`,
      `${P}/mediatheque-chalucet-toulon-1.jpg`,
      `${P}/mediatheque-chalucet-toulon-2.jpg`,
      `${P}/mediatheque-chalucet-toulon-3.jpg`,
    ],
    excerpt:
      "Une signalétique graphique qui oriente, identifie et donne une voix à la médiathèque.",
    context:
      "La Ville de Toulon voulait doter sa médiathèque Chalucet d'une signalétique claire, à la fois directionnelle et culturelle, en cohérence avec l'architecture contemporaine du bâtiment.",
    response:
      "Un système graphique complet articule orientation, identification des espaces et messages de médiation. La typographie et la couleur deviennent des repères pour tous les publics.",
    matter:
      "Typographie affirmée, aplats de couleur et supports intégrés à l'architecture, pensés pour l'accessibilité.",
    data: [
      { label: "Maître d'ouvrage", value: "Ville de Toulon" },
      { label: "Livraison", value: "2020" },
      { label: "Type", value: "Signalétique" },
      { label: "Lieu", value: "Médiathèque Chalucet" },
    ],
  },
  {
    slug: "la-mouniere-septfonds",
    title: "La Mounière",
    city: "Septfonds (82)",
    categories: ["Centres d'interprétation"],
    year: "2017",
    program: "Centre d'interprétation — mémoire locale",
    surface: "Lieu de mémoire",
    status: "Livré",
    intervention: "Muséographie & scénographie",
    mission: "Conception & réalisation",
    thumb: `${P}/la-mouniere-septfonds-hero.jpg`,
    hero: `${P}/la-mouniere-septfonds-hero.jpg`,
    gallery: [
      `${P}/la-mouniere-septfonds-hero.jpg`,
      `${P}/la-mouniere-septfonds-1.jpg`,
      `${P}/la-mouniere-septfonds-2.jpg`,
      `${P}/la-mouniere-septfonds-3.jpg`,
    ],
    excerpt:
      "Un lieu de mémoire qui transmet l'histoire locale avec justesse et émotion.",
    context:
      "La commune de Septfonds a souhaité valoriser la mémoire de son territoire à travers un espace d'interprétation accessible et sensible.",
    response:
      "La scénographie tisse récits, objets et documents pour restituer une histoire humaine. Le parcours privilégie la sobriété et la place accordée au témoignage.",
    matter:
      "Mobilier sobre, tirages documentaires et dispositifs de médiation à hauteur du visiteur.",
    data: [
      { label: "Maître d'ouvrage", value: "Ville de Septfonds" },
      { label: "Livraison", value: "2017" },
      { label: "Type", value: "Centre d'interprétation" },
      { label: "Registre", value: "Mémoire" },
    ],
  },
  {
    slug: "centre-histoire-resistance-deportation-ariege",
    title: "Centre d'Histoire de la Résistance et de la Déportation",
    city: "Varilhes (09)",
    categories: ["Musées & expositions", "Centres d'interprétation"],
    year: "2016",
    program: "Musée de mémoire",
    surface: "Espace muséal",
    status: "Livré",
    intervention: "Muséographie & scénographie",
    mission: "Conception & réalisation",
    thumb: `${P}/centre-histoire-resistance-deportation-ariege-hero.jpg`,
    hero: `${P}/centre-histoire-resistance-deportation-ariege-hero.jpg`,
    gallery: [
      `${P}/centre-histoire-resistance-deportation-ariege-hero.jpg`,
      `${P}/centre-histoire-resistance-deportation-ariege-1.jpg`,
      `${P}/centre-histoire-resistance-deportation-ariege-2.jpg`,
      `${P}/centre-histoire-resistance-deportation-ariege-3.jpg`,
    ],
    excerpt:
      "Un parcours de mémoire grave et digne, dédié à la Résistance et à la Déportation en Ariège.",
    context:
      "Le canton de Varilhes portait un projet muséal sensible, à la responsabilité mémorielle forte, destiné à transmettre l'histoire de la Résistance et de la Déportation aux nouvelles générations.",
    response:
      "La scénographie adopte un ton sobre et recueilli. La lumière, le rythme des séquences et la place du document construisent un récit respectueux, propice à la transmission scolaire.",
    matter:
      "Palette sombre, lumière contrôlée et vitrines protectrices pour des documents et objets de collection fragiles.",
    data: [
      { label: "Maître d'ouvrage", value: "Canton de Varilhes" },
      { label: "Livraison", value: "2016" },
      { label: "Type", value: "Musée de mémoire" },
      { label: "Registre", value: "Histoire" },
    ],
  },
  {
    slug: "cartes-sur-table-albi",
    title: "Cartes sur table",
    city: "Albi (81)",
    categories: ["Scénographie temporaire", "Musées & expositions"],
    year: "2016",
    program: "Exposition temporaire",
    surface: "Salle d'exposition",
    status: "Livré",
    intervention: "Scénographie d'exposition",
    mission: "Conception & réalisation",
    thumb: `${P}/cartes-sur-table-albi-hero.jpg`,
    hero: `${P}/cartes-sur-table-albi-hero.jpg`,
    gallery: [
      `${P}/cartes-sur-table-albi-hero.jpg`,
      `${P}/cartes-sur-table-albi-1.jpg`,
      `${P}/cartes-sur-table-albi-2.jpg`,
      `${P}/cartes-sur-table-albi-3.jpg`,
    ],
    excerpt:
      "Une exposition temporaire vivante, qui invite le visiteur à manipuler, comparer et comprendre.",
    context:
      "Pour l'agglomération d'Albi, cette exposition temporaire devait rendre un sujet documentaire accessible et attractif, dans une logique de médiation active.",
    response:
      "La scénographie mise sur l'interaction : tables de consultation, dispositifs manipulables et graphisme pédagogique rythment un parcours ludique et informé.",
    matter:
      "Mobilier de manipulation, cartographie grand format et graphisme didactique au cœur du dispositif.",
    data: [
      { label: "Maître d'ouvrage", value: "Agglomération d'Albi" },
      { label: "Année", value: "2016" },
      { label: "Type", value: "Exposition temporaire" },
      { label: "Registre", value: "Médiation" },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
