```jsx
import React from 'react';

const TitreContenu = ({ title, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default TitreContenu;
```

**Explication du code:**

1. **Importation de React:**
   - `import React from 'react';` importe la bibliothèque React nécessaire pour créer des composants.

2. **Définition du composant:**
   - `const TitreContenu = ({ title, content }) => { ... };` définit un composant fonctionnel appelé `TitreContenu`.
   - Il accepte deux propriétés : `title` et `content`, qui seront utilisées pour afficher le titre et le contenu respectifs.

3. **Retour du composant:**
   - `return ( ... );` renvoie le code JSX qui représente l'interface utilisateur du composant.
   - `<h2>{title}</h2>` affiche le titre passé en tant que propriété `title` en tant qu'en-tête de niveau 2.
   - `<p>{content}</p>` affiche le contenu passé en tant que propriété `content` en tant que paragraphe.

4. **Exportation du composant:**
   - `export default TitreContenu;` exporte le composant `TitreContenu` par défaut, ce qui signifie qu'il peut être importé et utilisé dans d'autres fichiers React.

**Utilisation du composant:**

```jsx
import TitreContenu from './TitreContenu'; // Importe le composant

const App = () => {
  return (
    <div>
      <TitreContenu title="Mon titre" content="Mon contenu ici" />
    </div>
  );
};

export default App;
```

Dans cet exemple, `TitreContenu` est utilisé avec les propriétés `title="Mon titre"` et `content="Mon contenu ici"`. Cela affichera un titre "Mon titre" suivi du contenu "Mon contenu ici" dans votre application.



