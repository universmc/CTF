```javascript
import React from 'react';

const NomDuComposant = ({ title, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default NomDuComposant;
```

**Explication:**

* **Import React:** Le code commence par importer la bibliothèque React nécessaire pour créer des composants.
* **Fonction composant:**  `NomDuComposant` est une fonction qui prend deux propriétés : `title` et `content`. Ces propriétés seront utilisées pour personnaliser le titre et le contenu du composant.
* **Retour JSX:** La fonction renvoie du JSX, qui est un syntaxe d'écriture pour React. Le JSX crée une structure HTML simple avec un titre `h2` affichant la valeur de la propriété `title` et un paragraphe `p` affichant la valeur de la propriété `content`.
* **Exportation:** Le composant est exporté par défaut, ce qui signifie qu'il peut être importé et utilisé dans d'autres fichiers React.

**Utilisation:**

Pour utiliser ce composant dans une autre partie de votre application React, vous pouvez importer le composant et l'afficher comme suit:

```javascript
import NomDuComposant from './NomDuComposant'; // Remplacez 'NomDuComposant' par le nom réel du fichier

function MonComposant() {
  return (
    <div>
      <NomDuComposant title="Mon titre personnalisé" content="Mon contenu personnalisé" />
    </div>
  );
}
```

Cela affichera un titre "Mon titre personnalisé" et un contenu "Mon contenu personnalisé" dans votre application.



