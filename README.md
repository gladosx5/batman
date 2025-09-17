# Batman Gotham 3D Animation + Gotham Streat Restaurant

Une expérience web immersive unique combinant une animation 3D spectaculaire du logo Batman émergeant de la skyline de Gotham City, suivie d'un site web complet pour le restaurant "Gotham Streat". L'animation est entièrement contrôlée par le scroll et révèle progressivement le site web du restaurant.

## 🦇 Vue d'ensemble du projet

Le projet se compose de **deux parties principales** :

1. **Animation Batman 3D** : Une scène fixe en plein écran avec le logo Batman qui émerge de la ville de Gotham
2. **Site web Gotham Streat** : Un site web complet de restaurant avec thème Batman/Gotham

### Flux utilisateur complet :
1. L'utilisateur arrive sur une scène Gotham City en plein écran
2. En scrollant, le logo Batman émerge progressivement des toits
3. Le logo grossit et devient lumineux
4. La scène entière monte vers le haut pour révéler le site web du restaurant
5. L'utilisateur peut naviguer normalement sur le site web

## 🎨 Design et Thématique

### Palette de couleurs principale :
```css
:root {
  /* Couleurs principales du site restaurant */
  --bg: #0A0A0A;           /* Noir profond - arrière-plan principal */
  --panel: #141414;        /* Gris très foncé - panneaux et cartes */
  --accent: #FFD600;       /* Jaune Batman - couleur principale */
  --accent-2: #00E5FF;     /* Cyan électrique - couleur secondaire */
  --danger: #B22222;       /* Rouge foncé - allergènes */
  --muted: #BDBDBD;        /* Gris moyen - textes secondaires */
  --text: #EAEAEA;         /* Blanc cassé - textes principaux */
  
  /* Couleurs pour l'animation Gotham */
  --gotham-bg: #1f1f1f;    /* Arrière-plan de la scène */
  --gotham-gradient: linear-gradient(315deg, #0cbaba 0%, #380036 74%);
  --moon-glow: #6493a9;    /* Halo de la lune */
  --building-dark: #0f0323; /* Couleur des bâtiments */
}
```

### Typographies utilisées :
```css
/* Fonts importées depuis Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue:wght@400&family=Orbitron:wght@400;700;900&family=Montserrat:wght@300;400;500;600;700&display=swap');

/* Usage des fonts */
- 'Bebas Neue' : Titres principaux, logo (style industriel/urbain)
- 'Orbitron' : Éléments tech/futuristes, boutons, badges
- 'Montserrat' : Texte courant, navigation (lisibilité)
```

## 🏗️ Architecture du projet

### Structure des fichiers :
```
src/
├── App.tsx                 # Composant principal
├── main.tsx               # Point d'entrée React
├── index.css              # Styles Tailwind de base
├── components/
│   ├── GothamScene.tsx    # Scène d'animation Batman
│   ├── BatmanLogo.tsx     # Logo Batman animé
│   ├── ScrollIndicator.tsx # Indicateur de scroll
│   ├── FoodWebsite.tsx    # Site web du restaurant
│   └── MenuModal.tsx      # Modal détaillée des plats
├── hooks/
│   └── useScrollAnimation.ts # Hook pour animations GSAP
└── styles/
    ├── animations.css     # Styles de l'animation Batman
    └── food-website.css   # Styles du site restaurant
```

## 🎬 Animation Batman - Fonctionnement détaillé

### Phase 1 : État initial
```css
/* Logo Batman au démarrage */
.batman-logo {
  scale: 0.1;              /* Très petit */
  y: 250px;                /* Caché derrière les toits */
  opacity: 0.6;            /* Peu visible */
  zIndex: 2;               /* Derrière les bâtiments */
}
```

### Phase 2 : Animation du logo (0-800px de scroll)
```javascript
// Progression du scroll pour l'animation du logo
const maxLogoScroll = isMobile ? 400 : 800;
const progress = Math.min(scrollProgress / maxLogoScroll, 1);

// Courbes d'animation
const moveProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
const zoomProgress = progress > 0.3 ? Math.pow((progress - 0.3) / 0.7, 2) : 0;

// Transformations appliquées
const yPosition = 250 - (moveProgress * 300);  // De 250px à -50px
const scale = 0.1 + (zoomProgress * 3.9);      // De 0.1 à 4.0 (zoom x40)
const opacity = 0.6 + (moveProgress * 0.4);    // De 0.6 à 1.0
const glowIntensity = zoomProgress * 40;        // Effet de glow progressif
```

### Phase 3 : Animation de la scène (800-1200px de scroll)
```javascript
// La scène entière monte pour révéler le site web
const maxSceneScroll = isMobile ? 800 : 1200;
const sceneProgressNormalized = Math.min(Math.max(sceneProgress / maxSceneScroll, 0), 1);
const translateY = -sceneProgressNormalized * 100; // Monte de 0 à -100vh
```

