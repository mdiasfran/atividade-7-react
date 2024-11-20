import React, { useState, useEffect } from 'react';

const AlteracaoCorFundo = () => {
  const [corFundo, setCorFundo] = useState('#FFFFFF'); // estado para armazenar a cor de fundo

  const mudarCor = () => {
    const corAleatoria = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // gera uma cor aleatória
    setCorFundo(corAleatoria);
  };

  useEffect(() => {
    document.body.style.backgroundColor = corFundo;
  }, [corFundo]); // executa toda vez que a cor de fundo mudar

  return (
    <div>
      <button onClick={mudarCor}>Mudar Cor de Fundo</button>
    </div>
  );
};

export default AlteracaoCorFundo;
