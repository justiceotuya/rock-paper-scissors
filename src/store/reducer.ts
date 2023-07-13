import { Action, State } from '../types';

export const initialState: State = {
    winAmount: 0,
    balance: 5000,
    betAmount: 0,
    playerPosition: [],
    computerPosition: null,
    gameStage: "GAME_0NE",
    winningPosition: null,
    playerWins: false,
    currentGameStep: 'BETTING',
};
export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'PICK_POSITION': {

            //get the position of the selected position in the playerPosition array
            const positionIndex = state.playerPosition.findIndex((item) => item?.position === action.payload);

            //if the balance is less than 500, the player cannot bet
            if (state.balance < 500) {
                return state;
            }

            //if the player has already selected two positions and the selected position is not in the array, the player cannot bet
            if (state.playerPosition.length === 2 && positionIndex === -1) {
                return state;
            }

            //if the player has not selected any position, the player can bet 500
            if (state.playerPosition.length === 0) {
                return {
                    ...state,
                    playerPosition: [({ position: action.payload, amount: 500, played: false })],
                    balance: state.balance - 500,
                    betAmount: state.betAmount + 500
                }


            } else {
                //if the player has selected a position and the selected position is not in the array, the player can bet 500
                if (positionIndex === -1) {
                    return {
                        ...state,
                        playerPosition: [...state.playerPosition, { position: action.payload, amount: 500, played: false }],
                        balance: state.balance - 500, betAmount: state.betAmount + 500
                    }
                } else {
                    //if the player has selected a position and the selected position is in the array, the player can increase the bet amount by 500
                    return {
                        ...state,
                        playerPosition: state.playerPosition.map((item, index) => {
                            if (index === positionIndex) {
                                return { ...item, amount: item.amount + 500 }
                            } else {
                                return item
                            }
                        }),
                        balance: state.balance - 500, betAmount: state.betAmount + 500
                    }
                }
            }
        }
        case 'GET_COMPUTERS_POSITION': {

            let newPlayerPosition = state.playerPosition.map((item, index) => {
                if (index === 0) {
                    return { ...item, played: true }
                } else if (state.playerPosition[0]?.played === true) {
                    return { ...item, played: true }
                }
                return item
            })


            return {
                ...state, computerPosition: action.payload, playerPosition: newPlayerPosition
            }
        }

        case 'UPDATE_GAME_STEP': {
            if (action.payload === 'PLAYING_GAME_ONE') {
                return {
                    ...state, currentGameStep: action.payload,
                    gameStage: "GAME_0NE",
                    betAmount: state.playerPosition[0].amount,
                };
            }
            if (action.payload === 'PLAYING_GAME_TWO') {
                return {
                    ...state, currentGameStep: action.payload,
                    winningPosition: null,
                    playerWins: false,
                    gameStage: "GAME_TWO",
                    betAmount: state.playerPosition[1].amount,
                };
            }
            return { ...state, currentGameStep: action.payload };
        }
        case 'SHOW_WINNER': {
            const { payload, type } = action
            if (payload?.winningPosition === "Tie") {
                const returnBalance = state.balance + state.betAmount
                return { ...state, winningPosition: payload?.winningPosition, balance: returnBalance, currentGameStep: 'SHOW_WINNER' }
            } else {
                if (!payload?.playerWins) {
                    return { ...state, winningPosition: payload?.winningPosition ?? null, currentGameStep: 'SHOW_WINNER' }
                }
                //if the user selects more than one position, win bonus is 3 else win bonus is 14
                const winBonus = state.playerPosition.length > 1 ? 3 : 14
                const currentbetAmount = state.gameStage === "GAME_0NE" ? state.playerPosition[0].amount : state.playerPosition[1].amount
                const winAmount = currentbetAmount * winBonus
                return { ...state, winningPosition: payload?.winningPosition ?? null, winAmount, currentGameStep: 'SHOW_WINNER', playerWins: payload.playerWins }
            }
        }

        case 'CLEAR_GAME': {
            return { ...state, ...initialState, balance: state.balance + state.winAmount, gameStage: 'GAME_0NE' };
        }
        case 'RESTART_GAME': {
            return {
                ...state, ...initialState
            }
        }
        default:
            return initialState;
    }
};
