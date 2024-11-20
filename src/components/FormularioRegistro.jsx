import React, { useState } from 'react';

const FormularioRegistro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !email || !senha) {
      alert('Por favor, preencha todos os campos!');
    } else {
      setMensagem(`Bem-vindo(a), ${nome}!`);
    }
  }; // função que vai ser chamada quando o formulário for submetido

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha"
        />
        <button type="submit">Registrar</button>
      </form>
      {mensagem && <h3>{mensagem}</h3>}
    </div>
  );
};

export default FormularioRegistro;
