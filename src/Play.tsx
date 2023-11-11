import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { GameResult } from './foo-game-results';
import { FC, useEffect, useState } from 'react';
import { Box, FormControlLabel, Rating, Switch, Typography } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

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
        () => setTitle("Track turns and player turn rating...")
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
            <Box
                sx={{
                    display: "flex"
                    , flexDirection: "row"
                    , gap: 2
                    , alignItems: "center"
                    , mb: 2
                }}
            >
                <Button
                    variant='contained'
                >
                    <Remove />
                </Button>
                <Typography
                    fontSize={20}
                >
                    Turn 1
                </Typography>
                <Button
                    variant='contained'
                >
                    <Add />
                </Button>
            </Box>
            {
               chosenPlayers.map(x => (
                <Box
                    key={x}
                    sx={{
                        display: "flex"
                        , flexDirection: "column"
                        , gap: 2
                        , mb:4
                    }}
                >
                    <Box>
                    <Typography 
                        component="legend"
                    >
                        {`How was ${x}'s turn 1?`}
                    </Typography>
                    <Rating 
                        name="no-value" 
                        value={null} 
                    />
                    </Box>
                    <Button
                        variant="outlined"
                        size="large"
                        onClick={
                            () => gameOver(x)
                        }
                        sx={{
                            maxWidth: "900px"
                        }}
                    >
                        {x} Won
                    </Button>                    
                </Box>
               )) 
            }
        </Box>
    );
};