import styled from 'styled-components';

import breakpoints from 'shared/styles/breakpoints';

interface StyleProps {
  showCardBack: boolean;
}

const Card = styled.section<StyleProps>`
  width: 100%;
  height: calc((45vw - 2rem) / 4);

  border: 1px solid var(--primary);
  background-color: ${({ showCardBack }) =>
    showCardBack ? 'var(--primary)' : 'var(--white)'};

  color: ${({ showCardBack }) =>
    showCardBack ? 'var(--white)' : 'var(--primary)'};

  display: grid;
  place-content: center;

  transition: transform 0.8s;

  transform: ${({ showCardBack }) => showCardBack && `rotateY(180deg)`};

  @media (max-width: ${breakpoints.large}) {
    height: calc((80vw - 2rem) / 4);
  }

  @media (max-width: ${breakpoints.medium}) {
    height: calc((90vw - 2rem) / 4);
  }

  @media (max-width: ${breakpoints.small}) {
    height: calc((95vw - 2rem) / 4);
  }

  &:hover {
    background-color: var(--primary);
    color: var(--white);

    cursor: pointer;
  }
`;

export default Card;
