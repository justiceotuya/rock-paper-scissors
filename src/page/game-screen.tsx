
import Button from '../components/button';
import CardList from '../components/card-list';
import GamePlayView from '../components/game-play-view';
import HeaderStrip from '../components/header-strip';
import { useGame } from '../context/game-context';


const Game = () => {
    const { currentGameStep } = useGame();

    return (
        <main className='h-screen w-screen bg-gradient-to-b from-[#464646] via-[#363636] to-[#1F1F1F] flex flex-col justify-between'>
            <HeaderStrip />
            <GamePlayView />
            <div className='flex flex-col justify-center mb-[50px]'>
                {currentGameStep === "BETTING" && <p className='pb-5 text-sm font-medium text-center uppercase text-casino-gold'>Pick your positions</p>}
                <CardList />
                <Button />
            </div>
        </main>
    )
}

export default Game
