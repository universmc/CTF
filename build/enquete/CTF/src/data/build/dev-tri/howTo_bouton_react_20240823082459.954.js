```javascript
import React from 'react';

const Composants = ({ title, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Composants;
```

**Explication du Code:**

* **Importation de React:** La ligne `import React from 'react';` importe la bibliothèque React nécessaire pour créer des composants.
* **Fonction Composant:** La fonction `Composants` est un composant fonctionnel React. Elle accepte deux propriétés : `title` et `content`.
* **Retour JSX:** La fonction retourne du JSX, qui est un mélange de JavaScript et d'HTML. Le JSX représente la structure visuelle du composant.
* **Affichage du Titre et du Contenu:**
    * `<h1>{title}</h1>` affiche le titre passé en tant que propriété `title`.
    * `<p>{content}</p>` affiche le contenu passé en tant que propriété `content`.
* **Exportation par Défaut:** `export default Composants;` exporte le composant `Composants` par défaut, ce qui signifie qu'il peut être utilisé dans d'autres fichiers en utilisant `import Composants from './Composants';`.

**Utilisation du Composant:**

Pour utiliser le composant `Composants` dans une autre partie de votre application React, vous pouvez le faire comme suit:

```javascript
import Composants from './Composants'; // Assurez-vous que le chemin est correct

function MyComponent() {
  return (
    <div>
      <Composants title="Mon Titre" content="Mon Contenu" />
    </div>
  );
}
```

Dans cet exemple, le composant `Composants` est utilisé avec le titre "Mon Titre" et le contenu "Mon Contenu".



