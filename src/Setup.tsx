import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const Setup = () => {

    const navigate = useNavigate();

    // let num = 1;

    const [num, setNum] = useState(1);

    return (
        <>
            <h3>
                Setup a Game of Foo ({num})
            </h3>
            <Button
                variant="outlined"
                size="large"
                onClick={
                    // () => navigate('/play')
                    () => {
                        //num++;
                        setNum(num + 1);
                        console.log(num);
                        navigate('/play');
                    }
                }
            >
                Start the Game
            </Button>
        </>
    );
};