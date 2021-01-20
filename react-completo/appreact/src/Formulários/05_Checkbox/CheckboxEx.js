import React from 'react';
// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const CheckboxEx = () => {
  const [cores, setCores] = React.useState(false);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function checkColor(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      {coresArray.map((cor, index) => (
        <label key={index} style={{ textTransform: 'capitalize' }}>
          <input
            type="checkbox"
            value={cor + index}
            checked={checkColor(cor + index)}
            onChange={handleChange}
          />
          {cor}
        </label>
      ))}
    </form>
  );
};

export default CheckboxEx;
