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

1. **Importation de React:** Le code commence par importer la bibliothèque React en utilisant `import React from 'react';`.

2. **Composant fonctionnel:**
   - Le composant est défini comme une fonction nommée `Composants` qui prend deux paramètres : `title` et `content`.
   - Ces paramètres représentent les propriétés du composant qui peuvent être personnalisées lors de son utilisation.

3. **Retour JSX:**
   - La fonction `Composants` renvoie un élément JSX représentant l'interface utilisateur du composant.
   - Il contient un élément `h1` qui affiche le titre passé en tant que propriété `title` et un élément `p` qui affiche le contenu passé en tant que propriété `content`.

4. **Exportation par défaut:**
   - Le composant est exporté par défaut en utilisant `export default Composants;`. Cela signifie qu'il peut être importé et utilisé dans d'autres fichiers React.

**Utilisation dans une application React:**

```javascript
import Composants from './Composants'; // Assurez-vous de remplacer './Composants' par le chemin correct

function App() {
  return (
    <div>
      <Composants title="Titre personnalisé" content="Contenu personnalisé" />
    </div>
  );
}

export default App;
```


**Remarque:** 

* Vous pouvez modifier le contenu du composant pour inclure d'autres éléments HTML, comme des listes, des images, etc., en fonction de vos besoins.
* Assurez-vous que le chemin vers le fichier `Composants.js` est correct dans l'exemple d'utilisation.


