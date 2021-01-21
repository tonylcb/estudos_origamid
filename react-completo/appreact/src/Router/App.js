import React from 'react';

const Eventos = () => {
  function handleClick(event) {
    console.log(event.target);
  }
  return (
    <div>
      <button onClick={handleClick} onMouseMove={handleClick}>
        Clique
      </button>
      <button onClick={(event) => alert(event.target.innerText)}>Clique</button>
    </div>
  );
};

export default Eventos;
