import React from 'react'

type Props = {
    betAmount: number
    winAmount: number
    balance: number
}

const HeaderStrip = (props: Props) => {
    const { betAmount, winAmount, balance } = props
    return (
        <header className='bg-casino-black-light text-casino-gold flex items-center justify-center gap-20 font-bold py-2'>
            <p className='flex gap-1 uppercase'>
                <span>Balance:</span><span className="text-white">{balance}</span>
            </p>
            <p className='flex gap-1 uppercase'>
                <span>Bet:</span><span className="text-white">{betAmount}</span>
            </p>
            <p className='flex gap-1 uppercase'>
                <span>Win:</span><span className="text-white">{winAmount}</span>
            </p>
        </header>
    )
}

export default HeaderStrip
