import React, { useState } from 'react';

import Contador from './components/Contador';
import AlteracaoCorFundo from './components/AlteracaoCorFundo';
import ListaTarefas from './components/ListaTarefas';
import Temporizador from './components/Temporizador';
import FiltroLista from './components/FiltroLista';
import FormularioRegistro from './components/FormularioRegistro';
import RequisicaoDados from './components/RequisicaoDados';
import GaleriaImagens from './components/GaleriaImagens';
import Timer from './components/Timer';
import TabsNavegaveis from './components/TabsNavegaveis';

import './App.css';

const App = () => {
  const [componenteAtivo, setComponenteAtivo] = useState('contador');

  const renderComponente = () => {
    switch (componenteAtivo) {
      case 'contador':
        return <Contador />;
      case 'alteracaoCorFundo':
        return <AlteracaoCorFundo />;
      case 'listaTarefas':
        return <ListaTarefas />;
      case 'temporizador':
        return <Temporizador />;
      case 'filtroLista':
        return <FiltroLista />;
      case 'formularioRegistro':
        return <FormularioRegistro />;
      case 'requisicaoDados':
        return <RequisicaoDados />;
      case 'galeriaImagens':
        return <GaleriaImagens />;
      case 'timer':
        return <Timer />;
      case 'tabsNavegaveis':
        return <TabsNavegaveis />;
      default:
        return <Contador />;
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Selecione a atividade:</h1>
        <div className="nav-buttons">
          <button onClick={() => setComponenteAtivo('contador')}>Contador</button>
          <button onClick={() => setComponenteAtivo('alteracaoCorFundo')}>Alteração de Cor de Fundo</button>
          <button onClick={() => setComponenteAtivo('listaTarefas')}>Lista de Tarefas</button>
          <button onClick={() => setComponenteAtivo('temporizador')}>Temporizador</button>
          <button onClick={() => setComponenteAtivo('filtroLista')}>Filtro de Lista</button>
          <button onClick={() => setComponenteAtivo('formularioRegistro')}>Formulário de Registro</button>
          <button onClick={() => setComponenteAtivo('requisicaoDados')}>Requisição de Dados</button>
          <button onClick={() => setComponenteAtivo('galeriaImagens')}>Galeria de Imagens</button>
          <button onClick={() => setComponenteAtivo('timer')}>Timer</button>
          <button onClick={() => setComponenteAtivo('tabsNavegaveis')}>Tabs Navegáveis</button>
        </div>
      </header>

      <main className="app-content">
        {renderComponente()}
      </main>
    </div>
  );
};

export default App;
