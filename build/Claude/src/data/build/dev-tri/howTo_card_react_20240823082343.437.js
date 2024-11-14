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

**Remplacez `{{NomDuComposant}}` par le nom que vous souhaitez donner à votre composant.**

**Utilisation:**

```jsx
import {{NomDuComposant}} from './{{NomDuComposant}}'; // Modifier le chemin si nécessaire

function App() {
  return (
    <div>
      <{{NomDuComposant}} title="Mon titre personnalisé" content="Mon contenu personnalisé" />
    </div>
  );
}
```

**Explication:**

* Le composant utilise la fonction `React.createElement` pour créer un élément `div` qui contient un élément `h2` pour le titre et un élément `p` pour le contenu.
* Les propriétés `title` et `content` sont des props qui peuvent être personnalisées lorsque le composant est utilisé.
* Le composant est exporté par défaut afin qu'il puisse être utilisé dans d'autres fichiers.