### Contrôles d'interaction :
- **Molette de souris** : Scroll principal (sensibilité x1.5)
- **Touch mobile** : Swipe vertical (sensibilité x2)
- **Clavier** : Flèches haut/bas et espace (pas de 60px)
- **Mode retour** : Scroll vers le haut en haut de page pour revenir à l'animation

### Skyline de Gotham - Technique CSS avancée

La skyline est créée avec des **gradients coniques multiples** et un **clip-path complexe** :

```css
.skyline {
  /* 55+ gradients coniques pour créer les fenêtres éclairées */
  background: 
    var(--w5) 0.5% 54%,    /* Fenêtre type 5 à position 0.5% 54% */
    var(--w6) 2.5% 56.25%, /* Fenêtre type 6 à position 2.5% 56.25% */
    /* ... 50+ autres fenêtres ... */
    linear-gradient(75deg, #150e21, #0f0323), #0f0323;
  
  /* Tailles des fenêtres */
  background-size: 
    1vw 1vh,     /* Fenêtre standard */
    1vw 1.5vh,   /* Fenêtre haute */
    0.5vw 0.75vh, /* Petite fenêtre */
    /* ... */
    100% 100%;   /* Gradient de base */
  
  /* Forme de la skyline avec clip-path */
  clip-path: polygon(
    0% 100%, 0% 100%, 100% 100%, 100% 100%,
    100% 65%, 97% 65%, 97% 63%, 95% 64%,
    94% 32%, 94% 31%, 94% 28%, 93% 23%,
    /* ... 200+ points pour dessiner la silhouette ... */
    0% 50%, 0% 95%, 0% 100%
  );
}
```

### Types de fenêtres (variables CSS) :
```css
:root {
  --w5: conic-gradient(from 90deg at 50% 50%, #acb0b1 0% 25%, #fff0 0% 100%);
  --w6: conic-gradient(from 90deg at 50% 50%, #9dc8dc 0% 25%, #fff0 0% 100%);
  --w7: conic-gradient(from 90deg at 50% 50%, #577c9a 0% 25%, #fff0 0% 100%);
  --w8: conic-gradient(from 90deg at 50% 50%, #2b4e5f 0% 25%, #fff0 0% 100%);
}
```

## 🍔 Site Web Gotham Streat - Structure complète

### Header dynamique
```javascript
// Apparition basée sur la progression de l'animation
const checkHeaderVisibility = () => {
  const gothamScene = document.querySelector('.gotham-scene');
  const rect = gothamScene.getBoundingClientRect();
  const sceneProgress = Math.max(0, Math.min(1, -rect.top / window.innerHeight));
  setHeaderVisible(sceneProgress > 0.1); // Apparaît à 10% de progression
};
```

### Navigation avec détection de section active :
```javascript
const observerOptions = {
  root: null,
  rootMargin: '-20% 0px -80% 0px', // Zone de détection
  threshold: 0
};

// Sections observées : accueil, menu, about, infos
```

### Structure du menu - Données complètes :

```javascript
const menuData = [
  {
    id: "baguette-bane",
    name: "Baguette Bane",
    price: "6.90 €",
    category: "urban-fusion",
    desc: "Baguette boulangère, sauce au choix, salade, tomate, oignons, cheddar",
    image: "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg",
    badges: ["poulet", "steak", "tandoori"],
    ingredients: "Pain baguette, viande au choix, cheddar, salade, tomate, oignons, sauce maison",
    allergens: ["gluten", "lactose"]
  },
  // ... 8 autres plats avec structure identique
];

const categories = [
  { id: 'tous', name: 'Tous', icon: '🍽️' },
  { id: 'burgers', name: 'Burgers', icon: '🍔' },
  { id: 'urban-fusion', name: 'Urban Fusion', icon: '🌯' },
  { id: 'tacos', name: 'Tacos', icon: '🌮' },
  { id: 'bowls', name: 'Bowls', icon: '🥗' },
  { id: 'enfant', name: 'Menu Enfant', icon: '👶' }
];
```

### Modal système complet :
```javascript
// Gestion de l'état de la modal
const [selectedDish, setSelectedDish] = useState(null);
const [scrollPosition, setScrollPosition] = useState(0);

// Blocage du scroll quand modal ouverte
useEffect(() => {
  if (selectedDish) {
    setScrollPosition(window.scrollY);
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
    if (scrollPosition > 0) {
      window.scrollTo(0, scrollPosition);
    }
  }
}, [selectedDish, scrollPosition]);
```

### Sections du site web :

