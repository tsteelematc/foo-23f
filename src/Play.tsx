import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { GameResult } from './foo-game-results';
import { FC, useState } from 'react';

interface PlayProps {
    addNewGameResult: (r: GameResult) => void;
};

export const Play: FC<PlayProps> = ({addNewGameResult}) => {

    const nav = useNavigate();

    //
    // As local state...
    // . initialized once
    // . never call setStart so use underscore convention, i-o-g
    //
    const [start, _] = useState(new Date().toISOString());
    
    //
    // Demo that simple const doesn't work, cause our FC 
    // gets called more than once so games will always be 0s.
    //
    // const start = new Date().toISOString();
    // console.log('initialized start const', start);

    const gameOver = (won: boolean) => {
        // console.log('gameOver()', start);
        addNewGameResult({
            won: won
            , start: start
            , end: new Date().toISOString()
        });
        nav(-2);
    };

    return (
        <>
        <h3>
            Play &amp; Collect Data
        </h3>
        <Button
            variant="outlined"
            size="large"
            onClick={
                () => gameOver(true)
            }
        >
            I Won
        </Button>
        <Button
            variant="outlined"
            size="large"
            onClick={
                () => gameOver(false)
            }
        >
            I Lost
        </Button>
        </>
    );
};