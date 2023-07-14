/* eslint-disable jest/no-mocks-import */
import { GameContext, TGameContext } from './context/game-context';
import { configure, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { loosingContextValue, tiedGameContextValue, winingContextValue, winingContextValueWithTwoPositions } from './__mocks__/context';

import App from './App';
import Game from './page/game-screen';
import React from 'react';
import userEvent from '@testing-library/user-event';

configure({ asyncUtilTimeout: 3100 });



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

test('when a game is tied the bet amount is returned to the player', async () => {
  renderGame(tiedGameContextValue);
  let Tie = await screen.findByText('Tie')
  await expect(Tie).toBeInTheDocument()

  expect(screen.getByTestId('bet')).toHaveTextContent('500')
  expect(screen.getByTestId('winAmount')).toHaveTextContent('0')
  expect(screen.getByTestId('balance')).toHaveTextContent('5,000')
})


test('Player can tie a game and the bet amount is returned to the balance', async () => {
  renderGame(tiedGameContextValue);
  let Tie = await screen.findByText('Tie')
  await expect(Tie).toBeInTheDocument()

  expect(screen.getByTestId('bet')).toHaveTextContent('500')
  expect(screen.getByTestId('winAmount')).toHaveTextContent('0')
  expect(screen.getByTestId('balance')).toHaveTextContent('5,000')
})


test('Loss bets are not returned to the player', async () => {
  renderGame(loosingContextValue);
  let lossText = await screen.findByText('Scissors')
  await expect(lossText).toBeInTheDocument()

  expect(screen.getByTestId('bet')).toHaveTextContent('500')
  expect(screen.getByTestId('winAmount')).toHaveTextContent('0')
  expect(screen.getByTestId('balance')).toHaveTextContent('4,500')
})

test('Player can win a game and the win amount is 14x if they choose one position', async () => {
  renderGame(winingContextValue);
  let winText = await screen.findByText('You Win')
  await expect(winText).toBeInTheDocument()

  expect(screen.getByTestId('bet')).toHaveTextContent('500')
  expect(screen.getByTestId('winAmount')).toHaveTextContent('7,000')
  expect(screen.getByTestId('balance')).toHaveTextContent('4,500')
})

test('Player can win a game and the win amount is 3x if they choose two positions', async () => {
  renderGame(winingContextValueWithTwoPositions);
  let winText = await screen.findByText('You Win')
  await expect(winText).toBeInTheDocument()

  expect(screen.getByTestId('bet')).toHaveTextContent('500')
  expect(screen.getByTestId('winAmount')).toHaveTextContent('1,500')
  expect(screen.getByTestId('balance')).toHaveTextContent('4,500')
})
