```jsx
import React from 'react';

function NomDuComposant({ title, content }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default NomDuComposant;
```

**Explications:**

1. **Importation de React:** 
   - `import React from 'react';` importe la bibliothèque React nécessaire pour créer des composants.

2. **Définition du composant:** 
   - `function NomDuComposant({ title, content }) { ... }` définit un composant fonctionnel nommé `NomDuComposant`. 
   - Il accepte deux propriétés : `title` et `content`, qui seront utilisées pour afficher le titre et le contenu du composant.

3. **Retour du composant:** 
   - `return ( ... );` renvoie un élément JSX qui représente l'interface utilisateur du composant. 
   - Dans cet exemple, il renvoie un `div` contenant un `h2` pour le titre et un `p` pour le contenu.

4. **Utilisation des propriétés:** 
   - `{title}` et `{content}` sont utilisés pour insérer la valeur des propriétés transmises au composant dans le JSX.

5. **Exportation du composant:** 
   - `export default NomDuComposant;` exporte le composant par défaut, ce qui signifie qu'il peut être importé et utilisé dans d'autres fichiers React.

**Utilisation du composant:**

```jsx
import NomDuComposant from './NomDuComposant'; // Remplacer './NomDuComposant' par le chemin réel

function App() {
  return (
    <div>
      <NomDuComposant title="Mon titre" content="Mon contenu ici" />
    </div>
  );
}
```

Dans cet exemple, `NomDuComposant` est utilisé avec les propriétés `title` et `content` définies. Le titre "Mon titre" et le contenu "Mon contenu ici" seront affichés dans l'interface utilisateur.

N'oubliez pas de remplacer `{{NomDuComposant}}` et `{{Titre}}` par le nom réel de votre composant et le titre souhaité.
