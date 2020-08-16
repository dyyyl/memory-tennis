import React, {useState} from 'react';

import Card from 'shared/components/Card';
import Grid from 'shared/components/Grid';
import Main from 'shared/components/Main';
import Title from 'shared/components/Title';

const App = (): JSX.Element => {
  const [cardContent, setCardContent] = useState([
    {
      id: 1,
      content: 1,
      isFlipped: false,
    },
    {
      id: 2,
      content: 2,
      isFlipped: false,
    },
    {
      id: 3,
      content: 3,
      isFlipped: false,
    },
    {
      id: 4,
      content: 4,
      isFlipped: false,
    },
    {
      id: 5,
      content: 5,
      isFlipped: false,
    },
    {
      id: 6,
      content: 6,
      isFlipped: false,
    },
    {
      id: 7,
      content: 7,
      isFlipped: false,
    },
    {
      id: 8,
      content: 8,
      isFlipped: false,
    },
    {
      id: 9,
      content: 9,
      isFlipped: false,
    },
  ]);

const updateCardFlipState = (index: number): void => {
  // replace isFlipped value for card[index]
  const card = cardContent[index];
  // set inverse on isFlipped for card [index]
  card.isFlipped = !card.isFlipped;

  // create new array and replace with card
  const newCardContent = Object.assign([], cardContent, { [index]: card });

  // set ☝🏾 to state
  setCardContent(newCardContent);
}
  
return (
  <Main>
    <Title>MEMORY TENNIS LET'S GO!</Title>
    <Grid>
      {cardContent.map((card, index) => (
        <Card
          key={card.id}
          onClick={() => updateCardFlipState(index)}
          showCardBack={card.isFlipped}
        >
          {card.content}
        </Card>
      ))}
    </Grid>
  </Main>
);
};

export default App;
