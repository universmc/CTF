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

**Explication du code:**

* **`import React from 'react';`**: Importe le module React nécessaire pour créer des composants.
* **`const Composants = ({ title, content }) => { ... }`**: Définit un composant fonctionnel nommé `Composants`. Il accepte deux props : `title` et `content`.
* **`return ( ... )`**: Renvoie le JSX qui représente l'interface utilisateur du composant.
* **`<h1>{title}</h1>`**: Affiche le titre passé en tant que prop `title` en utilisant un élément `h1`.
* **`<p>{content}</p>`**: Affiche le contenu passé en tant que prop `content` en utilisant un élément `p`.
* **`export default Composants;`**: Exporte le composant `Composants` par défaut, ce qui signifie qu'il peut être importé et utilisé dans d'autres fichiers React.

**Utilisation du composant:**

```jsx
import Composants from './Composants'; // Assurez-vous de remplacer './Composants' par le chemin correct vers votre fichier

function App() {
  return (
    <div>
      <Composants title="Mon Titre" content="Mon Contenu" />
    </div>
  );
}
```

Dans cet exemple, le composant `Composants` est utilisé avec le titre "Mon Titre" et le contenu "Mon Contenu".


