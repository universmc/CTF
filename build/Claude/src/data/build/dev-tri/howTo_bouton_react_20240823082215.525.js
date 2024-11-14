```jsx
import React from 'react';

const {{NomDuComposant}} = ({ title, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default {{NomDuComposant}};
```

**Explication:**

1. **Importation de React:** La ligne `import React from 'react';` importe la bibliothèque React nécessaire pour créer des composants.
2. **Définition du composant:** La ligne `const {{NomDuComposant}} = ({ title, content }) => { ... };` définit un composant fonctionnel nommé `{{NomDuComposant}}`.
   -  `({ title, content }) => { ... }` est une fonction fléchée qui accepte deux propriétés : `title` et `content`.
3. **Retour du JSX:** La fonction renvoie du JSX, qui est un mélange de code JavaScript et de syntaxe HTML. 
   - `<h2>{title}</h2>` affiche le titre passé en tant que propriété `title`.
   - `<p>{content}</p>` affiche le contenu passé en tant que propriété `content`.
4. **Exportation du composant:** La ligne `export default {{NomDuComposant}};` exporte le composant par défaut, ce qui signifie qu'il peut être utilisé dans d'autres fichiers React en utilisant `import {{NomDuComposant}} from './{{NomDuComposant}}.jsx';`.

**Utilisation du composant:**

```jsx
import {{NomDuComposant}} from './{{NomDuComposant}}.jsx';

const App = () => {
  return (
    <div>
      <{{NomDuComposant}} title="Mon titre personnalisé" content="Mon contenu personnalisé" />
    </div>
  );
};
```

Dans cet exemple, le composant `{{NomDuComposant}}` est utilisé avec les propriétés `title` et `content` définies. 



