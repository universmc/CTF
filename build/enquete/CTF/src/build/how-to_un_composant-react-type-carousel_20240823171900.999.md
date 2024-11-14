## Machine à Prompt pour un Composant React : Carousel

**Contexte:**

Le projet "React Composants" vise à créer une bibliothèque de composants React reusable et modulaires. 

**Dataset:**

Le dataset comprendra des exemples de composants React déjà existants, des spécifications de composants et des modèles de code. 

**Langages:**

* HTML
* SCSS
* JavaScript
* JSX
* JSON

**Variables:**

* `items`: Tableau d'objets représentant chaque élément du carousel. Chaque objet aura des propriétés comme `image`, `title`, `description`.
* `autoplay`: Boolean pour activer/désactiver l'autoplay du carousel.
* `interval`: Nombre de millisecondes entre chaque changement d'image (si autoplay est activé).

**Paramètres:**

* `items`: Tableau d'objets représentant les éléments du carousel (requis).
* `autoplay`: Boolean, valeur par défaut `false` (optionnel).
* `interval`: Nombre de millisecondes, valeur par défaut `5000` (optionnel).

**Fonctions:**

* `render()`: Fonction pour rendre le composant.
* `handleSlideChange()`: Fonction pour gérer le changement de slide.

**Boucle éventuelle:**

* Boucle `map()` pour parcourir le tableau `items` et créer un élément pour chaque élément du carousel.

**Tâches:**

* Créer un composant React fonctionnel pour un carousel.
* Le carousel doit pouvoir afficher un tableau d'éléments.
* Chaque élément doit afficher une image, un titre et une description.
* Le carousel doit avoir des boutons de navigation (précédent/suivant).
* L'autoplay peut être activé/désactivé.
* L'interval d'autoplay peut être personnalisé.

**Processus:**

1. **Analyse du Prompt:** La machine à prompt analysera les paramètres et les exigences du prompt.
2. **Recherche de modèles:** La machine à prompt recherchera des modèles de code similaires dans le dataset.
3. **Génération du code:** La machine à prompt générera du code React basé sur les modèles trouvés et les paramètres du prompt.
4. **Optimisation du code:** La machine à prompt optimisera le code généré pour la lisibilité, la performance et la modularité.

**Caractéristiques, inférence recherchées:**

* **Modularité:** Le composant doit être facilement personnalisable et réutilisable dans d'autres projets.
* **Lisibilité:** Le code généré doit être clair et facile à comprendre.
* **Performance:** Le composant doit être performant et éviter les bogues.

**Actions Immédiates:**

* Définir un prompt pour générer le composant "Carousel".
* Exécuter la machine à prompt avec le prompt défini.
* Tester et valider le code généré.

**Le prompt ultime pour générer le code source:**

```
Générer un composant React fonctionnel pour un carousel avec les fonctionnalités suivantes:

* Affichage d'un tableau d'éléments, chaque élément affichant une image, un titre et une description.
* Boutons de navigation (précédent/suivant).
* Possibilité d'activer/désactiver l'autoplay.
* Possibilité de personnaliser l'interval d'autoplay.

Les paramètres du composant sont :

* items: Tableau d'objets représentant les éléments du carousel (requis). Chaque objet doit avoir les propriétés image, title et description.
* autoplay: Boolean, valeur par défaut false (optionnel).
* interval: Nombre de millisecondes, valeur par défaut 5000 (optionnel).
```

**Le code source React attendu:**

```jsx
import React, { useState, useRef, useEffect } from 'react';

const Carousel = ({ items, autoplay = false, interval = 5000 }) => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % items.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [items, autoplay, interval]);

  const handleSlideChange = (direction) => {
    if (direction === 'next') {
      setCurrentSlide(prevSlide => (prevSlide + 1) % items.length);
    } else {
      setCurrentSlide(prevSlide => (prevSlide - 1 + items.length) % items.length);
    }
  };

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div
            className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
            key={index}
          >
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <button onClick={() => handleSlideChange('prev')}>Précédent</button>
      <button onClick={() => handleSlideChange('next')}>Suivant</button>
    </div>
  );
};

export default Carousel;

```


