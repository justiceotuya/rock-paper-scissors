import { useGame } from '../../context/game-context';
import { fomartCurrency } from '../../util';


const GamePlayView = () => {

    const {
        winAmount,
        computerPosition,
        winningPosition,
        playerWins,
        currentGameStep,
        gameOver,
        playersBet
    } = useGame();

    const showChosenPositions = (currentGameStep.includes("PLAYING_GAME")) && !winningPosition


    return (
        <div>
            {showChosenPositions && <div className='text-[40px]  h-full flex items-center text-white justify-center uppercase font-semibold '>
                <p className="flex items-baseline gap-8 ">
                    <span>{playersBet}</span>
                    <span className="text-[30px] text-casino-gold">Vs</span>
                    <span>{computerPosition} 🖥</span>
                </p>
            </div>}

            {winningPosition && <div className='text-[40px]  h-full flex items-center text-white justify-center uppercase font-semibold flex-col '>
                <p className="flex items-baseline gap-8 text-casino-green-text">
                    {winningPosition !== "Tie" && !playerWins && " 🖥 "}
                    {winningPosition} {winningPosition !== "Tie" && "Won"}
                </p>
                {playerWins && <p className="flex items-baseline gap-2 font-medium text-[22px] text-casino-gold">
                    You Win <span className='text-white'>{fomartCurrency(winAmount)}</span>
                </p>}
            </div>}

            {gameOver && <div className='text-[40px]  h-full flex items-center text-white justify-center uppercase font-semibold flex-col '>
                <p className="flex items-baseline gap-8 text-casino-red-text">
                    Game Over
                </p>
            </div>}

        </div>
    )
}

export default GamePlayView
