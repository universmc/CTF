##  Comment comprendre React.rendering 

**Introduction:**

Ce guide vous aidera à comprendre React.rendering, un outil puissant pour le développement d'applications React. Il est conçu pour les débutants et les utilisateurs intermédiaires qui souhaitent apprendre à utiliser React.rendering pour debugger et analyser le rendu de leurs composants React.

React.rendering est un objet qui permet d'accéder à des informations précieuses sur le processus de rendu de React, comme les composants rendues, les props transmis et les événements déclenchés. 

**Prérequis:**

* Connaissance de base de React et de ses concepts clés (composants, props, state, JSX).
* Familier avec la console du navigateur et la lecture de logs.

**Étapes:**

1. **Utiliser `React.render`:**
   * React.render est la fonction principale utilisée pour rendre un composant React dans le DOM. 
   * Il peut être utilisé pour rendre un composant unique ou un arbre de composants.
   * Voici un exemple simple:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return <h1>Hello, world!</h1>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

2. **Configurer le rendu pour l'utilisation de `React.rendering`:**
   * Pour utiliser `React.rendering`, vous devez configurer le rendu en utilisant l'option `onCommitFiberRoot` dans `ReactDOM.render`. 
   * Cette option prend une fonction qui sera appelée après que le composant a été rendu.

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />,
  {
    onCommitFiberRoot(fiberRoot) {
      console.log(React.rendering); // Accédez aux informations de rendu
    }
  }
);
```

3. **Explorer les informations de rendu:**
   * `React.rendering` est un objet qui contient des informations sur le rendu actuel, telles que:
      * `current`: Le composant actuellement rendu.
      * `previous`: Le composant précédent rendu.
      * `props`: Les props transmis au composant.
      * `type`: Le type de composant rendu.
      * `state`: L'état du composant.
      * `child`: Les enfants du composant.

   * Vous pouvez utiliser ces informations pour debugger et analyser le rendu de vos composants.

**Conseils:**

* Utilisez `React.rendering` avec parcimonie, car il peut avoir un impact sur les performances.
* Ajoutez des logs spécifiques pour les informations que vous souhaitez analyser.
* Utilisez des outils de développement comme React Developer Tools pour visualiser le rendu de vos composants.

**Ressources supplémentaires:**

* [Documentation officielle de React](https://reactjs.org/docs/react-api.html#reactrender)
* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkohenffap)



