import Card from '../card'
import { TCard } from '../../types'
import { useCallback } from 'react'
import { useGame } from '../../context/game-context'

const cardsArray: TCard[] = [{
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

const CardList = () => {
    const { playerPosition } = useGame()

    let getBetAmount = useCallback(
        (card: TCard) => {
            const position = playerPosition.find(selectedPosition => selectedPosition?.position === card.betPosition)
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
                />
            })}
        </div>
    </div>

}

export default CardList
