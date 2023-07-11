import { TBetPosition, TCardsArray } from '../../types'

import React from 'react'

const cardsColorStyle = {
    'blue': 'bg-casino-blue-dark text-casino-blue-text border-casino-blue-light-2',
    'red': 'border-casino-red text-casino-red-text bg-casino-red-dark',
    'green': 'border-casino-green text-casino-green-text bg-casino-green-dark',
}

type ICard = TCardsArray & {
    betAmount: number
    handlePickPosition: (betPosition: TBetPosition) => void
}

const Card = (props: ICard) => {
    const { betPosition, color, betAmount, handlePickPosition } = props

    const handleClickButton = () => {
        handlePickPosition(betPosition)
    }
    return (
        <button onClick={handleClickButton} type="button" className={`${cardsColorStyle[color as keyof typeof cardsColorStyle]} border-[2px] rounded-md w-full max-w-[165px] flex flex-col items-center justify-end py-[15px] hover:opacity-60 scale-1 active:scale-95`}>
            {betAmount > 0 && <p className="border-4 border-casino-blue-light bg-white text-casino-black rounded-[50%] flex w-[45px] h-[45px] justify-center items-center text-sm font-bold mb-2.5">
                {betAmount}
            </p>}
            <p className="font-medium text-[22px] uppercase justify-self-end">
                {betPosition}
            </p>
        </button>
    )
}

export default Card
