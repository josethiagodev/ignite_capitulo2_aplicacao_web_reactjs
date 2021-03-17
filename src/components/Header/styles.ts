import styled from 'styled-components';

export const Container = styled.header`
  max-width: 100%;
  background: var(--purple-medium);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 0 9rem 0;
  background: var(--purple-medium);

  img { height: 47px; }
  button {
    cursor: pointer;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: auto;
    height: 2.4rem;
    padding: 0 1.5rem;
    background: rgba(555, 555, 555, 0.15);
    color: var(--white);
    font-size: 0.85rem;
    border-radius: 35px;
    transition: filter 0.2s;
    /* Estado hover */
    &:hover { filter: brightness(0.9) }
  }
`;
