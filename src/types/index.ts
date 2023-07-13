
export type TBetPosition = "Rock" | "Paper" | "Scissors";
export type TCard = {
  betPosition: TBetPosition
  color: string;
}
export type SelectedPosition = {
  position: TBetPosition;
  amount: number;
  played: boolean
}

export type TCurrentGameStep = 'BETTING' | 'PLAYING_GAME_ONE' | 'PLAYING_GAME_TWO' | 'SHOW_WINNER'

export type TGameStage = 'GAME_0NE' | 'GAME_TWO'
export type State = {
  /**
   * The remaining balance that the player can stake
   */
  balance: number;
  /**
* shows the total amount staked in the game before the game starts and changes to the bet amount for the current position
*/
  betAmount: number
  /**
* The Amount won in bet round
*/
  winAmount: number
  /**
   * The player position staked in the game, maximum of 2
   * */
  playerPosition: SelectedPosition[]
  /**
   * the computer position staked in the game
   * */
  computerPosition: TBetPosition | null
  /**
   * The current game step
   * */
  currentGameStep: TCurrentGameStep

  /**
   * the game stage useful when user selects more than on position it can either be GAME_0NE or GAME_TWO
   */
  gameStage: TGameStage

/**
 * the winning bet position after game is played
 */
  winningPosition: TBetPosition | 'Tie' | null

  /**
   * indicates if the player wins
   * */
  playerWins: boolean
}


export type Action = {
  type: 'PICK_POSITION';
  payload: TBetPosition
}
  | {
    type: 'GET_COMPUTERS_POSITION';
    payload: TBetPosition
  }
  | {
    type: 'UPDATE_GAME_STEP',
    payload: TCurrentGameStep
  }
  | {
    type: 'SHOW_WINNER',
    payload: { winningPosition?: TBetPosition | "Tie", playerWins?: boolean }
  }
  | {
    type: 'CLEAR_GAME'
  }
  | {
    type: 'RESTART_GAME'
  }
