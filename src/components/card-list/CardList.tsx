import React, { useCallback } from 'react'
import { SelectedPosition, TBetPosition, TCardsArray } from '../../types'

import Card from '../card'

type Props = {
    playerPosition: SelectedPosition[]
    handlePickPosition: (betPosition: TBetPosition) => void
}



const cardsArray: TCardsArray[] = [{
    betPosition: "Rock",
    color: 'blue'
}, {
    betPosition: "Paper",
    color: 'green'
}, {
    betPosition: "Scissors",
    color: 'red'
}
]

const CardList = (props: Props) => {
    const { playerPosition, handlePickPosition } = props

    let getBetAmount = useCallback(
        (card: TCardsArray) => {
            const position = playerPosition.find(selectedPosition => selectedPosition?.position === card.betPosition)
            // console.log({ position })
            return position?.amount ?? 0
        },
        [playerPosition],
    )



    return <div>
        <div className='flex gap-3 h-[130px] justify-center'>
            {cardsArray.map((card, idx) => {

                return <Card
                    key={idx} {...card}
                    betAmount={getBetAmount(card)}
                    handlePickPosition={handlePickPosition}
                />
            })}
        </div>
    </div>

}

export default CardList
