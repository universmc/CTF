```javascript
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
   - Les accolades `{}` contiennent la logique du composant.
   - `({ title, content })`  déclare les props (propriétés) que le composant peut recevoir : 
     - `title`:  le titre à afficher.
     - `content`: le contenu à afficher.

3. **Retour JSX:**
   - `return ( ... );`  renvoie un élément JSX (JavaScript XML) qui représente l'interface utilisateur du composant.
   - Dans cet exemple, il renvoie un `div` contenant un `h3` pour le titre et un `p` pour le contenu. Les valeurs de `title` et `content` sont insérées dans les éléments respectifs.

4. **Exportation par défaut:**
   - `export default NomDuComposant;`  rend le composant exportable et utilisable dans d'autres fichiers.

**Utilisation dans une application React:**

```javascript
import NomDuComposant from './NomDuComposant'; // Remplacez './NomDuComposant' par le chemin correct vers votre fichier

function App() {
  return (
    <div>
      <NomDuComposant title="Mon Titre" content="Mon Contenu" />
    </div>
  );
}
```



Remplacez `{{NomDuComposant}}`, `{{Titre}}`, et `{{Contenu}}` par les valeurs souhaitées. 



