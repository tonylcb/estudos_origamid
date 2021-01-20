import React from 'react';

const Radio = () => {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  return (
    <form>
      <h2>Produtos</h2>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setProduto(target.value)}
          checked={produto === 'smartphone'}
          value="smartphone"
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setProduto(target.value)}
          checked={produto === 'tablet'}
          value="tablet"
        />
        Tablet
      </label>
      <h2>Cores</h2>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setCor(target.value)}
          checked={cor === 'branco'}
          value="branco"
        />
        Branco
      </label>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setCor(target.value)}
          checked={cor === 'preto'}
          value="preto"
        />
        Preto
      </label>
    </form>
  );
};

export default Radio;
