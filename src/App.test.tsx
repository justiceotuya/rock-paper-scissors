import { GameContext, TGameContext } from './context/game-context';
import { configure, fireEvent, render, screen, waitFor } from '@testing-library/react';

import App from './App';
import Game from './page/game-screen';
import React from 'react';
import { TBetPosition } from './types';
import userEvent from '@testing-library/user-event';

configure({ asyncUtilTimeout: 3100 });

const mockContextValue: TGameContext = {
  balance: 5000,
  betAmount: 0,
  computerPosition: null,
  currentGameStep: 'BETTING',
  gameStage: 'GAME_0NE',
  gameOver: false,
  handlePickPosition: jest.fn(),
  playGame: jest.fn(),
  playSecondPosition: jest.fn(),
  playerPosition: [],
  restartGame: jest.fn(),
  clearGame: jest.fn(),
  winAmount: 0,
  playersBet: "Rock",
  winningPosition: null,
  playerWins: false
};

function renderGame(value: TGameContext) {
  return render(
    <GameContext.Provider value={value}>
      <Game />
    </GameContext.Provider>
  );
}

test('renders App', async () => {
  render(<App />);

  expect(screen.getByTestId('balance')).toHaveTextContent('Balance')
  expect(screen.getByTestId('Rock_button')).toHaveTextContent('Rock')
  expect(screen.getByTestId('play_button')).toHaveTextContent('play')
});

test('Player starts with a balance of 5000', async () => {
  render(<App />);
  await screen.findByTestId('balance')
  expect(screen.getByTestId('balance')).toHaveTextContent('5,000')
})

test('Each bet should be 500 and players can place several bets on any position but not more that two position', async () => {
  render(<App />);
  //click the rock button
  await fireEvent.click(screen.getByTestId('Rock_button'))
  const rockButton = await screen.findByTestId('Rock_button')
  await expect(rockButton).toHaveTextContent('500')

  //click the paper button
  await fireEvent.click(screen.getByTestId('Paper_button'))
  const paperButton = await screen.findByTestId('Paper_button')
  await expect(paperButton).toHaveTextContent('500')

  //click the rock button again and expect that the bet amount increases by multiple of 500
  await userEvent.dblClick(screen.getByTestId('Paper_button'))
  await expect(paperButton).toHaveTextContent('1,500')


  //click the scissors button and ecpect that the button does not have the text 500
  await fireEvent.click(screen.getByTestId('Scissors_button'))
  const scissorsButton = await screen.findByTestId('Scissors_button')
  await expect(scissorsButton).not.toHaveTextContent('500')
})


test('The bet is reduced from the balance.', async () => {
  //render app
  render(<App />);
  //get balance
  expect(screen.getByTestId('balance')).toHaveTextContent('5,000')
  //click rock button
  await fireEvent.click(screen.getByTestId('Rock_button'))
  //get balance again expect balance to be reduced by 500
  expect(screen.getByTestId('balance')).toHaveTextContent('4,500')
  expect(screen.getByTestId('bet')).toHaveTextContent('500')
})
