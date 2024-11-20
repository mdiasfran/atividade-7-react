import React, { useState } from 'react';

const GaleriaImagens = () => {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const imagens = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150/0000FF',
    'https://via.placeholder.com/150/FF0000', 
  ];

  return (
    <div>
      <div>
        {imagens.map((imagem, index) => (
          <img
            key={index}
            src={imagem}
            alt={`Imagem ${index + 1}`}
            onClick={() => setImagemSelecionada(imagem)}
            style={{ width: '100px', cursor: 'pointer', margin: '10px' }}
          />
        ))}
      </div>

      {imagemSelecionada && (
        <div>
          <div>
            <button onClick={() => setImagemSelecionada(null)}>Fechar</button>
          </div>
          <img
            src={imagemSelecionada}
            alt="Imagem Ampliada"
            style={{ width: '300px', display: 'block', margin: '20px auto' }}
          />
        </div>
      )}
    </div>
  );
};

export default GaleriaImagens;
