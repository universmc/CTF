## Machine à Prompt pour un composant React : Carousel

**Contexte:**

Ce projet vise à créer un composant React réutilisable pour un carrousel d'images. 

**Dataset:**

* **HTML:** Structure HTML de base pour un carrousel, incluant des éléments pour les images, les boutons de navigation et les indications de diapositives.
* **SCSS:** Styles CSS pour le carrousel, incluant des styles pour les images, les boutons, les indications et l'animation de transition.
* **JS:** Logique JavaScript pour le fonctionnement du carrousel, incluant la navigation entre les images, l'auto-avancement et la gestion des indications.
* **JSX:** Code JSX pour l'affichage du composant React, intégrant l'HTML, les styles SCSS et la logique JavaScript.
* **JSON:** Données potentielles pour les images du carrousel, incluant les URLs des images, les légendes et d'autres informations.

**Variables:**

* **images:** Tableau d'objets contenant les informations des images (URL, légende, etc.).
* **interval:** Intervalle de temps pour l'auto-avancement du carrousel (en millisecondes).
* **direction:** Direction de navigation (avant ou arrière).
* **currentSlide:** Index de la diapositive actuellement affichée.

**Paramètres:**

* **images:** Tableau d'objets contenant les informations des images (URL, légende, etc.).
* **interval:** Intervalle de temps pour l'auto-avancement du carrousel (en millisecondes).
* **autoplay:** Booléen indiquant si le carrousel doit s'auto-avancer.
* **loop:** Booléen indiquant si le carrousel doit boucler indéfiniment.

**Fonctions:**

* **handleNavigation:** Fonction pour naviguer entre les diapositives.
* **handleAutoplay:** Fonction pour gérer l'auto-avancement du carrousel.
* **renderSlides:** Fonction pour afficher les diapositives du carrousel.

**Boucle éventuelle:**

* Boucle pour afficher les diapositives du carrousel.

**Tâches:**

* Créer une structure HTML pour le carrousel.
* Définir les styles CSS pour le carrousel.
* Implémenter la logique JavaScript pour la navigation et l'auto-avancement.
* Créer une interface utilisateur React pour le composant.
* Permettre la personnalisation du composant via des paramètres.

**Processus:**

1. **Analyse du prompt:** Identifier les informations clés du prompt, comme les paramètres souhaités, le comportement du carrousel et les styles.
2. **Structure HTML:** Générer la structure HTML de base du carrousel.
3. **Styles SCSS:** Définir les styles CSS pour le carrousel en utilisant SCSS.
4. **Logique JavaScript:** Implémenter la logique JavaScript pour la navigation et l'auto-avancement du carrousel.
5. **JSX:** Créer le composant React en utilisant JSX pour intégrer l'HTML, les styles SCSS et la logique JavaScript.
6. **Paramétrage:** Ajouter les paramètres au composant pour permettre la personnalisation.
7. **Tests:** Tester le composant pour s'assurer qu'il fonctionne correctement.

**Caractéristiques inférées:**

* **Actions Immédiates:** Navigation entre les diapositives, démarrage et arrêt de l'auto-avancement.
* **Code source React attendu:** Un composant React fonctionnel pour un carrousel d'images, incluant les éléments HTML, les styles SCSS, la logique JavaScript et la possibilité de personnalisation via des paramètres.


**Exemple de prompt:**

"Créez un composant React pour un carrousel d'images. Le carrousel doit afficher 3 images avec des légendes. Il doit avoir des boutons de navigation pour passer à l'image suivante ou précédente. L'auto-avancement doit être activé avec un intervalle de 3 secondes. Le style doit être minimaliste avec des couleurs neutres."



**Remarque:**  Ce modèle de machine à prompt est un point de départ. Il peut être affiné et amélioré en fonction des besoins spécifiques du projet.
