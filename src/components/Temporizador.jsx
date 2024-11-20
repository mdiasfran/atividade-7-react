import React, { useState, useEffect } from 'react';

const Temporizador = () => {
  const [tempo, setTempo] = useState(0);
  const [isPausado, setIsPausado] = useState(false);
  const [intervalo, setIntervalo] = useState(null);

  useEffect(() => {
    if (!isPausado) {
      const id = setInterval(() => {
        setTempo((prev) => prev + 1);
      }, 1000);
      setIntervalo(id);
      return () => clearInterval(id); // Limpar o intervalo ao desmontar o componente
    }
    return () => clearInterval(intervalo); // Limpar o intervalo quando pausado
  }, [isPausado]);

  const pausar = () => setIsPausado(true);
  const reiniciar = () => {
    setTempo(0);
    setIsPausado(false);
  };

  return (
    <div>
      <h2>Tempo: {tempo} segundos</h2>
      <button onClick={() => setIsPausado(false)}>Iniciar</button>
      <button onClick={pausar}>Pausar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
};

export default Temporizador;
