```jsx
import React from 'react';

const {{NomDuComposant}} = ({ title, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default {{NomDuComposant}};
```

**Explication:**

1. **Importation de React:** La ligne `import React from 'react';` importe la bibliothèque React nécessaire pour créer des composants.
2. **Définition du composant:**
   - `const {{NomDuComposant}} = ({ title, content }) => { ... };` définit un composant fonctionnel nommé {{NomDuComposant}}. 
   - Il accepte deux propriétés: `title` et `content` qui seront utilisées pour personnaliser le titre et le contenu affichés.
3. **Retour du JSX:** 
   - `return ( <div> <h2>{title}</h2> <p>{content}</p> </div> );` retourne un élément JSX qui représente l'interface utilisateur du composant. 
   - Il contient un élément `div` qui contient un élément `h2` affichant le titre passé comme propriété et un élément `p` affichant le contenu passé comme propriété.
4. **Exportation du composant:** 
   - `export default {{NomDuComposant}};` exporte le composant par défaut, ce qui permet de l'utiliser dans d'autres fichiers React.

**Utilisation:**

Pour utiliser ce composant dans une autre partie de votre application React, vous pouvez le faire de la manière suivante:

```jsx
import {{NomDuComposant}} from './{{NomDuComposant}}'; // Remplacez './{{NomDuComposant}}' par le chemin réel vers votre fichier

function App() {
  return (
    <div>
      <{{NomDuComposant}} title="Mon titre personnalisé" content="Mon contenu personnalisé" />
    </div>
  );
}
```

Ceci affichera le titre "Mon titre personnalisé" et le contenu "Mon contenu personnalisé" dans votre application.



