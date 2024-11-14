## Machine à Prompt pour un composant React : Type Chatbot

### Contexte

Ce projet vise à créer une machine à prompt capable de générer du code source React pour un composant chatbot. Le composant devra être flexible et permettre de personnaliser l'apparence et le comportement du chatbot.

### Dataset

Le dataset sera constitué de :

* **HTML:** Exemples de structure HTML pour des chatbots.
* **SCSS:** Exemples de styles CSS pour des chatbots.
* **JS:** Exemples de code JavaScript pour la logique du chatbot.
* **JSX:** Exemples de code JSX pour l'interface utilisateur du chatbot.
* **JSON:** Exemples de données JSON pour le contenu du chatbot.

### Variables, Paramètres et Fonctions

Le prompt devra permettre de définir :

* **Variables:** Nom du chatbot, couleur de fond, couleur du texte, etc.
* **Paramètres:** Largeur et hauteur du composant, positionnement, etc.
* **Fonctions:** Actions à effectuer lors de l'interaction avec le chatbot (envoyer un message, changer d'état, etc.).

### Boucle éventuelle

Le prompt devra permettre de définir si le chatbot doit afficher une boucle de messages pré-enregistrés ou si la logique de réponse doit être basée sur des conditions spécifiques.

### Vos Tâches

* **Définir le prompt ultime** pour générer le code source React.
* **Structurer le processus** de génération de code à partir du prompt.
* **Identifier les inférences recherchées** par la machine à prompt.

### Caractéristiques et Inférence Recherchées

La machine à prompt devra être capable de :

* **Générer du code React valide** et fonctionnel.
* **Adapter le code aux spécifications définies dans le prompt.**
* **Utiliser les variables, paramètres et fonctions définis dans le prompt.**
* **Gérer les boucles de messages si nécessaire.**
* **Produire un code lisible et bien organisé.**

### Actions Immédiates

* **Élaborer un prompt détaillé** pour générer un composant React type chatbot.
* **Définir les exemples de données JSON** pour le contenu du chatbot.
* **Créer un exemple de code React** pour un composant chatbot simple.

### Le Prompt Ultime

```
Génère un composant React pour un chatbot simple. 

Nom du chatbot: BotBuddy

Style: Minimaliste, avec un fond gris clair et du texte noir.

Fonctionnalités:

* Afficher un message pré-enregistré lorsque le composant est initialisé.
* Permettre à l'utilisateur de saisir un message dans un champ de texte.
* Envoyer le message de l'utilisateur au chatbot.
* Afficher la réponse du chatbot sous le champ de texte.

Données JSON:

```json
[
  {
    "user": "Bonjour",
    "bot": "Salut ! Comment puis-je vous aider ?"
  },
  {
    "user": "Quel est votre nom ?",
    "bot": "Je m'appelle BotBuddy."
  }
]
```

Utilisez des variables pour le nom du chatbot, les couleurs de fond et de texte.

```
```


### Le Code Source React Attendu

```jsx
import React, { useState } from 'react';

const Chatbot = () => {
  const [messageUser, setMessageUser] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer le message de l'utilisateur au chatbot
    setMessages([...messages, { user: messageUser }]);
    setMessageUser('');
  };

  return (
    <div className="chatbot">
      <h2 className="chatbot__title">{props.nomChatbot}</h2>
      <div className="chatbot__messages">
        {/* Afficher les messages */}
      </div>
      <form className="chatbot__form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={messageUser}
          onChange={(e) => setMessageUser(e.target.value)}
          placeholder="Tapez votre message"
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Chatbot;

```



