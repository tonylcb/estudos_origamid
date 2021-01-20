import React from 'react';
import Radio from './Radio/Radio';
import Checkbox from './Checkbox/Checkbox';
import Input from './Input/Input';
import Select from './Select/Select';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [frutas, setFrutas] = React.useState('');
  const [linguagens, setLinguagens] = React.useState([]);
  const [termos, setTermos] = React.useState([]);

  return (
    <form>
      <h2>Termos</h2>
      <Checkbox
        options={['Li e aceito os termos.']}
        value={termos}
        setValue={setTermos}
      />
      <h2>Checkbox</h2>
      <Checkbox
        options={['Javascript', 'PHP', 'Ruby']}
        value={linguagens}
        setValue={setLinguagens}
      />
      <h2>Cores</h2>
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />
      <h2>Frutas</h2>
      <Radio
        options={['Laranja', 'Pêra', 'Limão']}
        value={frutas}
        setValue={setFrutas}
      />
      <Select
        options={['Smartphone', 'Tablet']}
        value={produto}
        setValue={setProduto}
      />
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
    </form>
  );
};

export default App;
