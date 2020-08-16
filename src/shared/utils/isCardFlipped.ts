import ICard from 'types';

/**
 * check if card has been flipped or not
 * @param card to be checked
 */
const isCardFlipped = (card: ICard, flippedCards: Array<ICard>): boolean =>
  flippedCards.includes(card);

export default isCardFlipped;
