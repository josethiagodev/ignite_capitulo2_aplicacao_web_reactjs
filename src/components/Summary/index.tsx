import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from './styles';

export function Summary() {
  return (
    <Container>
      {/* Total de entradas */}
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Total de entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      
      {/* Total de saídas */}
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Total de saídas" />
        </header>
        <strong>R$ 500,00</strong>
      </div>

      {/* Saldo total */}
      <div className="totalBackground">
        <header>
          <p>Saldo total</p>
          <img src={totalImg} alt="Total de saldo" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  );
}