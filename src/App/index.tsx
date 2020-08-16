import React, { useEffect, useState } from 'react';

import Card from 'shared/components/Card';
import Grid from 'shared/components/Grid';
import Main from 'shared/components/Main';
import Title from 'shared/components/Title';

import deck from 'shared/mocks/deck';

interface Card {
  id: number;
  content: string;
}

const App = (): JSX.Element => {
  const [cards, setCardCards] = useState<Array<Card>>(deck);

  const [flippedCards, setFlippedCards] = useState<Array<Card>>([]);

  const isCardFlipped = (card: Card): boolean => flippedCards.includes(card);

  const updateCardFlipState = (index: number): void => {
    if (flippedCards.length === 2) return;
    // replace isFlipped value for card[index]
    const card = cards[index];
    // set ☝🏾 to state
    setFlippedCards([...flippedCards, card]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  }, [flippedCards]);

  return (
    <Main>
      <Title>MEMORY TENNIS LET'S GO!</Title>
      <Grid>
        {cards.map((card, index) => (
          <Card
            key={card.id}
            onClick={() => updateCardFlipState(index)}
            showCardBack={isCardFlipped(card)}
          >
            {isCardFlipped(card) ? card.content : ''}
          </Card>
        ))}
      </Grid>
    </Main>
  );
};

export default App;
