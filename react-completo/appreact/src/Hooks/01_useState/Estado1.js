import React from 'react';

const Estado1 = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'Tony', idade: '29' });

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'Possui Faculdade' });
  }

  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>;
    </div>
  );
};

export default Estado1;
