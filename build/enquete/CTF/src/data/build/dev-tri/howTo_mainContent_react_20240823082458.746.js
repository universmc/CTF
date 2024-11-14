```javascript
import React from 'react';

const Composants = ({ title, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Composants;
```

**Explication:**

1. **Importation de React:** Le code commence par importer la bibliothèque React.
2. **Composant fonctionnel:** `Composants` est un composant fonctionnel qui prend deux props : `title` et `content`.
3. **Retour JSX:** Le composant retourne un élément JSX représentant un div contenant un élément `h1` pour le titre et un élément `p` pour le contenu. Les valeurs des props `title` et `content` sont utilisées pour afficher le titre et le contenu respectifs.
4. **Exportation par défaut:** Le composant est exporté par défaut, ce qui signifie qu'il peut être importé et utilisé dans d'autres fichiers React en utilisant `import Composants from './Composants';`.

**Utilisation du composant:**

```javascript
import Composants from './Composants';

const App = () => {
  return (
    <div>
      <Composants title="Mon titre" content="Mon contenu ici" />
    </div>
  );
};
```

Dans cet exemple, le composant `Composants` est utilisé avec les props `title` et `content` définies. Cela affichera le titre "Mon titre" et le contenu "Mon contenu ici" sur la page.



