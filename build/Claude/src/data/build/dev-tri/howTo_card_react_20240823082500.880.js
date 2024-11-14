```jsx
import React from 'react';

const Composants = ({ title, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Composants;
```

**Explication:**

1. **Importation de React:**
   - `import React from 'react';` importe la bibliothèque React nécessaire pour créer des composants.

2. **Définition du composant:**
   - `const Composants = ({ title, content }) => { ... };` définit un composant fonctionnel nommé `Composants`. Il prend deux propriétés comme arguments : `title` et `content`.

3. **Retour JSX:**
   - Le composant retourne un élément `<div>` qui contient :
     - Un élément `<h2>` affichant le titre passé en tant que propriété `title`.
     - Un élément `<p>` affichant le contenu passé en tant que propriété `content`.

4. **Exportation du composant:**
   - `export default Composants;` exporte le composant `Composants` par défaut, ce qui signifie qu'il peut être importé et utilisé dans d'autres fichiers React.

**Utilisation dans une application React:**

```jsx
import Composants from './Composants'; // Assurez-vous que le chemin est correct

const App = () => {
  return (
    <div>
      <Composants title="Ma section" content="Ceci est le contenu de ma section." />
    </div>
  );
};
```

Dans cet exemple, `Composants` est importé et utilisé avec le titre "Ma section" et le contenu "Ceci est le contenu de ma section.".



