import styled from 'styled-components';

import breakpoints from 'shared/styles/breakpoints';

const Grid = styled.div`
  width: 45vw;

  border: 1px solid var(--primary);
  padding: 1rem;
  justify-self: center;

  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${breakpoints.large}) {
    width: 80vw;
  }

  @media (max-width: ${breakpoints.medium}) {
    width: 90vw;
  }

  @media (max-width: ${breakpoints.small}) {
    width: 90vw;
  }
`;

export default Grid;
