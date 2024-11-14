```jsx
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

* **`import React from 'react';`**: Importe le module React nécessaire pour créer des composants.
* **`const NomDuComposant = ({ title, content }) => { ... };`**: Définit un composant fonctionnel nommé `NomDuComposant`. 
    * Il utilise des props déstructurées (`title` et `content`) pour recevoir les valeurs à afficher.
* **`return ( ... );`**: Retourne le JSX qui représente l'interface utilisateur du composant.
    * **`<h2>{title}</h2>`**: Affiche le titre passé en tant que prop `title` en tant qu'en-tête 2.
    * **`<p>{content}</p>`**: Affiche le contenu passé en tant que prop `content` en tant que paragraphe.
* **`export default NomDuComposant;`**: Exporte le composant par défaut afin qu'il puisse être utilisé dans d'autres fichiers.

**Utilisation:**

Pour utiliser ce composant dans votre application React, vous pouvez l'importer et le rendre comme suit:

```jsx
import NomDuComposant from './NomDuComposant'; // Remplacez './NomDuComposant' par le chemin correct

function App() {
  return (
    <div>
      <NomDuComposant title="Mon Titre" content="Mon Contenu" />
    </div>
  );
}
```

Ceci affichera un titre "Mon Titre" et un contenu "Mon Contenu" dans votre application.



