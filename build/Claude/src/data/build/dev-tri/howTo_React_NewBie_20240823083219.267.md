```javascript
import React from 'react';

function Header({ title, content }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{content}</p>
    </header>
  );
}

export default Header;
```

**Explication :**

1. **Importation de React:**
   - `import React from 'react';` importe la bibliothèque React nécessaire pour créer des composants.

2. **Fonction composant `Header`:**
   - `function Header({ title, content }) { ... }` définit un composant fonctionnel nommé `Header`.
   - Il accepte deux propriétés : `title` et `content`, qui seront utilisées pour afficher le titre et le contenu respectifs.

3. **Retour JSX:**
   - Le composant retourne un élément `header` contenant :
     - Un élément `h1` affichant la valeur de la propriété `title`.
     - Un élément `p` affichant la valeur de la propriété `content`.

4. **Exportation par défaut:**
   - `export default Header;` exporte le composant `Header` par défaut, ce qui permet de l'utiliser dans d'autres fichiers en utilisant `import Header from './votreFichier.js';`.

**Utilisation dans une application React:**

```javascript
import Header from './Header'; // Assurez-vous que './Header' est le chemin correct vers votre fichier Header.js

function App() {
  return (
    <div>
      <Header title="Mon Titre" content="Mon Contenu" /> 
    </div>
  );
}

export default App;
```

Dans cet exemple, `Header` est utilisé avec les propriétés `title` et `content` définies comme "Mon Titre" et "Mon Contenu" respectivement.



