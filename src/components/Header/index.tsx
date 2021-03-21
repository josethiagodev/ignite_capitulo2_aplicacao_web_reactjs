import logoMoovery from '../../assets/logotipo_moovery.svg';

import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoMoovery} alt="Logotipo Moovery" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Add transação
        </button>
      </Content>
    </Container>
  );
}