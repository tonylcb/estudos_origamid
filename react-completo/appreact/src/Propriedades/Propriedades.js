import React from 'react';

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto}, {children}
    </h1>
  );
};

const Propriedades = () => {
  return (
    <div>
      <Titulo cor="red" texto="Meu título 1">
        Isso é o children
        <p>Teste</p>
      </Titulo>
      <Titulo cor="blue" texto="Meu título 2" />
    </div>
  );
};

export default Propriedades;
