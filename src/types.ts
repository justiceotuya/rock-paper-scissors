
export type TBetPosition = "Rock" | "Paper" | "Scissors";
export type TCardsArray = {
    betPosition: TBetPosition
    color: string;
}
type SelectedPosition = {
  position: TBetPosition;
  amount: number
}

export type State = {
    /**
     * The remaining balance that the player can stake
     */
    balance: string;
       /**
     * The cummulative bet amount rgardless of the number of poitions choosen
     */
    betAmount: string
       /**
     * The Amount won in bet round
     */
  winAmount: string
        /**
         * The player position stacked in the game, maximum of 2
         * */
  playerPosition: Array<SelectedPosition | SelectedPosition>
        /**
         * the computer position stacked in the game
         * */
  computerPosition: SelectedPosition
}
