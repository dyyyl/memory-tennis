import React from 'react';

import Card from 'shared/components/Card';
import Grid from 'shared/components/Grid';
import Main from 'shared/components/Main';
import Title from 'shared/components/Title';

const App = (): JSX.Element => {
  const cardContent: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Main>
      <Title>MEMORY TENNIS LET'S GO!</Title>
      <Grid>
        {cardContent.map((card: number, i: number) => (
          <Card key={i}>{card}</Card>
        ))}
      </Grid>
    </Main>
  );
};

export default App;
