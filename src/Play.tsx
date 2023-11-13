import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { GameResult, Player } from './foo-game-results';
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

    const [startTimestamp, _] = useState(new Date().toISOString());
    // _("")

    const [turnNumber, setTurnNumber] = useState<number>(1)

    const [inGamePlayers, setInGamePlayers] = useState<Player[]>(
        chosenPlayers.map(
            x => ({
                name: x
                , turns: []
            })
        )
    );

    useEffect(
        () => setTitle(`Track turn "feelings"...`)
        , []
    );

    const nav = useNavigate();


    // Could only destructure first item, but I like underscore convention to 
    // mean 'unused'.
    // const [startTimestamp] = useState(new Date().toISOString());

    const gameOver = (winner: string) => {
        addNewGameResult({

            winner: winner
            , players: inGamePlayers
            
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
                    onClick={

                        // () => setTurnNumber(
                        //     turnNumber > 1
                        //     ? turnNumber - 1
                        //     : turnNumber
                        // )

                        () => turnNumber > 1 && setTurnNumber(turnNumber - 1)
                    }
                >
                    <Remove />
                </Button>
                <Typography
                    fontSize={20}
                >
                    Turn {turnNumber}
                </Typography>
                <Button
                    variant='contained'
                    onClick={
                        () => setTurnNumber(turnNumber + 1)
                    }
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
                        {`How was ${x}'s Turn ${turnNumber}?`}
                        <ToggleButtonGroup
                            exclusive
                            value={
                                inGamePlayers
                                    .find(
                                        y => y.name == x
                                    )
                                    ?.turns.find(
                                        y => y.num == turnNumber
                                    )
                                    ?.status
                            }

                            onChange={
                                // Holy Hell
                                (e, value) => setInGamePlayers(
                                    inGamePlayers.map(
                                        y => ({
                                            name: y.name
                                            , turns: y.name == x
                                                ? [
                                                    ...y.turns.filter(
                                                        z => z.num != turnNumber
                                                    )
                                                    , {
                                                        num: turnNumber
                                                        , status: value
                                                    }
                                                ]
                                                : y.turns
                                        })
                                    )
                                )
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