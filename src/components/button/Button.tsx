import React, { useMemo } from 'react'

import { useGame } from '../../context/game-context';

type Props = {}

const Button = (props: Props) => {
    const {
        playerPosition,
        currentGameStep,
        gameStage,
        gameOver,
        playGame,
        playSecondPosition,
        clearGame,
        restartGame,
        winningPosition
    } = useGame();

    const buttonActionAndText = useMemo(() => {
        if (gameOver) {
            return {
                text: "restart", action: restartGame
            }
        }
        if (currentGameStep === "BETTING") {
            return { text: "play", action: playGame }
        } else if (currentGameStep === "SHOW_WINNER") {
            //check if first game has been played and the player bet two positions
            if (gameStage === 'GAME_0NE' && playerPosition.length > 1) {
                return { text: "play second position", action: playSecondPosition }
            } else {
                //we know that the player has only bet one position and the first game has been played
                return { text: "clear", action: clearGame }
            }
        }
        return { text: "play", action: playGame }
    }, [gameOver, currentGameStep, playGame, restartGame, gameStage, playerPosition.length, playSecondPosition, clearGame])



    const showChosenPositions = (currentGameStep.includes("PLAYING_GAME")) && !winningPosition

    const disableButton = showChosenPositions || (currentGameStep === "BETTING" && !playerPosition.length)

    const { text, action } = buttonActionAndText;

    return (
        <button data-testid="play_button" type="button" className="uppercase border-2 rounded-full border-casino-gold text-casino-gold font-semibold text-2xl bg-black flex px-5 py-3 min-w-[150px] justify-center m-auto mt-[70px] hover:opacity-60 scale-1 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:active:scale-1" onClick={action}
            disabled={disableButton}
        >{text}</button>
    )
}

export default Button
