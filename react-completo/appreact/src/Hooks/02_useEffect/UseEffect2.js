import React from 'react';
import Produto from './Produto';

const useEffect2 = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      {ativo && <Produto />}
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </div>
  );
};

export default useEffect2;
