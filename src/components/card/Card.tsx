import React from 'react'
import { TCardsArray } from '../../types'

const cardsColorStyle = {
    'blue': 'bg-casino-blue-dark text-casino-blue-text border-casino-blue-light-2',
    'red': 'border-casino-red text-casino-red-text bg-casino-red-dark',
    'green': 'border-casino-green text-casino-green-text bg-casino-green-dark',
}

const Card = (props: TCardsArray) => {
    const { betPosition, color } = props
    return (
        <button type="button" className={`${cardsColorStyle[color as keyof typeof cardsColorStyle]} border-[2px] rounded-md w-full max-w-[165px] flex flex-col items-center justify-end py-[15px]`}>
            <p className="border-4 border-casino-blue-light bg-white text-casino-black rounded-[50%] flex w-[45px] h-[45px] justify-center items-center text-sm font-bold mb-2.5">
                500
            </p>
            <p className="font-medium text-[22px] uppercase justify-self-end">
                {betPosition}
            </p>
        </button>
    )
}

export default Card
