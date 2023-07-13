import React, { useCallback, useContext, useMemo } from 'react';
import { State, TBetPosition } from '../types';
import { getRandomPosition, getWiningPosition } from '../util';
import { initialState, reducer } from '../store/reducer';

export type TGameContext = State & {
    gameOver: boolean
    playGame: () => void
    playSecondPosition: () => void
    handlePickPosition: (betPosition: TBetPosition) => void
    clearGame: () => void
    restartGame: () => void
    playersBet: TBetPosition

}
export const GameContext = React.createContext(initialState as TGameContext)
export const GameProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const { winAmount, balance, playerPosition
        , computerPosition, currentGameStep, gameStage } = state;


    const gameOver = useMemo(() => {
        //the game is over if the balance is less than 500 and the player has played the last game
        return currentGameStep === "SHOW_WINNER" && (balance + winAmount) < 500 && playerPosition[playerPosition.length - 1]?.played
    }, [balance, currentGameStep, playerPosition, winAmount])

    const handlePickPosition = useCallback((betPosition: TBetPosition) => {
        dispatch({ type: 'PICK_POSITION', payload: betPosition })
    }, [dispatch])

    const playersBet = useMemo(() => {
        if (gameStage === "GAME_0NE") {
            return playerPosition[0]?.position
        } else if (gameStage === "GAME_TWO") {
            return playerPosition[1]?.position
        }
        return playerPosition[0]?.position
    }, [gameStage, playerPosition])

    const playGame = useCallback(() => {
        const _playersBet = playerPosition[0]?.position
        //set currentGameStep
        dispatch({ type: 'UPDATE_GAME_STEP', payload: 'PLAYING_GAME_ONE' })
        //get computersPosition
        const _computersPosition = getRandomPosition()
        // const _computersPosition = 'Rock'

        const _winningPosition = getWiningPosition(_playersBet, _computersPosition)

        const _playerWins = _winningPosition !== "Tie" && _winningPosition === _playersBet
        dispatch({ type: 'GET_COMPUTERS_POSITION', payload: _computersPosition })
        //set computers position in storage

        setTimeout(() => {
            dispatch({ type: 'SHOW_WINNER', payload: { winningPosition: _winningPosition, playerWins: _playerWins } })
        }, 3000);
    }, [playerPosition])


    const playSecondPosition = useCallback(() => {

        dispatch({ type: 'UPDATE_GAME_STEP', payload: "PLAYING_GAME_TWO" })

        const _playersBet = playerPosition[1]?.position
        //play the second game with already guessed computer position
        const _winningPosition = getWiningPosition(_playersBet, computerPosition as TBetPosition)

        const _playerWins = _winningPosition !== "Tie" && _winningPosition === _playersBet

        setTimeout(() => {
            dispatch({ type: 'SHOW_WINNER', payload: { winningPosition: _winningPosition, playerWins: _playerWins } })
        }, 3000);
    }, [computerPosition, playerPosition])


    const clearGame = () => {
        dispatch({ type: 'CLEAR_GAME' })
    }

    const restartGame = () => {
        dispatch({ type: 'RESTART_GAME' })
    }

    const value = {
        ...state,
        gameOver,
        playGame,
        playSecondPosition,
        handlePickPosition,
        clearGame,
        restartGame,
        playersBet
    }

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
}

export const useGame = () => {
    const context = useContext(GameContext);
    if (context === undefined) {
        throw new Error("useGame must be used within GameContext");
    }

    return context;
}
