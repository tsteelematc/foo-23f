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

                        //
                        // Multiple statement lambda, 
                        // specifically an if-statement and
                        // a setTurnNumber() statement.
                        //
                        // () => {
                        //     if (turnNumber > 1) {
                        //         setTurnNumber(turnNumber - 1);
                        //     }
                        // }

                        //
                        // Ternanary, always set the turn number,
                        // sometimes setting it equal to what it
                        // already is.
                        //
                        // () => setTurnNumber(
                        //     turnNumber > 1
                        //     ? turnNumber - 1
                        //     : turnNumber
                        // )

                        //
                        // Boolean short circuit approach, never 
                        // evaluates the setTurnNumber() call/
                        // expression if the left side is false.
                        //
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

                                //
                                // Update all the inGamePlayer state.
                                //
                                // Yes, updating all the state, for each player,
                                // for one status change for a single player.
                                //
                                // Yet, algorithmically, that's easeir!?
                                //
                                (e, value) => setInGamePlayers(

                                    // Transform/map all the state for all the
                                    // players, even the players that are not
                                    // changing.
                                    inGamePlayers.map(
                                        y => ({

                                            name: y.name

                                            // If we hit a piece of state for
                                            // the player that someone has
                                            // tapped a toggle button for, we 
                                            // have to do something.
                                            , turns: y.name == x

                                                // Create a whole new turn 
                                                // array for the player whose
                                                // status is changing.
                                                ? [

                                                    // Initialize the new array
                                                    // to their previous turns, 
                                                    // without the current turn
                                                    // number. This allows us to
                                                    // more easily change a 
                                                    // status for any player
                                                    // and any turn.
                                                    ...y.turns.filter(
                                                        z => z.num != turnNumber
                                                    )

                                                    // Since we removed the
                                                    // the current turn, if it 
                                                    // existed, put a new 
                                                    // turn object in there
                                                    // with the newly chosen 
                                                    // status.
                                                    , {
                                                        num: turnNumber
                                                        , status: value
                                                    }
                                                ]

                                                // Don't do anything to turns 
                                                // for players whose status
                                                // is not being changed.
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