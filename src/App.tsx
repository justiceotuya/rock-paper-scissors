import './App.css';

import React, { useCallback, useMemo, useReducer } from 'react';
import { initialState, reducer } from './store/reducer';

import CardList from './components/card-list';
import HeaderStrip from './components/header-strip';
import { TBetPosition } from './types';
import { getRandomPosition } from './util';

export default function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { betAmount, winAmount, balance, playerPosition
    , computerPosition, isFirstGameRunning,
    isSecondGameRunning } = state;

  const showChosenPositions = isFirstGameRunning
    || isSecondGameRunning

  const handlePickPosition = useCallback((betPosition: TBetPosition) => {
    dispatch({ type: 'PICK_POSITION', payload: betPosition })
  }, [dispatch])

  const handleGetComputersPosition = () => {
    dispatch({ type: 'GET_COMPUTERS_POSITION', payload: getRandomPosition() })
    dispatch({ type: 'START_FIRST_GAME', payload: true })
  }

  const playerBet = useMemo(() => {
    return playerPosition[0]?.played ? playerPosition[1]?.position : playerPosition[0]?.position
  }, [playerPosition.length, playerPosition[0]?.played])




  return (
    <main className='h-screen w-screen bg-gradient-to-b from-[#464646] via-[#363636] to-[#1F1F1F] flex flex-col justify-between'>
      <HeaderStrip
        betAmount={betAmount}
        winAmount={winAmount}
        balance={balance}
      />
      {showChosenPositions && <div className='text-[40px]  h-full flex items-center text-white justify-center uppercase font-semibold '>
        <p className="flex items-baseline gap-8 ">
          <span>{playerBet}</span>
          <span className="text-[30px] text-casino-gold">Vs</span>
          <span>{computerPosition}</span>
        </p>
      </div>}
      <div className='flex flex-col justify-center mb-[50px]'>
        <p className='text-center text-casino-gold uppercase text-sm font-medium pb-5'>Pick your positions</p>
        <CardList
          playerPosition={playerPosition}
          handlePickPosition={handlePickPosition}
        />
        <button type="button" className="uppercase border-2 rounded-full border-casino-gold text-casino-gold font-semibold text-2xl bg-black flex px-5 py-3 w-[150px] justify-center m-auto mt-[70px] hover:opacity-60 scale-1 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:active:scale-1" onClick={handleGetComputersPosition}
          disabled={showChosenPositions}
        >play</button>
      </div>
    </main>
  )
}
