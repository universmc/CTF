```jsx
import React from 'react';

function {{NomDuComposant}}({ title, content }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default {{NomDuComposant}};
```

**Utilisation dans une application React:**

```jsx
import {{NomDuComposant}} from './{{NomDuComposant}}';

function App() {
  return (
    <div>
      <{{NomDuComposant}} title="Mon titre" content="Mon contenu" />
    </div>
  );
}
```

**Explication:**

* Le composant est nommé `{{NomDuComposant}}`. Vous pouvez le remplacer par le nom souhaité.
* Il utilise la propriété `title` et `content` pour afficher le titre et le contenu fournis.
* Le composant utilise des éléments JSX pour afficher le titre et le contenu.
* Le composant est exporté par défaut pour qu'il puisse être utilisé dans d'autres fichiers.

**Remarques:**

* Vous pouvez personnaliser le style du composant en ajoutant des styles CSS.
* Vous pouvez ajouter d'autres propriétés au composant pour lui donner plus de fonctionnalités.



