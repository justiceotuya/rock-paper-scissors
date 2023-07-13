import Game from './page/game-screen'
import { GameProvider } from './context/game-context'
import React from 'react'

export default function App() {


  return (
    <GameProvider>
      <Game />
    </GameProvider>
  )
}
