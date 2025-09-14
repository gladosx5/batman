# Batman Gotham 3D Animation

Une expérience web immersive où le logo Batman émerge de la skyline de Gotham City avec des animations 3D spectaculaires synchronisées au scroll.

## 🦇 Fonctionnalités

- **Animation 3D fluide** : Logo Batman émergeant de la ville avec scaling, rotation et translation
- **Parallaxe cinématique** : Effets de profondeur entre la ville et le logo
- **Glow effects** : Éclairage dynamique progressif
- **Performance optimisée** : 60fps avec GSAP et ScrollTrigger
- **Design responsif** : Adapté à tous les appareils
- **Atmosphère immersive** : Ciel étoilé, lune, brouillard et effets atmosphériques

## 🚀 Installation

```bash
# Cloner le projet
git clone [votre-repo]
cd batman-gotham-3d

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

## 🛠️ Technologies utilisées

- **React 18+** : Framework moderne
- **Vite** : Build tool ultra-rapide
- **GSAP** : Animations haute performance
- **ScrollTrigger** : Synchronisation avec le scroll
- **CSS3** : Animations et effets visuels avancés

## 📱 Compatibilité

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Support mobile complet

## 🎮 Utilisation

Faites défiler la page vers le bas pour voir le logo Batman émerger de la skyline de Gotham City. L'animation est entièrement synchronisée avec votre scroll.

## 🔧 Configuration

Les paramètres d'animation peuvent être ajustés dans :
- `src/components/BatmanLogo.jsx` : Animation principale du logo
- `src/styles/animations.css` : Styles et effets visuels
- `src/hooks/useScrollAnimation.js` : Configuration ScrollTrigger

## 📦 Build

```bash
# Créer une build de production
npm run build

# Prévisualiser la build
npm run preview
```

## 🎨 Personnalisation

- Modifiez les couleurs dans `animations.css`
- Ajustez les paramètres d'animation dans `BatmanLogo.jsx`
- Personnalisez la skyline dans `GothamScene.jsx`

## 📄 Licence

MIT License - Créé avec 🦇 pour les fans de Batman