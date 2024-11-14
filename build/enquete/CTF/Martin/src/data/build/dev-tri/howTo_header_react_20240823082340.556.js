```jsx
import React from 'react';

const NomDuComposant = ({ title, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default NomDuComposant;
```

**Explication:**

1. **Importation de React:** Le code commence par importer la bibliothèque React.

2. **Définition du composant:**
   - Le composant est défini en tant que fonction nommée `NomDuComposant`.
   - Il accepte deux propriétés : `title` et `content`.
   - Les valeurs de ces propriétés sont utilisées pour afficher le titre et le contenu du composant.

3. **Retour du composant:**
   - La fonction retourne un élément `<div>` qui contient un élément `<h1>` pour le titre et un élément `<p>` pour le contenu.
   - Les valeurs des propriétés `title` et `content` sont insérées dans les éléments `<h1>` et `<p>`, respectivement.

4. **Exportation du composant:**
   - Le composant est exporté par défaut à l'aide de `export default NomDuComposant`. Cela permet de l'utiliser dans d'autres fichiers React.

**Utilisation du composant:**

Pour utiliser ce composant dans une application React, vous pouvez l' importer et le rendre dans votre composant principal :

```jsx
import NomDuComposant from './NomDuComposant'; // Remplacez './NomDuComposant' par le chemin réel vers votre fichier

function App() {
  return (
    <div>
      <NomDuComposant title="Mon Titre" content="Mon Contenu" />
    </div>
  );
}
```



