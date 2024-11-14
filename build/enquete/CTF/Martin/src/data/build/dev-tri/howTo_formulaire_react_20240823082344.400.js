```jsx
import React from 'react';

function {{NomDuComposant}}({ title, content }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default {{NomDuComposant}};
```

**Explication:**

1. **Importation de React:** La ligne `import React from 'react';` importe la bibliothèque React nécessaire pour créer des composants.

2. **Définition du composant:** La fonction `{{NomDuComposant}}` définit le composant React. 
   - Elle prend deux propriétés: `title` et `content` qui seront utilisées pour afficher le titre et le contenu du composant.
   - La fonction renvoie un élément `<div>` qui contient un élément `<h3>` pour le titre et un élément `<p>` pour le contenu. Les valeurs des propriétés `title` et `content` sont utilisées pour afficher le contenu des éléments.

3. **Exportation du composant:** La ligne `export default {{NomDuComposant}};` exporte le composant par défaut, ce qui signifie qu'il peut être utilisé dans d'autres fichiers React en utilisant `import {{NomDuComposant}} from './chemin/vers/votre/composant';`.

**Utilisation du composant:**

```jsx
import {{NomDuComposant}} from './{{NomDuComposant}}.js';

function App() {
  return (
    <div>
      <{{NomDuComposant}} title="Titre personnalisé" content="Contenu personnalisé" />
    </div>
  );
}
```

Dans cet exemple, le composant `{{NomDuComposant}}` est utilisé avec le titre "Titre personnalisé" et le contenu "Contenu personnalisé".

**Remplacez `{{NomDuComposant}}` par le nom que vous souhaitez donner à votre composant.**



