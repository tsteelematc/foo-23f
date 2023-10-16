import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { GameResult } from './foo-game-results';
import { FC } from 'react';
import { start } from 'repl';

interface PlayProps {
    addNewGameResult: (r: GameResult) => void;
    startTimestamp: string;
};

export const Play: FC<PlayProps> = ({
    addNewGameResult
    , startTimestamp
}) => {

    const nav = useNavigate();

    const gameOver = (won: boolean) => {
        addNewGameResult({
            won: won
            , start: startTimestamp
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