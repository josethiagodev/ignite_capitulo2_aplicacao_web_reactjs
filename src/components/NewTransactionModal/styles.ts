import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  header.title-modal {
    position: relative;
    width: 100%;
    background: var(--purple-regular);
    padding: 1.1rem 2.5rem;
    border-radius: 0.75rem 0.75rem 0 0;

    h2 {
      width: auto;
      font-size: 1.3rem;
      font-weight: 600;
      color: var(--white);
    }
  }
  section.content-modal {
    width: 100%;
    padding: 2.5rem 2.5rem;

    input {
      display: block;
      width: 100%;
      height: 3.75rem;
      padding: 0 1.5rem;
      margin-bottom: 1rem;
      border-radius: 3rem;
      color: var(--text-body);
      border: 1px solid #d7d7d7;
      background-color: var(--white);
      font-size: 1.15rem;
      font-weight: 500;
    }

    button[type="submit"] {
      display: block;
      width: 100%;
      height: 3.4rem;
      padding: 0 1.5rem;
      border: 0;
      border-radius: 3rem;
      color: var(--white);
      background: linear-gradient(to right, var(--orange-light) 0%, var(--orange-medium) 50%, var(--orange-bold) 100%);
      font-size: 1.1rem;
      font-weight: 500;
      transition: filter 0.25s ease;

      &:hover {
        filter: brightness(0.9);
        background: linear-gradient(to left, var(--orange-light) 0%, var(--orange-medium) 50%, var(--orange-bold) 100%);
        
      }

    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin-bottom: 1rem;
  gap: 1rem;
`;

interface BtnTransactionProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33CC95',
  red: '#E52E4D'
};

export const BtnTransaction = styled.button<BtnTransactionProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.2rem;
  
  background: ${ (props) => props.isActive 
    ? transparentize(0.9, colors[props.activeColor])
    : 'transparent' 
  };

  border: 1px solid;
  border-color: ${darken(0.05, '#d7d7d7')};
  border-radius: 0.3rem;
  color: var(--text-title);
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${darken(0.25, '#d7d7d7')};
  }

  img {
    width: 21px;
    height: 21px;
    margin-right: 0.4rem;
  }

  span {
    display: inline-block;
  }
`;