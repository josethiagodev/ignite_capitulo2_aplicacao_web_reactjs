import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 3.5rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    text-align: left;

    th {
      padding: 1rem 1.5rem;
      color: var(--text-title);
      font-size: 1rem;
      font-weight: 600;
      line-height: normal;
      border: 0;
      background-color: rgba(0, 0, 0, 0.045);
    }

    td {
      font-size: 1rem;
      font-weight: 400;
      padding: 1.15rem 1.5rem;
      line-height: normal;
      border: 0;
      border-radius: 0.35rem;
      background: var(--white);
      color: var(--text-body);

      &:first-child {
        color: var(--text-title);
      }

      &.deposit { color: var(--text-green); font-size: 1.05rem; font-weight: 600; }
      &.withdraw { color: var(--text-red); font-size: 1.05rem; font-weight: 600; }
    }
  }
`;