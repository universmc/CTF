```jsx
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

* **Importation de React:** Le code commence par importer la bibliothèque React.
* **Composant fonctionnel:** `Composants` est un composant fonctionnel qui prend deux propriétés : `title` et `content`.
* **Affichage du titre et du contenu:** Le composant utilise les propriétés `title` et `content` pour afficher un titre `<h1>` et un paragraphe `<p>`.
* **Exportation par défaut:** Le composant est exporté par défaut, ce qui signifie qu'il peut être utilisé dans d'autres fichiers en utilisant `import Composants from './Composants';`.

**Utilisation du composant:**

```jsx
import Composants from './Composants';

const App = () => {
  return (
    <div>
      <Composants title="Mon titre" content="Mon contenu" />
    </div>
  );
};
```

Dans cet exemple, le composant `Composants` est utilisé avec le titre "Mon titre" et le contenu "Mon contenu". Vous pouvez modifier ces valeurs pour personnaliser l'affichage du composant.



