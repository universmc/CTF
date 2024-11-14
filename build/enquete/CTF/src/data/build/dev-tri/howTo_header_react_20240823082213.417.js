```jsx
import React from 'react';

const NomDuComposant = ({ title, content }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default NomDuComposant;
```

**Explication du code:**

* **`import React from 'react';`**: Importe le module React nécessaire pour créer des composants React.
* **`const NomDuComposant = ({ title, content }) => { ... };`**: Définit un composant fonctionnel nommé `NomDuComposant`. 
    * Il utilise des props déstructurées (`{ title, content }`) pour recevoir le titre et le contenu à afficher.
* **`return ( ... );`**: Retourne le code JSX qui décrit l'interface utilisateur du composant.
    * `<h3>{title}</h3>`: Affiche le titre transmis en tant que prop.
    * `<p>{content}</p>`: Affiche le contenu transmis en tant que prop.
* **`export default NomDuComposant;`**: Exporte le composant par défaut afin qu'il puisse être utilisé dans d'autres fichiers React.

**Utilisation du composant:**

```jsx
import NomDuComposant from './NomDuComposant'; // Remplacez 'NomDuComposant' par le nom réel du fichier

function App() {
  return (
    <div>
      <NomDuComposant title="Mon titre" content="Mon contenu" />
    </div>
  );
}
```

**Remarques:**

* Vous pouvez remplacer `NomDuComposant` par le nom souhaité pour votre composant.
* Vous pouvez modifier le code JSX pour personnaliser l'apparence du composant (ajouter des styles, des éléments HTML supplémentaires, etc.).



