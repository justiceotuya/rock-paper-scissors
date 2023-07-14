import { TGameContext } from '../context/game-context';

export const mockContextValue: TGameContext = {
    balance: 5000,
    betAmount: 0,
    computerPosition: null,
    currentGameStep: 'BETTING',
    gameStage: 'GAME_0NE',
    gameOver: false,
    handlePickPosition: jest.fn(),
    playGame: jest.fn(),
    playSecondPosition: jest.fn(),
    playerPosition: [],
    restartGame: jest.fn(),
    clearGame: jest.fn(),
    winAmount: 0,
    playersBet: "Rock",
    winningPosition: null,
    playerWins: false,
};

export const tiedGameContextValue: TGameContext = {
    ...mockContextValue,
    winAmount: 0,
    betAmount: 500,
    balance: 5000,
    playerPosition: [
        {
            position: "Rock",
            amount: 500,
            played: true
        }
    ],
    computerPosition: "Rock",
    winningPosition: "Tie",
    playerWins: false,
    currentGameStep: "SHOW_WINNER"
}
export const winingContextValue: TGameContext = {
    ...tiedGameContextValue,
    winningPosition: "Paper",
    playerPosition: [
        {
            position: "Paper",
            amount: 500,
            played: true
        }
    ],
    playerWins: true,
    winAmount: 7000,
    balance: 4500
}
export const winingContextValueWithTwoPositions: TGameContext = {
    ...winingContextValue,
    playerPosition: [
        {
            position: "Paper",
            amount: 500,
            played: true
        },
        {
            position: "Rock",
            amount: 500,
            played: false
        },
    ],
    winAmount: 1500,
    balance: 4500
}
export const loosingContextValue: TGameContext = {
    ...tiedGameContextValue,
    winningPosition: "Scissors",
    playerWins: false,
    winAmount: 0,
    balance: 4500
}
