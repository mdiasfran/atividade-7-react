import React, { useState } from 'react';

const ListaTarefas = () => {
  const [tarefas, setTarefas] = useState([]); // Array de tarefas
  const [tarefa, setTarefa] = useState(''); // Tarefa a ser adicionada
  const [tarefaConcluida, setTarefaConcluida] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa) {
      setTarefas([...tarefas, tarefa]);
      setTarefa('');
    }
  };

  const removerTarefa = (index) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  };

  const marcarConcluida = (index) => {
    setTarefaConcluida([...tarefaConcluida, index]);
  };

  return (
    <div>
      <input
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        placeholder="Adicionar nova tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li
            key={index}
            style={{
              textDecoration: tarefaConcluida.includes(index) ? 'line-through' : 'none',
            }}
          >
            {tarefa}
            <button onClick={() => removerTarefa(index)}>Remover</button>
            <button onClick={() => marcarConcluida(index)}>Concluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTarefas;
