import { TBetPosition } from '../types';
import { useMemo } from 'react';

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

/**
 *
 * @returns a random position from the array of positions for the computer
 */
export const getRandomPosition = (): TBetPosition => {
    const positions: TBetPosition[] = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * positions.length);
    return positions[randomIndex];
}


export const fomartCurrency = (amount: number): string => {
    return new Intl.NumberFormat().format(amount)
}


export const useMemoizedContextValue = <T extends Record<string, any>>(object: T) => {
    const value = useMemo<T>(() => object, Object.values(object));
    return value
}
