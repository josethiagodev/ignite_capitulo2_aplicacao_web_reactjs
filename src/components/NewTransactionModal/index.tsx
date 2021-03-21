import Modal from "react-modal";
import { FormEvent, useState } from "react";

import { api } from "../../services/api";

import { Container, TransactionTypeContainer, BtnTransaction } from "./styles";

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  // Estado com os dados do formulário de 'Transaction'
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  
  // Estado do 'tipo de transação' (Entrada/Saída)
  const [type, setType] = useState('deposit');

  // Quando enviar dados do formulário de 'Transaction'
  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const dataTransaction = {
      title, value, category, type,
    };

    api.post('/transactions', dataTransaction)
  }
  
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose} 
      overlayClassName="react-modal-overlay" 
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <header className="title-modal">
          <h2>Nova entrega</h2>
          <button type="button" className="btn-close-modal" onClick={onRequestClose}>
            <img src={closeImg} alt="Fechar Modal Entrega"/>
          </button>
        </header>

        <section className="content-modal">
          <input 
            placeholder="Titulo" 
            value={title} 
            onChange={event => setTitle(event.target.value)}
          />
          
          <input 
            type="number" 
            placeholder="Valor da entrega (R$)" 
            value={value} 
            onChange={event => setValue(Number(event.target.value))}
          />

          <TransactionTypeContainer>
            <BtnTransaction 
              type="button" 
              onClick={() => { setType('deposit'); }}
              isActive={type === 'deposit'} 
              activeColor="green"
            >
              <img src={incomeImg} alt="Botão de Entrada"/>
              <span>Entrada</span>
            </BtnTransaction>

            <BtnTransaction 
              type="button" 
              onClick={() => { setType('withdraw'); }} 
              isActive={type === 'withdraw'} 
              activeColor="red"
            >
              <img src={outcomeImg} alt="Botão de Saída"/>
              <span>Saída</span>
            </BtnTransaction>
          </TransactionTypeContainer>

          <input 
            type="text" 
            placeholder="Categoria" 
            value={category} 
            onChange={event => setCategory(event.target.value)}
          />

          <button type="submit">Cadastrar agora</button>
        </section>
      </Container>
    </Modal>
  );
}