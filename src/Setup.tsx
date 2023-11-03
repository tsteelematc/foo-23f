import Grid from '@mui/material/Unstable_Grid2';
import { Alert, Box, Checkbox, FormControlLabel, Snackbar, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

interface SetupProps {
    num: number;
    setNum: any;
    setTitle: (t: string) => void;
    previousPlayers: string[];
};

export const Setup: FC<SetupProps> = ({
    num
    , setNum
    , setTitle
    , previousPlayers
}) => {

    useEffect(
        () => setTitle("Choose players then Start...")
        , []
    );

    console.log("Setup called ! ! !");

    const navigate = useNavigate();

    const [availablePlayers, setAvailablePlayers] = useState(
        previousPlayers.map(x => ({
            name: x 
            , checked: false
        }))
    );

    //
    // Does NOT need to be "state" ! ! !
    //
    // If it were, it would be "duplicate" state, a "bad thing"
    //
    // "Duplicate state" is probably the most frequent React "bug" or 
    // anti-pattern ! ! !
    //
    // We identify it as "duplicate" state because it is "calculated" from other 
    // state (e.g. availablePlayers)
    //
    const atLeastOnePlayerChecked = availablePlayers.some(x => x.checked);

    // let num = 1;
    // const [num, setNum] = useState(1);

    const [warn, setWarn] = useState(Math.random() > 0.5);

    return (
        <Box
            sx={{ mt: 2 }}
        >
            <Snackbar 
                open={ warn } 
                autoHideDuration={3000}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                onClose={() => setWarn(false)}
            >
                <Alert severity="warning" sx={{ width: '100%' }}>
                    You must choose at least one player
                </Alert>
            </Snackbar>

            <Button
                variant={atLeastOnePlayerChecked ? "contained" : "outlined"}
                size="large"
                onClick={
                    // () => navigate('/play')
                    () => {
                        // setNum(num + 1);
                        // console.log(num);

                        setNum(num + 1);
                        navigate('/play');
                    }
                }
                sx={{
                    pt: 3
                    , pb: 3
                    , width: {
                        xs: '100%'
                        , md: 'inherit'
                    }
                }
                }
            >
                <Typography
                    fontSize={20}
                >
                    Start
                </Typography>
            </Button>

            <Grid
                container
                spacing={2}
                sx={{ mt: 2, mb: 2 }}
            >
                <Grid xs={12}>
                    Foo
                </Grid>
                {
                    availablePlayers.map(x => (
                        <Grid
                            xs={12}
                            sm={6}
                            md={4}
                            lg={2}
                        >
                            <FormControlLabel 
                                control={
                                    <Checkbox 
                                        key={x.name}
                                        checked={x.checked}
                                        onChange={(e) => setAvailablePlayers([
                                            ...availablePlayers.map(y => ({
                                                name: y.name
                                                , checked: x.name == y.name ? !y.checked : y.checked  
                                            }))
                                        ])}
                                    />
                                } 
                                label={x.name} 
                            />
                        </Grid>
                    ))
                }
          </Grid>
        </Box>
    );
};