## Machine à Prompt pour Composants React : Formulaire

**Contexte:**

Ce projet vise à créer une machine à prompt capable de générer des composants React à partir de descriptions textuelles. 

**Dataset:**

Le dataset comprendra des exemples de composants React et leurs descriptions textuelles correspondantes. Il sera enrichi avec des informations sur les types de formulaires (ex: contact, inscription, recherche), les champs (texte, email, checkbox, radio, select), la validation et l'envoie des données.

**Langages:**

HTML, SCSS, JS, JSX, JSON

**Variables:**

* `type`: Type de formulaire (ex: contact, inscription)
* `champs`: Liste des champs du formulaire (ex: nom, email, message)
* `validation`: Règles de validation pour chaque champ (ex: email valide, longueur minimum)
* `actions`: Actions à effectuer lors de l'envoi du formulaire (ex: envoyer à un serveur, afficher un message de confirmation)

**Paramètres:**

* `title`: Titre du formulaire
* `description`: Description du formulaire
* `style`: Style CSS personnalisé

**Fonctions:**

* `handleInputChange`: Gère les changements de valeur dans les champs
* `handleSubmit`: Gère l'envoi du formulaire

**Boucle éventuel:**

* Boucle pour gérer la liste des champs du formulaire

**Tâches:**

1. **Analyser le prompt:** Identifier le type de formulaire, les champs, la validation et les actions.
2. **Générer le code HTML:** Créer la structure du formulaire avec les champs appropriés.
3. **Générer le code SCSS:** Définir le style du formulaire en fonction des paramètres.
4. **Générer le code JSX:** Créer les composants React pour chaque champ et gérer les événements.
5. **Générer le code JS:** Implémenter les fonctions `handleInputChange` et `handleSubmit`.

**Caractéristiques, inférence recherchées:**

* **Flexibilité:** Le générateur doit être capable de créer des formulaires de différents types et complexités.
* **Précision:** Le code généré doit être valide et fonctionnel.
* **Lisibilité:** Le code généré doit être clair et facile à comprendre.
* **Personnalisation:** Le générateur doit permettre de personnaliser le style et le comportement du formulaire.

**Actions Immédiates:**

* **Développer un prototype de la machine à prompt:** 
    * Commencer par un ensemble limité de types de formulaires et de champs.
    * Utiliser un langage de description simple et intuitif.
    * Tester le prototype avec des exemples concrets.
* **Améliorer le prototype:** 
    * Ajouter de nouveaux types de formulaires et de champs.
    * Intégrer la validation et les actions.
    * Améliorer la flexibilité et la personnalisation.

**Code source React attendu (un_composant-react-type-formulaire):**

```jsx
import React, { useState } from 'react';

const FormulaireContact = () => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer le formulaire
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nom">Nom:</label>
        <input
          type="text"
          id="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default FormulaireContact;
```



