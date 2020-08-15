import React from 'react';

import Card from 'shared/components/Card';
import Grid from 'shared/components/Grid';
import Main from 'shared/components/Main';
import Title from 'shared/components/Title';

const App = (): JSX.Element => (
  <Main>
    <Title>MEMORY TENNIS LET'S GO!</Title>
    <Grid>
      <Card>1</Card>
      <Card>2</Card>
      <Card>3</Card>
      <Card>4</Card>
      <Card>5</Card>
      <Card>6</Card>
      <Card>7</Card>
      <Card>8</Card>
      <Card>9</Card>
    </Grid>
  </Main>
);

export default App;
