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

1. **Importation de React:**
   - `import React from 'react';` importe la bibliothèque React nécessaire pour créer des composants.

2. **Définition du composant:**
   - `const NomDuComposant = ({ title, content }) => { ... };` définit un composant fonctionnel nommé `NomDuComposant`.
   - Il utilise des props déstructurées `title` et `content` pour accéder aux valeurs transmises lors de l'utilisation du composant.

3. **Retour du composant:**
   - `return ( ... );` retourne le code JSX qui représente l'interface utilisateur du composant.
   - Il affiche un titre `<h3>` utilisant la valeur de la prop `title` et un paragraphe `<p>` utilisant la valeur de la prop `content`.

4. **Exportation du composant:**
   - `export default NomDuComposant;` exporte le composant par défaut, ce qui signifie qu'il peut être utilisé dans d'autres fichiers React en utilisant `import NomDuComposant from './NomDuComposant';`.

**Utilisation du composant:**

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

Dans cet exemple, le composant `NomDuComposant` est utilisé avec les propriétés `title` et `content` définies.



