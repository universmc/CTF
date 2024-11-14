```javascript
import React from 'react';

const NomDuComposant = ({ title, content }) => {
  return (
    <div>
      <h2>{title}</h2>
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
   - Il utilise des props déstructurées (`title` et `content`) pour recevoir les valeurs du titre et du contenu à afficher.

3. **Retour du composant:**
   - Le composant retourne un élément `div` qui contient:
     - Un élément `h2` affichant le titre (`{title}`).
     - Un élément `p` affichant le contenu (`{content}`).

4. **Exportation du composant:**
   - `export default NomDuComposant;` exporte le composant par défaut, ce qui signifie qu'il peut être importé et utilisé dans d'autres fichiers React.

**Utilisation dans une application React:**

```javascript
import NomDuComposant from './NomDuComposant'; // Remplacez 'NomDuComposant' par le nom réel du fichier

function App() {
  return (
    <div>
      <NomDuComposant title="Titre personnalisé" content="Contenu personnalisé" />
    </div>
  );
}
```



