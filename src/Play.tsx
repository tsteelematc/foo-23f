import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { FC } from 'react';
import { GameResult } from './game-results';

interface PlayProps {
    addNewGameResult: (r: GameResult) => void
}

export const Play: FC<PlayProps> = ({addNewGameResult}) => {

    const nav = useNavigate();

    return (
        <>
        <h3>
            Play &amp; Collect Data
        </h3>
        <Button
            variant="outlined"
            size="large"
            onClick={
                () => {
                    addNewGameResult(true);
                    nav(-2);
                }
            }
        >
            I Won
        </Button>
        <Button
            variant="outlined"
            size="large"
            onClick={
                () => {
                    addNewGameResult(false);
                    nav(-2);
                }
            }
        >
            I Lost
        </Button>
        </>
    );
};