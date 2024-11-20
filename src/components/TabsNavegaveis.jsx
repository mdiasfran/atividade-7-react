import React, { useState } from 'react';

const TabsNavegaveis = () => {
  const [abaAtiva, setAbaAtiva] = useState(0); 

  return (
    <div>
      <div>
        <button onClick={() => setAbaAtiva(0)} style={{ fontWeight: abaAtiva === 0 ? 'bold' : 'normal' }}>Sobre</button>
        <button onClick={() => setAbaAtiva(1)} style={{ fontWeight: abaAtiva === 1 ? 'bold' : 'normal' }}>Contato</button>
      </div>

      <div>
        {abaAtiva === 0 && <p>Conteúdo sobre a empresa...</p>}
        {abaAtiva === 1 && <p>Conteúdo de contato...</p>}
      </div>
    </div>
  );
};

export default TabsNavegaveis;
