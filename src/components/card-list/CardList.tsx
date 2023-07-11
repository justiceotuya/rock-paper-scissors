import Card from '../card'
import React from 'react'
import { TCardsArray } from '../../types'

type Props = {}



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
    return <div>

        <div className='flex gap-3 h-[130px] justify-center'>
            {cardsArray.map(card => {
                return <Card {...card} />
            })}
        </div>
    </div>

}

export default CardList
