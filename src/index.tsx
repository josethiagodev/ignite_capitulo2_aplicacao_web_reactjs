import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from "miragejs";
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    // GET = Rota de buscar/listar itens
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: '',
          amount: 400,
          type: 'deposito',
          category: 'Entrega',
          createdAt: new Date(),
        }
      ]
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
