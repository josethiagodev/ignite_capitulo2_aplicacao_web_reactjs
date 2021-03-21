import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from "miragejs";
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Ifood - pagamento dos motoboys',
          type: 'deposit',
          category: 'entregas dos bebidas',
          amount: 5000,
          createdAt: new Date('20/03/2021 18:30:00'),
        },
        {
          id: 2,
          title: 'Zé Delivery - pagamento de motoboys',
          type: 'deposit',
          category: 'entregas de comidas',
          amount: 2500,
          createdAt: new Date('21/04/2021 13:00:00'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    // GET = Rota de buscar/listar transação
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    });

    // POST = Rota de criar transação
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      
      return schema.create('transaction', data)
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
