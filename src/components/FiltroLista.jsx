import React, { useState } from 'react';

const FiltroLista = () => {
  const [filtro, setFiltro] = useState(''); // Estado para armazenar o valor do filtro
  const nomes = ['Ana', 'Carlos', 'João', 'Maria', 'Pedro', 'Lucas']; 

  const nomesFiltrados = nomes.filter((nome) =>
    nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        placeholder="Filtrar nomes"
      />
      <ul>
        {nomesFiltrados.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default FiltroLista;
