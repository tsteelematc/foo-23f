import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { GameResult } from './foo-game-results';
import { FC, useState } from 'react';
import { Box } from '@mui/material';

interface PlayProps {
    addNewGameResult: (r: GameResult) => void;
    setTitle: (t: string) => void;
};

export const Play: FC<PlayProps> = ({
    addNewGameResult
    , setTitle
}) => {

    setTitle("Play Foo & Collect Data");

    const nav = useNavigate();

    const [startTimestamp, _] = useState(new Date().toISOString());

    // _("")

    // Could only destructure first item, but I like underscore convention to 
    // mean 'unused'.
    // const [startTimestamp] = useState(new Date().toISOString());

    const gameOver = (won: boolean) => {
        addNewGameResult({
            won: won
            , start: startTimestamp
            , end: new Date().toISOString()
        });
        nav(-2);
    };

    return (
        <Box
            sx={{ mt: 2 }}
        >
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
        </Box>
    );
};