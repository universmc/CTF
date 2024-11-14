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

**Explication:**

1. **Importation de React:** Le code commence par importer la bibliothèque React nécessaire pour créer des composants.
2. **Définition du composant:**
   - Le composant est défini en tant que fonction nommée `NomDuComposant`.
   - Il accepte deux propriétés : `title` et `content`.
3. **Retour JSX:** La fonction renvoie un élément JSX qui représente l'interface utilisateur du composant.
   - Il affiche un élément `h3` contenant la valeur de la propriété `title`.
   - Il affiche un élément `p` contenant la valeur de la propriété `content`.
4. **Exportation par défaut:** Le composant est exporté par défaut, ce qui signifie qu'il peut être importé et utilisé dans d'autres fichiers React en utilisant `import NomDuComposant from './NomDuComposant';`.

**Utilisation:**

Pour utiliser le composant, vous pouvez l'importer dans un autre fichier React et l'afficher dans votre application.

```jsx
import NomDuComposant from './NomDuComposant';

const App = () => {
  return (
    <div>
      <NomDuComposant title="Mon titre" content="Mon contenu ici" />
    </div>
  );
};
```



