import React, { useCallback, useEffect, useState } from 'react';

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
  const [matchedCards, setMatchedCards] = useState<Array<ICard>>([]);

  // memoize card-matched values
  const isCardMatched = useCallback(
    (card: ICard): boolean => {
      return isCardFlipped(card, matchedCards);
    },
    [matchedCards],
  );

  const cardIsVisible = (card: ICard): boolean =>
    isCardFlipped(card, flippedCards) || isCardMatched(card);

  const updateCardFlipState = (index: number, card: ICard): void => {
    // if card is flipped or matched, or if two cards are already flipped, do nothing
    if (cardIsVisible(card) || flippedCards.length === 2) return;

    // yeet card @ [index]
    const flippedCard = cards[index];
    // set ☝🏾 to state
    setFlippedCards([...flippedCards, flippedCard]);
  };

  useEffect(() => {
    if (
      flippedCards.length === 2 && // if there are two flipped cards,
      flippedCards[0].id === flippedCards[1].id //  and they match,
    ) {
      setMatchedCards((m) => [...m, ...flippedCards]); // add to matched Array
    }

    if (flippedCards.length === 2) {
      // unflip all cards after a second
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
            onClick={() => updateCardFlipState(index, card)}
            showCardBack={cardIsVisible(card)}
          >
            {cardIsVisible(card) ? card.content : ''}
          </Card>
        ))}
      </Grid>
    </Main>
  );
};

export default App;
