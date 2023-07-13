import React from 'react'
import { fomartCurrency } from '../../util'
import { useGame } from '../../context/game-context'

const HeaderStrip = () => {
    const { betAmount, winAmount, balance } = useGame()
    return (
        <header className='flex items-center justify-center gap-20 py-2 font-bold bg-casino-black-light text-casino-gold'>
            <p className='flex gap-1 uppercase' data-testid="balance">
                <span >Balance:</span><span className="text-white">{fomartCurrency(balance)}</span>
            </p>
            <p data-testid="bet" className='flex gap-1 uppercase'>
                <span>Bet:</span><span className="text-white">{fomartCurrency(betAmount)}</span>
            </p>
            <p data-testid="winAmount" className='flex gap-1 uppercase'>
                <span>Win:</span><span className="text-white">{fomartCurrency(winAmount)}</span>
            </p>
        </header>
    )
}

export default HeaderStrip
