## Machine à Prompt pour Créer un Composant React: Type Modal Button

### Contexte:

Ce projet vise à créer une machine à prompt capable de générer un composant React simple, spécifiquement un bouton modal. L'utilisateur fournira un prompt textuel décrivant le bouton et ses fonctionnalités, et la machine à prompt générera le code React correspondant, incluant HTML, SCSS, JS et JSX.

### Dataset:

La machine à prompt sera entraînée sur un dataset de composants React existants, notamment des boutons modaux. Ce dataset contiendra des exemples de prompts et de code React correspondant, couvrant différents aspects tels que :

* **Types de boutons:** Primary, secondary, danger, etc.
* **Styles:** Fond, couleur du texte, bordure, taille, etc.
* **Fonctionnalités:** Ouverture/fermeture d'un modal, animation, contenu du modal, etc.

### Variables, Paramètres et Fonctions:

La machine à prompt utilisera les informations suivantes pour générer le code React:

* **Variables:** `buttonLabel`, `modalContent`, `modalTitle`, `modalClassName`, etc.
* **Paramètres:** `isOpen`, `onClose`, `onClick`, etc.
* **Fonctions:** `openModal`, `closeModal`, `handleOpen`, `handleClose`, etc.

### Boucles éventuelles:

La machine à prompt pourra gérer des boucles pour générer du contenu dynamique dans le modal, par exemple une liste d'éléments.

### Tâches:

La machine à prompt devra être capable de:

* **Comprendre les prompts:** Analyser le texte fourni par l'utilisateur pour identifier les informations clés concernant le bouton modal.
* **Générer le code React:** Créer le code HTML, SCSS, JS et JSX correspondant au prompt.
* **S'adapter à différents styles et fonctionnalités:** Générer du code adapté à la variété des besoins de l'utilisateur.
* **Fournir un code propre et lisible:** Respecter les meilleures pratiques de codage React.

### Processus:

1. **Analyse du Prompt:** La machine à prompt analysera le texte du prompt pour identifier les éléments clés (label, style, fonctionnalités).
2. **Extraction des Informations:** Elle extraira les variables, paramètres et fonctions nécessaires pour générer le code React.
3. **Génération du Code:** La machine à prompt utilisera les informations extraites pour générer le code HTML, SCSS, JS et JSX du composant React.
4. **Validation et Affichage du Code:** Le code généré sera validé et affiché à l'utilisateur.

### Caractéristiques et Inférence Recherchées:

* **Précision:** Le code généré doit être conforme à la description du prompt et fonctionner correctement.
* **Flexibilité:** La machine à prompt doit être capable de générer des composants modaux avec différents styles et fonctionnalités.
* **Lisibilité:** Le code généré doit être propre et facile à comprendre.
* **Efficacité:** La machine à prompt doit générer du code rapidement et efficacement.

### Actions Immédiates:

* **Définir le format du prompt:** Créer un format standard pour les prompts, permettant à la machine à prompt de comprendre facilement les informations fournies.
* **Construire le dataset:** Rassembler un ensemble d'exemples de prompts et de code React pour entraîner la machine à prompt.
* **Développer l'algorithme de génération de code:** Choisir un algorithme adapté pour générer le code React à partir des informations extraites du prompt.
* **Intégrer la machine à prompt dans une interface utilisateur:** Permettre aux utilisateurs de fournir des prompts et de visualiser le code généré.

### Code Source React Attendu (Exemple):

```jsx
import React, { useState } from 'react';

const ModalButton = ({ buttonLabel, modalContent, modalTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen}>{buttonLabel}</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>&times;</span>
            <h3>{modalTitle}</h3>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalButton;

```



