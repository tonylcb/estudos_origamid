import React from 'react';
import Input from '../Componentes/Input/Input';

const Validate = () => {
  const [cpf, setCpf] = React.useState('');
  const [error, setError] = React.useState('');

  function validateCpf(value) {
    if (value.length === 0) {
      setError('Preencha seu CPF');
      return false;
    } else if (!/^\d{3}.?\d{3}.?\d{3}-?\d{2}$/.test(value)) {
      setError('Preencha um CPF válido');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    validateCpf(target.value);
  }

  function handleChange({ target }) {
    if (error) validateCpf(target.value);
    setCpf(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateCpf(cpf)) {
      console.log('Enviou');
    } else {
      console.log('Não enviou');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="cpf"
        label="CPF"
        type="text"
        placeholder="000.000.000-00"
        value={cpf}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );
};

export default Validate;