#### 1. Hero Section
- **Image de fond** : Burger avec overlay sombre
- **Bat-Signal animé** : Animation de pulsation CSS
- **Titre principal** : "GOTHAM STREAT" avec effet néon
- **Sous-titre** : "La street-food venue de l'ombre"
- **CTA** : "Voir le menu" + "Appeler"

#### 2. Menu Section
- **Filtres par catégorie** : 6 boutons avec icônes
- **Grille responsive** : 4 colonnes desktop → 2 mobile → 1 très petit
- **Cartes de plats** : Image, nom, prix, description, badges
- **Modal détaillée** : Ingrédients, allergènes, actions

#### 3. À Propos Section
- **Texte de présentation** : Histoire du restaurant
- **Valeurs** : 3 colonnes avec icônes
  - 🥩 Ingrédients frais
  - 👨‍🍳 Recettes maison  
  - 🏪 Engagement local

#### 4. Infos Pratiques Section
- **Adresse** : Rue de la République, 81600 Gaillac
- **Horaires** : Tableau détaillé par jour
- **Contact** : Bouton téléphone + note réservations
- **Réseaux sociaux** : Facebook, Instagram, TikTok
- **Carte Google Maps** : Iframe intégrée

#### 5. Footer
- **Bande crime scene** : Motif rayé jaune/noir
- **Informations** : Logo, adresse, horaires
- **Liens légaux** : Mentions, CGV
- **Copyright** : "Dans l'ombre, nous cuisinons"

## 🎯 Effets visuels et animations

### Effets atmosphériques Gotham :
```css
/* Ciel étoilé avec radial-gradients multiples */
.sky:after {
  background-image: 
    radial-gradient(2px 2px at 20px 30px, #484341, transparent),
    radial-gradient(2px 2px at 43px 75px, #735454, transparent),
    /* ... 12 autres étoiles ... */
    linear-gradient(180deg, #fff0 10%, #000 25%, #111 50%, #222 75%, #111 100%);
}

/* Lune avec effets de glow */
.moon {
  background: radial-gradient(circle at 50% 50%, #fdfdfd 0% 7vmin, #ffffff00 7.25vmin 100%), #fff;
  box-shadow: 
    0 0 8em 4em #6493a9,           /* Halo externe */
    0 0 8em -16em #ff660000 inset, /* Ombre interne */
    0 0 20px 5px #fdfdfd;          /* Glow proche */
  mix-blend-mode: exclusion;
}

/* Brouillard animé */
.fog {
  animation: fog-drift 10s ease-in-out infinite alternate;
}
@keyframes fog-drift {
  0% { transform: translateX(-5%); opacity: 0.2; }
  100% { transform: translateX(5%); opacity: 0.4; }
}
```

### Effets du site restaurant :

#### Boutons avec effets hover :
```css
.cta-button.primary:hover {
  background: var(--accent);
  color: var(--bg);
  transform: translateY(-2px);
  box-shadow: 0 0 30px var(--accent);
}
```

#### Cartes de menu avec parallaxe :
```css
.dish-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 30px rgba(255, 214, 0, 0.12);
  border-color: var(--accent);
}

.dish-card:hover .dish-image {
  transform: scale(1.05);
}
```

#### Titre avec effet néon :
```css
.hero-title {
  text-shadow: 
    0 0 10px var(--accent),
    0 0 20px var(--accent),
    0 0 30px var(--accent);
  animation: neon-flicker 2s ease-in-out infinite alternate;
}
```

## 📱 Responsive Design

### Breakpoints principaux :
```css
/* Mobile */
@media (max-width: 480px) {
  .batman-logo { width: 60px; }
  .menu-grid { grid-template-columns: 1fr; }
  .hero-title { font-size: 2rem; }
}

/* Tablet */
@media (max-width: 768px) {
  .batman-logo { width: 80px; }
  .menu-grid { grid-template-columns: repeat(2, 1fr); }
  .hero-title { font-size: 2.5rem; }
}

/* Desktop */
@media (max-width: 1200px) {
  .menu-grid { grid-template-columns: repeat(3, 1fr); }
}
```

### Adaptations mobile spécifiques :
- **Indicateur de scroll** : Doigt au lieu de souris
- **Animation Batman** : Distances réduites (400px au lieu de 800px)
- **Navigation** : Menu vertical centré
- **Modal** : Pleine largeur avec padding réduit

## ⚡ Performance et optimisations

### GSAP Configuration :
```javascript
gsap.config({
  force3D: true,        // Accélération GPU
  nullTargetWarn: false // Pas d'alertes pour éléments null
});
```

### Will-change pour animations :
```css
.batman-logo {
  will-change: transform, opacity, filter;
}
.gotham-scene {
  will-change: transform;
}
```

### Lazy loading et optimisations :
- **Images Pexels** : URLs directes sans téléchargement
- **Fonts Google** : Preload des polices critiques
- **CSS** : Propriétés optimisées pour GPU