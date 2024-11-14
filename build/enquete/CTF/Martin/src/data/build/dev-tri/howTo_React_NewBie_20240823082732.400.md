```jsx
import React from 'react';

const NomDuComposant = ({ title, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default NomDuComposant;
```

**Explications:**

1. **Importation de React:**
   - `import React from 'react';` importe la bibliothèque React nécessaire pour créer des composants.

2. **Définition du composant:**
   - `const NomDuComposant = ({ title, content }) => { ... };` définit un composant fonctionnel nommé `NomDuComposant`.
   - Les propriétés `title` et `content` sont reçues via des paramètres de props (properties) et seront utilisées pour afficher le titre et le contenu du composant.

3. **Retour du composant:**
   - Le composant renvoie un élément `div` qui contient:
     - Un élément `h1` affichant le titre transmis via la propriété `title`.
     - Un élément `p` affichant le contenu transmis via la propriété `content`.

4. **Exportation par défaut:**
   - `export default NomDuComposant;` permet d'exporter le composant par défaut, ce qui signifie qu'il peut être importé et utilisé dans d'autres fichiers React.

**Utilisation dans une application React:**

```jsx
import NomDuComposant from './NomDuComposant'; // Assurez-vous de remplacer './NomDuComposant' par le chemin correct vers votre fichier

function App() {
  return (
    <div>
      <NomDuComposant title="Mon titre" content="Mon contenu" />
    </div>
  );
}
```

Dans cet exemple, le composant `NomDuComposant` est utilisé avec les propriétés `title` et `content` définies.



