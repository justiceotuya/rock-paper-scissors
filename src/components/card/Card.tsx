import { TCard } from '../../types'
import { fomartCurrency } from '../../util'
import { useGame } from '../../context/game-context'

const cardsColorStyle = (color: string, isWinningPosition: boolean) => {

    switch (color) {
        case 'blue':
            return `bg-casino-blue-dark text-casino-blue-text border-casino-blue-light-2 ${isWinningPosition ? "border-[5px] border-casino-blue-text" : "border-[2px]"}`
        case 'red':
            return `border-casino-red text-casino-red-text bg-casino-red-dark ${isWinningPosition ? "border-[5px] border-casino-red-text" : "border-[2px]"}`
        case 'green':
            return `border-casino-green text-casino-green-text bg-casino-green-dark ${isWinningPosition ? "border-[5px] border-casino-green-text" : "border-[2px]"}`
        default:
            return '';
    }
}

type ICard = TCard & {
    betAmount: number
}


const Card = (props: ICard) => {
    const { betPosition, color, betAmount, } = props
    const { winningPosition, currentGameStep, playersBet, handlePickPosition } = useGame()

    const isWinningPosition = winningPosition === betPosition

    const showBetAmount = () => {
        if (currentGameStep === "BETTING") {
            return betAmount > 0
        } else return betAmount > 0 && playersBet === betPosition
    }

    return (
        <button data-testid={`${betPosition}_button`} onClick={() => handlePickPosition(betPosition)} type="button" className={`${cardsColorStyle(color, isWinningPosition)}   rounded-md w-full max-w-[165px] flex flex-col items-center justify-end py-[15px] hover:opacity-60 scale-1 active:scale-95 disabled:cursor-not-allowed disabled:pointer-events-none`} disabled={currentGameStep !== "BETTING"}>
            {showBetAmount() && <p className="border-4 border-casino-blue-light bg-white text-casino-black rounded-[50%] flex min-w-[45px] px-1 h-[45px] justify-center items-center text-sm font-bold mb-2.5 ">
                {fomartCurrency(betAmount)}
            </p>}
            <p className="font-medium text-[22px] uppercase justify-self-end">
                {betPosition}
            </p>
        </button>
    )
}

export default Card
