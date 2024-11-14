```jsx
import React from 'react';

function MyComponent({ title, content }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default MyComponent;
```

**Explication:**

1. **Importation de React:** `import React from 'react';` importe la bibliothèque React nécessaire pour créer des composants.

2. **Définition du composant fonctionnel:** `function MyComponent({ title, content }) { ... }` définit un composant fonctionnel nommé `MyComponent`. Il prend deux props : `title` et `content`.

3. **Retour JSX:** Le composant renvoie du code JSX qui représente l'interface utilisateur. Il affiche un titre `h2` avec la valeur de la prop `title` et un paragraphe `p` avec la valeur de la prop `content`.

4. **Exportation par défaut:** `export default MyComponent;` exporte le composant `MyComponent` par défaut, ce qui signifie qu'il peut être utilisé dans d'autres fichiers en utilisant `import MyComponent from './MyComponent';`.

**Utilisation dans une application React:**

```jsx
import MyComponent from './MyComponent';

function App() {
  return (
    <div>
      <MyComponent title="Mon titre" content="Voici mon contenu." />
    </div>
  );
}
```

Dans cet exemple, le composant `MyComponent` est utilisé avec les props `title` et `content` définies. Le titre affiché sera "Mon titre" et le contenu sera "Voici mon contenu.".



