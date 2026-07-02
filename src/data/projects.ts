export type Category =
  | "Établissements scolaires"
  | "Édifices publics"
  | "Tertiaire & commerces"
  | "Industrie"
  | "Santé"
  | "Résidentiel"
  | "Design d'intérieur"
  | "Bâtiments sportifs";

export const CATEGORIES: Category[] = [
  "Établissements scolaires",
  "Édifices publics",
  "Tertiaire & commerces",
  "Industrie",
  "Santé",
  "Résidentiel",
  "Design d'intérieur",
  "Bâtiments sportifs",
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
    slug: "atirro-centre-de-dialyse-olivet",
    title: "Centre de dialyse ATIRRO",
    city: "Olivet (45)",
    categories: ["Santé"],
    year: "2024",
    program: "Établissement de santé — unité de dialyse",
    surface: "1 850 m²",
    status: "Livré",
    intervention: "Construction neuve",
    mission: "Mission complète",
    thumb: `${P}/atirro.jpeg`,
    hero: `${P}/atirro-full.jpeg`,
    gallery: [`${P}/atirro-full.jpeg`, `${P}/atirro.jpeg`],
    excerpt:
      "Un lieu de soin apaisé, où la lumière naturelle et les vues sur le paysage accompagnent le temps long du traitement.",
    context:
      "La dialyse impose des séances longues et répétées. Le projet répond à cette réalité par une architecture attentive au confort du patient et à l'ergonomie des équipes soignantes, sur un terrain contraint en périphérie d'Olivet.",
    response:
      "Le plan s'organise autour d'un cœur technique clair, desservant des salles baignées de lumière naturelle. Les circulations sont lisibles, les vues cadrées sur le végétal, et l'ambiance intérieure vise l'apaisement plutôt que la neutralité hospitalière.",
    matter:
      "Teintes minérales, bois clair, lumière tamisée et contrôlée. Les matériaux ont été choisis pour leur pérennité, leur facilité d'entretien et leur douceur perçue.",
    data: [
      { label: "Surface", value: "1 850 m²" },
      { label: "Livraison", value: "2024" },
      { label: "Postes de soin", value: "24" },
      { label: "Performance", value: "RE2020" },
    ],
    featured: true,
  },
  {
    slug: "john-deere-renovation-energetique-fleury",
    title: "John Deere — Rénovation énergétique",
    city: "Fleury-les-Aubrais (45)",
    categories: ["Industrie", "Tertiaire & commerces"],
    year: "2024",
    program: "Réhabilitation tertiaire et industrielle",
    surface: "4 200 m²",
    status: "Livré",
    intervention: "Réhabilitation — ITE",
    mission: "Conception & suivi de travaux",
    thumb: `${P}/john-deere.jpeg`,
    hero: `${P}/john-deere-full.jpeg`,
    gallery: [`${P}/john-deere-full.jpeg`, `${P}/john-deere.jpeg`],
    excerpt:
      "Une isolation thermique par l'extérieur qui redessine l'identité du bâtiment tout en réduisant ses consommations.",
    context:
      "Le bâtiment existant présentait une enveloppe énergivore et une image vieillissante. L'enjeu : améliorer sensiblement la performance thermique sans interrompre l'activité du site.",
    response:
      "L'isolation par l'extérieur devient un projet architectural à part entière. Le nouveau bardage recompose les proportions, affirme les entrées et modernise l'image de l'entreprise dans une écriture sobre et industrielle.",
    matter:
      "Bardage métallique, calepinage maîtrisé, jeux de reliefs et de teintes sombres. La matière technique est mise au service d'une cohérence d'ensemble.",
    data: [
      { label: "Surface", value: "4 200 m²" },
      { label: "Intervention", value: "ITE" },
      { label: "Gain énergétique", value: "≈ 45 %" },
      { label: "Site", value: "En activité" },
    ],
    featured: true,
  },
  {
    slug: "bureaux-region-centre-val-de-loire-orleans",
    title: "Bureaux Région Centre-Val de Loire",
    city: "Orléans (45)",
    categories: ["Design d'intérieur", "Tertiaire & commerces"],
    year: "2023",
    program: "Aménagement d'espaces tertiaires",
    surface: "2 600 m²",
    status: "Livré",
    intervention: "Aménagement intérieur",
    mission: "Design d'intérieur & mobilier",
    thumb: `${P}/bureaux-region.jpeg`,
    hero: `${P}/bureaux-region-full.jpeg`,
    gallery: [`${P}/bureaux-region-full.jpeg`, `${P}/bureaux-region.jpeg`],
    excerpt:
      "Des espaces de travail pensés pour l'usage, l'échange et le confort, entre rigueur institutionnelle et hospitalité.",
    context:
      "Repenser des plateaux de bureaux pour accompagner de nouveaux modes de travail : espaces partagés, zones de concentration, lieux informels de rencontre.",
    response:
      "Le design d'intérieur module la lumière, les matières et le mobilier pour créer une variété d'ambiances. Les circulations deviennent des lieux, les espaces de détente structurent la vie collective.",
    matter:
      "Bois chaleureux, textiles acoustiques, teintes naturelles et touches végétales. Le confort perçu prime, sans renoncer à la lisibilité institutionnelle.",
    data: [
      { label: "Surface", value: "2 600 m²" },
      { label: "Livraison", value: "2023" },
      { label: "Mission", value: "Design intérieur" },
      { label: "Usage", value: "Tertiaire" },
    ],
    featured: true,
  },
  {
    slug: "lycee-adrienne-bolland-chateauneuf-5",
    title: "Lycée Adrienne Bolland",
    city: "Châteauneuf-sur-Loire (45)",
    categories: ["Établissements scolaires", "Édifices publics"],
    year: "2024",
    program: "Établissement d'enseignement",
    surface: "9 400 m²",
    status: "Livré",
    intervention: "Construction & extension",
    mission: "Mission complète",
    thumb: `${P}/lycee-bolland.jpg`,
    hero: `${P}/lycee-bolland-full.jpg`,
    gallery: [`${P}/lycee-bolland-full.jpg`, `${P}/lycee-bolland-2.jpg`],
    excerpt:
      "Un établissement lumineux et généreux, où l'architecture soutient la vie scolaire et le rapport au paysage ligérien.",
    context:
      "Concevoir un lycée à l'échelle du territoire, en dialogue avec le paysage de Loire, capable d'accueillir dans de bonnes conditions élèves et personnels.",
    response:
      "Les volumes s'articulent autour de patios et de circulations largement éclairées. La compacité sert la performance énergétique ; les espaces communs favorisent les rencontres et l'appropriation.",
    matter:
      "Béton clair, bois, grandes baies et brise-soleil. La matière structure les usages et régule la lumière au fil des saisons.",
    data: [
      { label: "Surface", value: "9 400 m²" },
      { label: "Livraison", value: "2024" },
      { label: "Maîtrise d'ouvrage", value: "Région CVL" },
      { label: "Performance", value: "BBC" },
    ],
    featured: true,
  },
  {
    slug: "groupe-scolaire-jules-ferry-vendome",
    title: "Groupe scolaire Jules Ferry",
    city: "Vendôme (41)",
    categories: ["Établissements scolaires", "Édifices publics"],
    year: "2022",
    program: "Groupe scolaire maternelle & élémentaire",
    surface: "3 100 m²",
    status: "Livré",
    intervention: "Restructuration & extension",
    mission: "Mission complète",
    thumb: `${P}/jules-ferry.jpeg`,
    hero: `${P}/jules-ferry-full.jpeg`,
    gallery: [`${P}/jules-ferry-full.jpeg`, `${P}/jules-ferry.jpeg`],
    excerpt:
      "Une école à hauteur d'enfant, claire et rassurante, ouverte sur ses cours et son environnement.",
    context:
      "Adapter un groupe scolaire existant aux besoins contemporains : accessibilité, confort thermique, qualité des espaces d'apprentissage et de récréation.",
    response:
      "Les extensions dialoguent avec l'existant par des volumes simples et des seuils protégés. La lumière naturelle et les couleurs douces qualifient les salles et les circulations.",
    matter:
      "Enduits clairs, menuiseries généreuses, préaux et matières chaleureuses adaptées à l'usage intensif d'une école.",
    data: [
      { label: "Surface", value: "3 100 m²" },
      { label: "Livraison", value: "2022" },
      { label: "Cycles", value: "Maternelle & élémentaire" },
      { label: "Ville", value: "Vendôme" },
    ],
  },
  {
    slug: "groupe-scolaire-anatole-france-vendome",
    title: "Groupe scolaire Anatole France",
    city: "Vendôme (41)",
    categories: ["Établissements scolaires", "Édifices publics"],
    year: "2023",
    program: "Groupe scolaire",
    surface: "2 750 m²",
    status: "Livré",
    intervention: "Réhabilitation",
    mission: "Mission complète",
    thumb: `${P}/anatole-france.jpeg`,
    hero: `${P}/anatole-france-full.jpeg`,
    gallery: [`${P}/anatole-france-full.jpeg`, `${P}/anatole-france.jpeg`],
    excerpt:
      "La réhabilitation d'une école patrimoniale, entre respect de l'existant et confort contemporain.",
    context:
      "Un bâtiment scolaire ancien à préserver et à mettre aux normes, sans effacer son caractère ni sa mémoire.",
    response:
      "Le projet révèle les qualités de l'existant, améliore l'enveloppe et redistribue les usages. L'entrée requalifiée affirme une identité claire et accueillante.",
    matter:
      "Pierre et enduits d'origine préservés, interventions contemporaines lisibles, lumière retravaillée.",
    data: [
      { label: "Surface", value: "2 750 m²" },
      { label: "Livraison", value: "2023" },
      { label: "Intervention", value: "Réhabilitation" },
      { label: "Ville", value: "Vendôme" },
    ],
  },
  {
    slug: "chocolaterie-jeanne-darc-orleans",
    title: "Chocolaterie Jeanne d'Arc",
    city: "Orléans (45)",
    categories: ["Design d'intérieur", "Tertiaire & commerces"],
    year: "2024",
    program: "Boutique & atelier — commerce",
    surface: "320 m²",
    status: "Livré",
    intervention: "Aménagement intérieur",
    mission: "Design d'intérieur",
    thumb: `${P}/chocolaterie.jpeg`,
    hero: `${P}/chocolaterie-full.jpeg`,
    gallery: [`${P}/chocolaterie-full.jpeg`, `${P}/chocolaterie.jpeg`],
    excerpt:
      "Un écrin gourmand où la matière et la lumière subliment le geste artisanal et le produit.",
    context:
      "Donner à une maison chocolatière un lieu à la hauteur de son savoir-faire, entre théâtralité de la vitrine et intimité de la dégustation.",
    response:
      "La scénographie intérieure hiérarchise les regards : mise en scène du produit, comptoir généreux, matières nobles. L'atelier visible raconte le métier.",
    matter:
      "Bois sombre, laiton, éclairage précis et surfaces minérales. Chaque détail sert la perception du produit.",
    data: [
      { label: "Surface", value: "320 m²" },
      { label: "Livraison", value: "2024" },
      { label: "Mission", value: "Design intérieur" },
      { label: "Usage", value: "Commerce" },
    ],
  },
  {
    slug: "boulangerie-guepin-montoire",
    title: "Boulangerie Guépin",
    city: "Montoire-sur-le-Loir (41)",
    categories: ["Tertiaire & commerces"],
    year: "2023",
    program: "Boulangerie — commerce de proximité",
    surface: "410 m²",
    status: "Livré",
    intervention: "Construction neuve",
    mission: "Mission complète",
    thumb: `${P}/boulangerie.jpg`,
    hero: `${P}/boulangerie-full.jpg`,
    gallery: [`${P}/boulangerie-full.jpg`, `${P}/boulangerie.jpg`],
    excerpt:
      "Un commerce de proximité lisible et accueillant, pensé pour le flux, la lumière et le fournil.",
    context:
      "Implanter une boulangerie neuve, visible et fonctionnelle, articulant espace de vente, fournil et stationnement.",
    response:
      "Le volume simple et affirmé signale l'activité. La façade travaille la transparence vers la vente ; le fournil bénéficie d'une organisation rationnelle.",
    matter:
      "Façade claire, grandes vitrines, auvent protecteur. L'architecture reste sobre au service de l'usage commercial.",
    data: [
      { label: "Surface", value: "410 m²" },
      { label: "Livraison", value: "2023" },
      { label: "Intervention", value: "Neuf" },
      { label: "Usage", value: "Commerce" },
    ],
  },
  {
    slug: "college-la-croix-saint-marceau-orleans",
    title: "Collège La Croix Saint-Marceau",
    city: "Orléans (45)",
    categories: ["Établissements scolaires", "Édifices publics"],
    year: "2025",
    program: "Collège",
    surface: "6 800 m²",
    status: "En chantier",
    intervention: "Restructuration lourde",
    mission: "Mission complète",
    thumb: `${P}/college-croix.jpeg`,
    hero: `${P}/college-croix-full.jpeg`,
    gallery: [`${P}/college-croix-full.jpeg`, `${P}/college-croix.jpeg`],
    excerpt:
      "La transformation d'un collège en site occupé, au service du confort d'usage et de la performance énergétique.",
    context:
      "Restructurer un collège tout en maintenant la continuité pédagogique. Un chantier phasé, complexe, en milieu occupé.",
    response:
      "Le projet clarifie les entrées, requalifie les espaces communs et améliore fortement l'enveloppe. La maquette numérique sécurise le phasage et la coordination.",
    matter:
      "Interventions contemporaines sur bâti existant, matières durables, apports de lumière naturelle.",
    data: [
      { label: "Surface", value: "6 800 m²" },
      { label: "Statut", value: "En chantier" },
      { label: "Chantier", value: "Site occupé" },
      { label: "Ville", value: "Orléans" },
    ],
  },
  {
    slug: "lycee-adrienne-bolland-chateauneuf-2",
    title: "Lycée Adrienne Bolland — Phase 2",
    city: "Châteauneuf-sur-Loire (45)",
    categories: ["Établissements scolaires", "Édifices publics"],
    year: "2023",
    program: "Établissement d'enseignement",
    surface: "3 200 m²",
    status: "Livré",
    intervention: "Extension",
    mission: "Mission complète",
    thumb: `${P}/lycee-bolland-2.jpg`,
    hero: `${P}/lycee-bolland-2.jpg`,
    gallery: [`${P}/lycee-bolland-2.jpg`, `${P}/lycee-bolland.jpg`],
    excerpt:
      "Une extension qui prolonge l'écriture du lycée et enrichit ses espaces d'enseignement.",
    context:
      "Compléter l'établissement par de nouveaux espaces, en cohérence avec l'existant et son cadre paysager.",
    response:
      "L'extension reprend les principes de compacité et de lumière du projet initial, et affirme une continuité architecturale claire.",
    matter:
      "Béton clair, bois et grandes baies, dans la lignée des matériaux du site.",
    data: [
      { label: "Surface", value: "3 200 m²" },
      { label: "Livraison", value: "2023" },
      { label: "Intervention", value: "Extension" },
      { label: "Performance", value: "BBC" },
    ],
  },
  {
    slug: "alsh-bazoches-les-gallerandes",
    title: "ALSH Bazoches-les-Gallerandes",
    city: "Bazoches-les-Gallerandes (45)",
    categories: ["Édifices publics", "Établissements scolaires"],
    year: "2024",
    program: "Accueil de loisirs sans hébergement",
    surface: "980 m²",
    status: "Livré",
    intervention: "Construction neuve",
    mission: "Mission complète",
    thumb: `${P}/alsh-bazoches.jpg`,
    hero: `${P}/alsh-bazoches-full.jpg`,
    gallery: [`${P}/alsh-bazoches-full.jpg`, `${P}/alsh-bazoches.jpg`],
    excerpt:
      "Un équipement pour l'enfance, chaleureux et ouvert, en lien direct avec l'extérieur.",
    context:
      "Offrir un lieu d'accueil de loisirs adapté aux enfants, sûr, lumineux et facile à vivre pour les équipes d'animation.",
    response:
      "Un bâtiment de plain-pied, à l'échelle de l'enfant, largement ouvert sur des espaces extérieurs protégés. La construction privilégie des matériaux sains.",
    matter:
      "Construction bois, teintes naturelles, prolongements extérieurs abrités.",
    data: [
      { label: "Surface", value: "980 m²" },
      { label: "Livraison", value: "2024" },
      { label: "Structure", value: "Bois" },
      { label: "Usage", value: "Enfance" },
    ],
  },
  {
    slug: "groupe-scolaire-clos-beauvoys-pithiviers",
    title: "Groupe scolaire du Clos Beauvoys",
    city: "Pithiviers (45)",
    categories: ["Établissements scolaires", "Édifices publics"],
    year: "2025",
    program: "Groupe scolaire",
    surface: "3 900 m²",
    status: "En chantier",
    intervention: "Construction neuve",
    mission: "Mission complète",
    thumb: `${P}/clos-beauvoys.jpg`,
    hero: `${P}/clos-beauvoys-full.jpg`,
    gallery: [`${P}/clos-beauvoys-full.jpg`, `${P}/clos-beauvoys.jpg`],
    excerpt:
      "Un groupe scolaire neuf, sobre et durable, conçu autour du confort d'apprentissage.",
    context:
      "Créer une école contemporaine répondant aux enjeux énergétiques actuels et aux besoins pédagogiques d'aujourd'hui.",
    response:
      "Organisation claire autour de cours et de préaux, apports solaires maîtrisés, ventilation naturelle et matériaux durables structurent le projet.",
    matter:
      "Bois, béton bas carbone et protections solaires. Le confort d'été comme le confort d'hiver sont travaillés dès la conception.",
    data: [
      { label: "Surface", value: "3 900 m²" },
      { label: "Statut", value: "En chantier" },
      { label: "Approche", value: "Bas carbone" },
      { label: "Ville", value: "Pithiviers" },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
