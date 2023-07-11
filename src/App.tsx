import './App.css';

import CardList from './components/card-list';
import HeaderStrip from './components/header-strip';
import React from 'react';
import logo from './logo.svg';

export default function App() {
  return (
    <main className='h-screen w-screen bg-gradient-to-b from-[#464646] via-[#363636] to-[#1F1F1F] flex flex-col justify-between'>
      <HeaderStrip />
      <div className='flex flex-col justify-center mb-[50px]'>
        <p className='text-center text-casino-gold uppercase text-sm font-medium pb-5'>Pick your positions</p>
        <CardList />
        <button type="button" className="uppercase border-2 rounded-full border-casino-gold text-casino-gold font-semibold text-2xl bg-black flex px-5 py-3 w-[150px] justify-center m-auto mt-[70px] ">play</button>
      </div>
    </main>
  )
}
