import ICard from 'types';

/**
 * shuffle array of cards
 * @param array array of cards to be shuffled
 */
const shuffleCards = (array: Array<ICard>): Array<ICard> =>
  array.sort(() => Math.random() - 0.5);

export default shuffleCards;
