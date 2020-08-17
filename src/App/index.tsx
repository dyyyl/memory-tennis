import React, { useEffect, useState } from 'react';

import Card from 'shared/components/Card';
import Grid from 'shared/components/Grid';
import Main from 'shared/components/Main';
import Title from 'shared/components/Title';

import deck from 'shared/mocks/deck';

import isCardFlipped from 'shared/utils/isCardFlipped';
import shuffleCards from 'shared/utils/shuffleCards';

import ICard from 'types';

const App = (): JSX.Element => {
  // initialize with a shuffled deck of cards
  const [cards] = useState<Array<ICard>>([...shuffleCards(deck)]);
  const [flippedCards, setFlippedCards] = useState<Array<ICard>>([]);

  const updateCardFlipState = (index: number): void => {
    // if two cards are already flipped, do nothing
    if (flippedCards.length === 2) return;

    // yeet card @ [index]
    const card = cards[index];
    // set ☝🏾 to state
    setFlippedCards([...flippedCards, card]);
  };

  useEffect(() => {
    // if there are two flipped cards, unflip all cards after a second
    if (flippedCards.length === 2 && flippedCards[0].id === flippedCards[1].id) {
      console.log('match')
    } else if (flippedCards.length === 2) {
      console.log('no match');
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
            key={`${card.id}-${index}`}
            onClick={() => updateCardFlipState(index)}
            showCardBack={isCardFlipped(card, flippedCards)}
          >
            {isCardFlipped(card, flippedCards) ? card.content : ''}
          </Card>
        ))}
      </Grid>
    </Main>
  );
};

export default App;
