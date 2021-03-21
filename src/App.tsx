import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';

import { TransactionsProvider } from './hooks/useTransactions';

import { GlobalStyle } from "./styles/global";

// Acessibilidade do 'Modal Transaction'
Modal.setAppElement('#root');

export function App() {
  // Iniciando 'Modal Transaction'
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  // Abrindo/mostrando 'Modal Transaction'
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  // Fechando 'Modal Transaction'
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
