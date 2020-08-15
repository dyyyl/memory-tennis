import styled from 'styled-components';

import breakpoints from 'shared/styles/breakpoints';

const Card = styled.section`
  width: 100%;
  height: calc((45vw - 2rem) / 3);

  border: 1px solid var(--primary);

  display: grid;
  place-content: center;

  @media (max-width: ${breakpoints.medium}) {
    height: calc((60vw - 2rem) / 3);
  }

  @media (max-width: ${breakpoints.small}) {
    height: calc((90vw - 2rem) / 3);
  }

  &:hover {
    background-color: var(--primary);
    color: var(--white);

    cursor: pointer;
  }
`;

export default Card;
