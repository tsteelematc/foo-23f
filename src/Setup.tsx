import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import { FC, useState } from 'react';
import { useNavigate } from "react-router-dom";

interface SetupProps {
    num: number;
    setNum: any;
};

export const Setup: FC<SetupProps> = ({ num, setNum }) => {

    console.log("Setup called ! ! !");

    const navigate = useNavigate();

    // let num = 1;
    // const [num, setNum] = useState(1);

    return (
        <Grid
            container
            spacing={2}
            sx={{ mt: 2 }}
        >
            <Grid xs={12}>
                Foo
            </Grid>
            <Grid
                xs={12}
                sm={6}
                md={4}
                lg={2}
            >
                Bar
            </Grid>
            <Grid
                xs={12}
                sm={6}
                md={4}
                lg={2}
            >
                Bar
            </Grid>            <Grid
                xs={12}
                sm={6}
                md={4}
                lg={2}
            >
                Bar
            </Grid>            <Grid
                xs={12}
                sm={6}
                md={4}
                lg={2}
            >
                Bar
            </Grid>            <Grid
                xs={12}
                sm={6}
                md={4}
                lg={2}
            >
                Bar
            </Grid>            <Grid
                xs={12}
                sm={6}
                md={4}
                lg={2}
            >
                Bar
            </Grid>            <Grid
                xs={12}
                sm={6}
                md={4}
                lg={2}
            >
                Bar
            </Grid>            <Grid
                xs={12}
                sm={6}
                md={4}
                lg={2}
            >
                Bar
            </Grid>            <Grid
                xs={12}
                sm={6}
                md={4}
                lg={2}
            >
                Bar
            </Grid>            <Grid
                xs={12}
                sm={6}
                md={4}
                lg={2}
            >
                Bar
            </Grid>            <Grid
                xs={12}
                sm={6}
                md={4}
                lg={2}
            >
                Bar
            </Grid>            <Grid
                xs={12}
                sm={6}
                md={4}
                lg={2}
            >
                Bar
            </Grid>            <Grid
                xs={12}
                sm={6}
                md={4}
                lg={2}
            >
                Bar
            </Grid>

            {/* <h3>
                Setup a Game of Foo ({num})
            </h3>
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
            </Button> */}
        </Grid>
    );
};