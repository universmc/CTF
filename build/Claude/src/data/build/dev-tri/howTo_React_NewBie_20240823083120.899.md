```javascript
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

**Explication:**

1. **Importation de React:** Le code commence par importer la bibliothèque React en utilisant `import React from 'react';`.
2. **Composant fonctionnel:** La fonction `Header` est un composant fonctionnel qui prend deux propriétés comme paramètres: `title` et `content`.
3. **JSX:** Le composant retourne du JSX, un syntaxe d'écriture HTML simplifié qui peut être utilisé dans les composants React. 
4. **Éléments JSX:**
   - `<h1>`: Affiche le titre passé en tant que propriété `title`.
   - `<p>`: Affiche le contenu passé en tant que propriété `content`.
5. **Exportation par défaut:** Le composant `Header` est exporté par défaut en utilisant `export default Header;`. Cela signifie qu'il peut être importé et utilisé dans d'autres fichiers React comme suit:

```javascript
import Header from './Header'; // Remplacez './Header' par le chemin réel vers votre fichier

// Utilisation du composant
<Header title="Mon titre" content="Mon contenu ici" />
```

**Points importants:**

- Vous pouvez personnaliser le titre et le contenu du composant `Header` en passant des valeurs pour les propriétés `title` et `content` lors de sa création.
- Le composant `Header` est un composant générique et peut être utilisé dans n'importe quelle application React. Vous pouvez le modifier et l'adapter à vos besoins spécifiques en ajoutant des styles, des fonctionnalités ou des composants supplémentaires.



