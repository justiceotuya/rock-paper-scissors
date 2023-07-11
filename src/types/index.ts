
export type TBetPosition = "Rock" | "Paper" | "Scissors";
export type TCardsArray = {
  betPosition: TBetPosition
  color: string;
}
export type SelectedPosition = {
  position: TBetPosition;
  amount: number;
  played: boolean
}

export type State = {
  /**
   * The remaining balance that the player can stake
   */
  balance: number;
  /**
* The cummulative bet amount rgardless of the number of poitions choosen
*/
  betAmount: number
  /**
* The Amount won in bet round
*/
  winAmount: number
  /**
   * The player position stacked in the game, maximum of 2
   * */
  playerPosition: SelectedPosition[]
  /**
   * the computer position stacked in the game
   * */
  computerPosition: TBetPosition | null

  /**
   * first game round if the user only selects one position
   */
  isFirstGameRunning: boolean

  /**
 * first game round if the user  selects two positions
 */
  isSecondGameRunning: boolean
}


export type Action = { type: 'PICK_POSITION'; payload: TBetPosition }
  | { type: 'BETTING_DONE' } | { type: 'GET_COMPUTERS_POSITION'; payload: TBetPosition }
  | { type: 'CLEAR_GAME' }
  | { type: 'RESET_GAME' }
  | { type: 'START_FIRST_GAME', payload: boolean }
  | { type: 'START_SECOND_GAME', payload: boolean }
