import React from 'react';

const NomDuComposant = ({ title, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default NomDuComposant;

import NomDuComposant from './NomDuComposant';

const App = () => {
  return (
    <div>
      <NomDuComposant title="Mon titre" content="Mon contenu" />
    </div>
  );
};