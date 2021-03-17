import { Container } from './styles';

export function Transactions() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pagamento das entregas</td>
            <td className="positive">R$ 500</td>
            <td>Motoboys</td>
            <td>17/03/2021</td>
          </tr>
          <tr>
            <td>Pagamento das entregas</td>
            <td className="negative">- R$ 1.000</td>
            <td>Motoboys</td>
            <td>17/03/2021</td>
          </tr>
          <tr>
            <td>Pagamento das entregas</td>
            <td className="positive">R$ 2.000</td>
            <td>Motoboys</td>
            <td>17/03/2021</td>
          </tr>
          <tr>
            <td>Pagamento das entregas</td>
            <td className="negative">- R$ 2.000</td>
            <td>Motoboys</td>
            <td>17/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}