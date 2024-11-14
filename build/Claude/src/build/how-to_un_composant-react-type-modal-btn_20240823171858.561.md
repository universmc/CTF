## Machine à Prompt : Générateur de Composant React

### Contexte

Ce projet vise à créer une machine à prompt capable de générer du code source React à partir de prompts textuels descriptifs. Le but est de simplifier la création de composants React en permettant aux développeurs de spécifier leurs besoins de manière concise et intuitive.

### Dataset

Le dataset utilisé pour entraîner la machine à prompt comprendra :

* **Exemples de prompts React**: Des descriptions de composants React avec des détails sur leurs fonctionnalités, leur apparence et leur comportement.
* **Code source React correspondant**: Le code source React généré à partir des prompts.
* **Documentation React**: La documentation officielle de React, incluant les spécifications des différents composants et API.

### Données d'entrée (Prompt)

Le prompt pour générer un composant React sera structuré de la manière suivante :

* **un_composant-react-type**: Définit le type de composant à générer (ex: modal, bouton, formulaire).
* **nom_du_composant**: Le nom du composant à générer (ex: ModalBtn).
* **Description**: Une description concise du composant et de sa fonction.
* **HTML**: La structure HTML souhaitée pour le composant (facultatif).
* **SCSS**: Les styles CSS souhaités pour le composant (facultatif).
* **JSX**: Le code JSX pour la logique du composant (facultatif).
* **JSON**: Les données nécessaires au fonctionnement du composant (facultatif).
* **Variables**: Les variables à utiliser dans le composant (facultatif).
* **Paramètres**: Les paramètres que le composant peut recevoir (facultatif).
* **Fonctions**: Les fonctions à utiliser dans le composant (facultatif).
* **Boucle éventuel**: Indique si une boucle est nécessaire dans le composant (facultatif).

### Exemple de Prompt

```
un_composant-react-type: modal
nom_du_composant: ModalBtn
Description: Un bouton qui ouvre un modal avec un message de confirmation.
HTML: <button>Ouvrir modal</button>
SCSS: .modal-btn {
  background-color: blue;
  color: white;
}
```

### Processus

La machine à prompt utilisera les données d'entrée pour générer le code source React du composant.  Elle suivra les étapes suivantes :

1. **Analyse du prompt**: La machine à prompt analysera le prompt pour comprendre les besoins du développeur.
2. **Extraction des informations**: La machine à prompt extraira les informations nécessaires au code source, telles que le type de composant, le nom, la description, le code HTML, SCSS, JSX, JSON, les variables, les paramètres, les fonctions et les boucles.
3. **Génération du code**: La machine à prompt utilisera les informations extraites pour générer le code source React du composant.
4. **Validation du code**: La machine à prompt validera le code généré pour s'assurer qu'il est correct et fonctionnel.

### Caractéristiques et Inférences Recherchées

* **Précision**: La machine à prompt doit générer du code React précis et conforme aux spécifications du prompt.
* **Flexibilité**: La machine à prompt doit être capable de générer différents types de composants React.
* **Simplicité**: La machine à prompt doit être facile à utiliser et à comprendre.
* **Robustesse**: La machine à prompt doit être capable de gérer des prompts complexes et imprévus.

### Actions Immédiates

* **Collecte de données**: Commencer à collecter des exemples de prompts React et du code source correspondant.
* **Développement du modèle**: Entraîner un modèle de machine à apprendre sur le dataset collecté.
* **Tests et améliorations**: Tester le modèle et l'améliorer en fonction des résultats.

### Prompt Ultime

```
un_composant-react-type: modal
nom_du_composant: ModalBtn
Description: Un bouton qui ouvre un modal avec un message de confirmation. Le modal doit avoir un titre, un message, un bouton "Confirmer" et un bouton "Annuler".
HTML: <button>Ouvrir modal</button>
SCSS: .modal-btn {
  background-color: blue;
  color: white;
}
JSX: 
  <div className="modal">
    <div className="modal-content">
      <span className="close">&times;</span>
      <h2>Confirmation</h2>
      <p>Êtes-vous sûr de vouloir confirmer ?</p>
      <button>Confirmer</button>
      <button>Annuler</button>
    </div>
  </div>
```

### Code Source React Attendu

```jsx
import React, { useState } from 'react';
import './ModalBtn.scss';

const ModalBtn = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className="modal-btn" onClick={openModal}>Ouvrir modal</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Confirmation</h2>
            <p>Êtes-vous sûr de vouloir confirmer ?</p>
            <button onClick={closeModal}>Confirmer</button>
            <button onClick={closeModal}>Annuler</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalBtn;
```


