```jsx
import React from 'react';

function {{NomDuComposant}}(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

{{NomDuComposant}}.defaultProps = {
  title: 'Titre par défaut',
  content: 'Contenu par défaut',
};

export default {{NomDuComposant}};
```

**Explication:**

1. **Importation de React:** Le code commence par importer la bibliothèque React nécessaire pour créer des composants.
2. **Définition du composant:** La fonction `{{NomDuComposant}}` définit le composant React. Elle prend un objet `props` en argument, qui contient les propriétés personnalisées du composant.
3. **Retour JSX:** Le composant renvoie du code JSX, qui décrit l'interface utilisateur. Dans ce cas, il renvoie un élément `div` contenant un élément `h1` pour le titre et un élément `p` pour le contenu.
4. **Props:** Les valeurs des propriétés `title` et `content` sont extraites de l'objet `props` et affichées dans l'interface utilisateur.
5. **Props par défaut:**  L'objet `defaultProps` définit des valeurs par défaut pour les propriétés `title` et `content` si elles ne sont pas fournies lors de l'utilisation du composant.

**Utilisation:**

Pour utiliser le composant, vous pouvez l'importer dans un autre fichier React et l'utiliser comme suit :

```jsx
import {{NomDuComposant}} from './{{NomDuComposant}}';

function App() {
  return (
    <div>
      <{{NomDuComposant}} title="Mon titre personnalisé" content="Mon contenu personnalisé" />
    </div>
  );
}
```

Dans cet exemple, le composant `{{NomDuComposant}}` est utilisé avec des titres et un contenu personnalisés.



