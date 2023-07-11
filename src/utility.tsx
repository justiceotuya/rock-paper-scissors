import { TBetPosition } from './types';

/**
 * function that takes in two positions and returns the winning position or a tie
 * @param position1 Rock, Paper or Scissors
 * @param position2  Rock, Paper or Scissors
 * @returns the wining position or Tie
 * @example getWiningPosition('Rock', 'Paper') //returns 'Paper'
 * @example getWiningPosition('Rock', 'Rock') //returns 'Tie'
 */
export const getWiningPosition = (position1: TBetPosition, position2: TBetPosition): TBetPosition | 'Tie' => {

    const RockVsPaper = ['Rock', 'Paper'];
    const RockVsScissors = ['Rock', 'Scissors'];
    const PaperVsScissors = ['Paper', 'Scissors'];

    //if both positions are the same, it's a tie
    if (position1 === position2) return 'Tie';
    //if both positions include rock and paper, paper wins
    if (RockVsPaper.includes(position1) && RockVsPaper.includes(position2)) return 'Paper';
    //if both positions include rock and scissors, rock wins
    if (RockVsScissors.includes(position1) && RockVsScissors.includes(position2)) return 'Rock';
    //if both positions include paper and scissors, scissors wins
    if (PaperVsScissors.includes(position1) && PaperVsScissors.includes(position2)) return "Scissors";
    return 'Tie';

}
