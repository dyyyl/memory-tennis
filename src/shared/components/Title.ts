import styled from 'styled-components';

import breakpoints from 'shared/styles/breakpoints';

const Title = styled.h1`
  font-size: 3vw;
  text-align: center;

  @media (max-width: ${breakpoints.medium}) {
    font-size: 4vw;
  }

  @media (max-width: ${breakpoints.small}) {
    font-size: 6vw;
  }
`;

export default Title;
