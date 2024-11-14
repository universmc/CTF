## Machine à Prompt pour Composant React : un_composant-react-type-modal-btn

**Contexte:**

Ce projet vise à créer une machine à prompt capable de générer du code React pour des composants spécifiques à partir d'un prompt clair et concis. Le focus initial est sur la création d'un composant "modal button". 

**Dataset:**

Le modèle sera entraîné sur un dataset de composants React existants, incluant des exemples de modaux avec boutons. Ce dataset contiendra :

* **Prompts:** Des descriptions textuelles détaillées du composant souhaité (ex: "Un bouton qui ouvre un modal avec un titre, un message et un bouton de fermeture").
* **Code React:** Le code source correspondant aux prompts.

**Variables et Paramètres:**

Le modèle devra être capable de gérer les variables et paramètres suivants :

* **Titre du modal:** Texte affiché dans l'en-tête du modal.
* **Message du modal:** Texte affiché dans le corps du modal.
* **Contenu du modal:** Composants React à afficher dans le modal (ex: formulaire, liste, etc.).
* **Boutons du modal:** Texte et actions associées aux boutons (ex: "Fermer", "Enregistrer", etc.).
* **Style du modal:** Classe CSS ou objet CSS pour personnaliser l'apparence du modal.

**Fonctions:**

Le modèle devra être capable de générer du code React qui :

* **Crée un bouton:** Un élément `<button>` déclenchant l'ouverture du modal.
* **Crée un modal:** Un élément `<div>` encapsulant le contenu du modal et le masquant initialement.
* **Gère l'ouverture et la fermeture du modal:** Des fonctions pour afficher et masquer le modal en fonction de l'état du composant.
* **Affiche le contenu du modal:** Insertion des variables et paramètres du prompt dans le code du modal.

**Rôles:**

* **Utilisateur:** Définit les caractéristiques du composant souhaité via un prompt clair.
* **Machine à Prompt:** Analyse le prompt, utilise le dataset et les paramètres pour générer du code React.

**Tâches:**

1. **L'utilisateur fournit un prompt:** Ex: "Un bouton qui ouvre un modal avec le titre 'Confirmation', le message 'Êtes-vous sûr de vouloir supprimer cet élément ?', un bouton 'Oui' et un bouton 'Non'."
2. **La machine à prompt analyse le prompt:** Identifie les éléments clés (titre, message, boutons) et les paramètres.
3. **La machine à prompt génère du code React:**

```jsx
import React, { useState } from 'react';

function ModalButton() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Ouvrir Modal</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Confirmation</h2>
            <p>Êtes-vous sûr de vouloir supprimer cet élément ?</p>
            <button onClick={handleCloseModal}>Non</button>
            <button onClick={handleCloseModal}>Oui</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalButton;
```

4. **L'utilisateur peut modifier et utiliser le code généré.**

**Caractéristiques et Inférence Recherchées:**

* **Flexibilité:** Le modèle doit être capable de générer des modaux avec différentes configurations (titre, message, boutons, contenu).
* **Lisibilité:** Le code généré doit être clair, concis et facile à comprendre.
* **Fonctionnalité:** Le modal doit s'ouvrir et se fermer correctement, afficher le contenu spécifié et gérer les interactions avec les boutons.

**Actions Immédiates:**

* **Développer le dataset de composants React avec des exemples de modaux.**
* **Entraîner un modèle de machine à apprendre capable de générer du code React à partir de prompts.**
* **Créer une interface utilisateur permettant aux utilisateurs de fournir des prompts et de visualiser le code généré.**

**Code Source React Attendu:**

Le code source React attendu est un composant fonctionnel qui inclut :

* Un bouton pour ouvrir le modal.
* Un modal qui affiche le contenu spécifié dans le prompt.
* Une gestion de l'état pour contrôler l'ouverture et la fermeture du modal.
* Des styles pour personnaliser l'apparence du modal (optionnel).



