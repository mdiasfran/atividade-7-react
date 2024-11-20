
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [tempo, setTempo] = useState(0);
  const [tempoInicial, setTempoInicial] = useState(0);
  const [isPausado, setIsPausado] = useState(false);

  useEffect(() => {
    if (tempo > 0 && !isPausado) {
      const id = setInterval(() => setTempo((prev) => prev - 1), 1000);
      return () => clearInterval(id);
    } else if (tempo === 0) {
      alert('O tempo acabou!');
    }
  }, [tempo, isPausado]);

  const iniciarTimer = () => {
    setTempo(tempoInicial);
    setIsPausado(false);
  };

  const pausarTimer = () => setIsPausado(true);

  const reiniciarTimer = () => setTempo(tempoInicial);

  return (
    <div>
      <input
        type="number"
        value={tempoInicial}
        onChange={(e) => setTempoInicial(Number(e.target.value))}
        placeholder="Segundos"
      />
      <button onClick={iniciarTimer}>Iniciar</button>
      <button onClick={pausarTimer}>Pausar</button>
      <button onClick={reiniciarTimer}>Reiniciar</button>
      <h2>{tempo} segundos restantes</h2>
    </div>
  );
};

export default Timer;
