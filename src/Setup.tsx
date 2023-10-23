import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

interface SetupProps {
    num: number;
    setNum: any;
    setTitle: (t: string) => void;
};

export const Setup: FC<SetupProps> = ({
    num
    , setNum
    , setTitle
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
        </Box>
    );
};