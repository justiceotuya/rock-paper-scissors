import { Action, State } from '../types';

import { getRandomPosition } from '../util';

export const initialState: State = {
    winAmount: 0,
    balance: 5000,
    betAmount: 0,
    playerPosition: [],
    computerPosition: null,
    isFirstGameRunning: false,
    isSecondGameRunning: false,
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
            console.log("action", action)
            return { ...state, computerPosition: action.payload };
        }
        case 'BETTING_DONE': {
            console.log("action", action)
            return { ...state };
        }
        case 'START_FIRST_GAME': {
            console.log("action", action)
            return { ...state, isFirstGameRunning: action.payload };
        }
        case 'START_SECOND_GAME': {
            console.log("action", action)
            return { ...state, isSecondGameRunning: action.payload };
        }
        case 'CLEAR_GAME': {
            return initialState;
        }
        case 'RESET_GAME': {
            return initialState;
        }
        default:
            return initialState;
    }
};
