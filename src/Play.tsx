import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { GameResult } from './foo-game-results';
import { FC, useEffect, useState } from 'react';
import { Box, ButtonGroup, FormControlLabel, Switch, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { Add, Remove, ThumbDown, ThumbDownSharp, ThumbUpSharp, ThumbsUpDown } from '@mui/icons-material';

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
        () => setTitle(`Track turn "feelings"...`)
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
                            mt: 2
                            , mb: 4
                            , display: "flex"
                            , flexDirection: "column"
                            , gap: 2 
                        }}
                    >
                        {`How was ${x}'s Turn 1?`}
                        <ToggleButtonGroup
                            exclusive
                            value="up"
                        >
                            <ToggleButton 
                                value="down"
                            >
                                <ThumbDownSharp />
                            </ToggleButton>
                            <ToggleButton 
                                value="meh">
                                Meh
                            </ToggleButton>
                            <ToggleButton 
                                value="up">
                                <ThumbUpSharp />
                            </ToggleButton>
                        </ToggleButtonGroup>
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