## Machine à Prompt pour Composants React : un_composant-react-type-formulaire

### Contexte

Le projet "React Composants" vise à créer une bibliothèque de composants React réutilisables et modulaires. 

### Dataset

Le dataset de la machine à prompt comprend :

* **Exemples de composants React existants:**  Divers types de formulaires (simples, avec validation, modaux, etc.)
* **Documentation de React et de ses API:**  Pour comprendre les concepts clés et les fonctions disponibles.
* **Meilleures pratiques de développement React:**  Pour garantir la qualité et la maintenabilité des composants générés.

### Variables et Paramètres

La machine à prompt utilise les variables suivantes :

* **`type`**: Type de formulaire (simple, multi-pages, etc.)
* **`champs`**: Liste des champs du formulaire (type, label, valeur par défaut, etc.)
* **`validation`**: Règles de validation pour chaque champ
* **`actions`**: Actions possibles sur le formulaire (soumission, annulation, etc.)
* **`style`**: Style CSS personnalisé pour le formulaire

### Fonctions

La machine à prompt utilise les fonctions suivantes :

* **`genererHTML`**: Génère le code HTML du formulaire en fonction des paramètres.
* **`ajouterGestionnaire`**: Ajoute les gestionnaires d'événements nécessaires pour les interactions utilisateur.
* **`appliquerValidation`**: Implémente les règles de validation pour chaque champ.
* **`handlerActions`**: Gère les actions possibles sur le formulaire (soumission, annulation, etc.).

### Rôles et Tâches

* **Rôle de la machine à prompt**: Générer le code source d'un composant React pour un formulaire en fonction des prompts fournis.
* **Tâche de l'utilisateur**: Fournir un prompt clair et précis contenant les informations nécessaires pour générer le composant.

### Processus

1. **L'utilisateur fournit un prompt** contenant les informations nécessaires pour créer le composant.
2. **La machine à prompt analyse le prompt** et extrait les variables et paramètres.
3. **La machine à prompt utilise les fonctions** pour générer le code HTML, les gestionnaires d'événements, la validation et les actions.
4. **La machine à prompt retourne le code source React** du composant formulaire.

### Caractéristiques et Inférence Recherchées

* **Composant réutilisable et modulaire**:  Le composant doit être facile à intégrer dans différents projets et à personnaliser.
* **Code propre et bien documenté**: Le code généré doit être lisible et compréhensible.
* **Fonctionnalité de validation**: Le composant doit valider les données entrées par l'utilisateur.
* **Gestion des actions**: Le composant doit gérer les actions possibles sur le formulaire (soumission, annulation, etc.).

## Actions Immédiates

**Créer un prompt pour générer un composant React type formulaire simple avec les champs suivants:**

* Nom (texte)
* Email (email)
* Mot de passe (password)
* Confirmation du mot de passe (password)

**Prompt:**

```
un_composant-react-type-formulaire

type: simple
champs:
  - { type: "text", label: "Nom", nom: "nom" }
  - { type: "email", label: "Email", nom: "email" }
  - { type: "password", label: "Mot de passe", nom: "mot_de_passe" }
  - { type: "password", label: "Confirmation du mot de passe", nom: "confirmation_mot_de_passe" }
validation:
  - { champ: "email", règle: "email" }
  - { champ: "mot_de_passe", règle: "min_length:8" }
  - { champ: "confirmation_mot_de_passe", règle: "equals:mot_de_passe" }
actions:
  - { label: "S'inscrire", type: "submit" }
  - { label: "Annuler", type: "cancel" }
```

## Code Source React Attendu

```jsx
import React, { useState } from 'react';

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    mot_de_passe: '',
    confirmation_mot_de_passe: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code pour soumettre le formulaire
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nom">Nom:</label>
        <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="mot_de_passe">Mot de passe:</label>
        <input type="password" id="mot_de_passe" name="mot_de_passe" value={formData.mot_de_passe} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="confirmation_mot_de_passe">Confirmation du mot de passe:</label>
        <input type="password" id="confirmation_mot_de_passe" name="confirmation_mot_de_passe" value={formData.confirmation_mot_de_passe} onChange={handleChange} />
      </div>
      <button type="submit">S'inscrire</button>
      <button type="button" onClick={() => { /* Code pour annuler */ }}>Annuler</button>
    </form>
  );
};

export default SimpleForm;
```



