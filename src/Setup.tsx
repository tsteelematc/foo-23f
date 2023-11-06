import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

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
        () => setTitle("Game Setup")
        , []
    );

    console.log("Setup called ! ! !");

    const navigate = useNavigate();

    // let num = 1;
    // const [num, setNum] = useState(1);

    return (
        <Box
            sx={{ mt: 2 }}
        >
            <Button
                variant="outlined"
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
            >
                Start the Game
            </Button>

            <Grid
                container
                spacing={2}
                sx={{
                    mt: 2
                    , mb: 2
                }}
            >
                {
                    previousPlayers.map(x => (
                        <Grid
                            xs={12}
                            sm={6}
                            md={4}
                            lg={2}
                        >
                            {x}
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};