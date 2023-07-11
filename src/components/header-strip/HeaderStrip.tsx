import React from 'react'

type Props = {}

const HeaderStrip = (props: Props) => {
  return (
      <header className='bg-casino-black-light text-casino-gold flex items-center justify-center gap-20 font-bold py-2'>
          <p className='flex gap-1 uppercase'>
              <span>Balance:</span><span className="text-white">XXX</span>
          </p>
          <p className='flex gap-1 uppercase'>
              <span>Bet:</span><span className="text-white">XXX</span>
          </p>
          <p className='flex gap-1 uppercase'>
              <span>Win:</span><span className="text-white">XXX</span>
          </p>
    </header>
  )
}

export default HeaderStrip
