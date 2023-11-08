import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { GameResult } from './foo-game-results';
import { FC, useEffect, useState } from 'react';
import { Box } from '@mui/material';

interface PlayProps {
    addNewGameResult: (r: GameResult) => void;
    setTitle: (t: string) => void;
    chosenPlayers: string[];
};

export const Play: FC<PlayProps> = ({
    addNewGameResult
    , setTitle
    , chosenPlayers
}) => {

    useEffect(
        () => setTitle("Play Foo & Collect Data")
        , []
    );

    const nav = useNavigate();

    const [startTimestamp, _] = useState(new Date().toISOString());

    // _("")

    // Could only destructure first item, but I like underscore convention to 
    // mean 'unused'.
    // const [startTimestamp] = useState(new Date().toISOString());

    const gameOver = (winner: string) => {
        addNewGameResult({

            // Fake it until we make it...
            winner: winner
            , players: chosenPlayers
            
            , start: startTimestamp
            , end: new Date().toISOString()
        });
        nav(-2);
    };

    return (
        <Box
            sx={{ 
                mt: 2
                , display: "flex"
                , flexDirection: "column"
                , gap: 2
            }}
        >
            {
                chosenPlayers.map(x =>(
                    <Button
                        key={x}
                        variant="outlined"
                        size="large"
                        onClick={
                            () => gameOver(x)
                        }
                        sx={{
                            maxWidth: 200
                        }}
                    >
                        {x} Won
                    </Button>
                ))
            }
        </Box>
    );
};