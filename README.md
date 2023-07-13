# Rock, Paper Scissor
https://rock-paper-scissors-gray-theta.vercel.app/

This app is a Rock, Paper Scissor game, with the ability to bet on the winning position.

## Fatures
- Player starts with a balance of 5000.
- Each bet is 500 and you can not bet more than 2 positions per one game but can place multilple bets on at most two positions
- when you win a bet and you choose one position, you get 14X your stake but 3X your stake when you choose more than one position
- Bets with tie result are returned to player
- After round ends the return adds to the balance
- Player cannot bet if player has less balance than available for bet.

## Built with

- ⚛️ React 18
- ✨ TypeScript
- 💨 Tailwind CSS 3
- 🃏 Jest — Configured for unit testing

## How to play
- go to https://rock-paper-scissors-gray-theta.vercel.app/
- click /select one of the position
- click on the play button
- wait for computer to play and show you the result
- click on clear to continue a new game
- you can add more money to yout bet position by continuosly clicking on the position
- you can select two position and top them up by clicking on them
- when you select two positions, the first round with your first chosen position will go on and when it is done, you will see the button changes to `play second position`, click on it to play the second game. NB when the game is playing the bet reflects how much you stake on that current position

## Getting Started

### 1. Clone the repo:

```js
git clone https://github.com/justiceotuya/rock-paper-scissors
```

### 2. Install dependencies

```bash
cd rock-paper-scissors
yarn install
```

### 3. Run the development server

You can start the server using this command:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
