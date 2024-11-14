```jsx
import React from 'react';

const Header = ({ title, content }) => {
  return (
    <header>
      <h1>{title}</h1>
      <p>{content}</p>
    </header>
  );
};

export default Header;
```

**Explication du code:**

1. **Importation de React:**
   - `import React from 'react';` importe la bibliothèque React nécessaire pour créer des composants.

2. **Définition du composant Header:**
   - `const Header = ({ title, content }) => { ... };` définit un composant fonctionnel nommé `Header`.
   - Il utilise des props `title` et `content` pour recevoir les données à afficher.

3. **Retour du JSX:**
   - `return ( ... );` renvoie du JSX, qui est un mélange de syntaxe JavaScript et HTML.
   - L'élément `header` est utilisé pour encapsuler le titre et le contenu.
   - `<h1>{title}</h1>` affiche le titre passé en tant que prop.
   - `<p>{content}</p>` affiche le contenu passé en tant que prop.

4. **Exportation du composant:**
   - `export default Header;` exporte le composant `Header` par défaut, ce qui signifie qu'il peut être utilisé dans d'autres fichiers en utilisant `import Header from './Header';`.

**Utilisation du composant:**

```jsx
import Header from './Header';

const App = () => {
  return (
    <div>
      <Header title="Mon Titre" content="Mon Contenu" />
    </div>
  );
};
```

Dans cet exemple, `Header` est utilisé avec les props `title` et `content` définis. Le titre "Mon Titre" et le contenu "Mon Contenu" seront affichés dans le composant `Header`.



