import logoMoovery from '../../assets/logotipo_moovery.svg';
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoMoovery} alt="Logotipo Moovery" />
        <button type="button">Add transação</button>
      </Content>
    </Container>
  );
}