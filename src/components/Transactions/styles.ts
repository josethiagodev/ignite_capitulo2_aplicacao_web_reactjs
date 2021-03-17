import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 3.5rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    text-align: left;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 0.85rem 2rem;
      line-height: 1rem;
    }

    td {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      line-height: 1.5rem;
      border: 0;
      border-radius: 0.35rem;
      background: var(--white);
      color: var(--text-body);

      &:first-child {
        color: var(--text-title);
      }

      &.positive { color: var(--text-green); font-weight: 600; }
      &.negative { color: var(--text-red); font-weight: 600; }
    }
  }
`;