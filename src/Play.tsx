import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { GameResult, Player } from './foo-game-results';
import { FC, useEffect, useState } from 'react';
import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { Add, Remove, ThumbDownSharp, ThumbUpSharp } from '@mui/icons-material';

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

    // 1 - First local state...
    const [turnNumber, setTurnNumber] = useState(1);

    // 6 - "Player" local state...
    const [inGamePlayers, setInGamePlayers] = useState<Player[]>(chosenPlayers.map(x =>({
        name: x 
        , turns: [
            {
                num: 5
                , status: "Thumbs Down"
            }
            , {
                num: 6
                , status: "Thumbs Up"
            }
        ]
    })));

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
            , players: chosenPlayers.map(x => ({
                name: x
                , turns: [
                    {
                        num: 1,
                        status: "Thumbs Down"
                    }
                ]
            }))
            
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
                    // 4 - Decrement, guard against negative (and zero) with a ternary, i-o-g...
                    onClick={() => setTurnNumber(turnNumber > 1 ? turnNumber - 1 : turnNumber)}
                >
                    <Remove />
                </Button>
                <Typography
                    fontSize={20}
                >
                    {/* 2 - Show the turn number... */}
                    Turn {turnNumber}
                </Typography>
                <Button
                    variant='contained'
                    // 3 - Increment, easy...
                    onClick={() => setTurnNumber(turnNumber + 1)}
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
                        {/* 5 - Oops, this is dynamic too ! ! !*/}
                        {`How was ${x}'s Turn ${turnNumber}?`}
                        <ToggleButtonGroup
                            exclusive
                            value={
                                inGamePlayers
                                    .find(y => y.name == x)
                                    ?.turns.find(y => y.num == turnNumber)
                                    ?.status
                            }
                        >
                            <ToggleButton 
                                value="Thumbs Down"
                            >
                                <ThumbDownSharp />
                            </ToggleButton>
                            <ToggleButton 
                                value="Meh">
                                Meh
                            </ToggleButton>
                            <ToggleButton 
                                value="Thumbs Up">
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