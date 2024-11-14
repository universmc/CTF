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

1. **Importation de React:** Le code commence par importer la bibliothèque React nécessaire pour créer des composants.

2. **Composant fonctionnel:** `Composants` est défini comme un composant fonctionnel qui prend deux propriétés : `title` et `content`.

3. **Rendu du composant:** Le composant renvoie un élément `div` contenant :
   - Un élément `h2` affichant la valeur de la propriété `title`.
   - Un élément `p` affichant la valeur de la propriété `content`.

4. **Exportation par défaut:** Le composant `Composants` est exporté par défaut, ce qui signifie qu'il peut être importé et utilisé dans d'autres fichiers React en utilisant `import Composants from './Composants';`.

**Utilisation dans une application React:**

```jsx
import Composants from './Composants'; // Assurez-vous que le chemin est correct

function App() {
  return (
    <div>
      <Composants title="Bienvenue sur mon site !" content="Ceci est le contenu principal de la page." />
    </div>
  );
}

export default App;
```

Dans cet exemple, le composant `Composants` est utilisé avec le titre "Bienvenue sur mon site !" et le contenu "Ceci est le contenu principal de la page.".



