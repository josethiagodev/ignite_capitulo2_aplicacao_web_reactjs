import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  div {
    padding: 2rem;
    background: var(--white);
    border-radius: 0.7rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.1rem;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2.4rem;
      font-weight: 600;
      line-height: 2.4rem;
    }

    &.totalBackground { background: linear-gradient(var(--purple-light) 25%, var(--purple-regular) 75%) !important; color: var(--white); }
  }
`;