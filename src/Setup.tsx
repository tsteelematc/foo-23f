import Button from '@mui/material/Button';
import { FC, useState } from 'react';
import { useNavigate } from "react-router-dom";

interface SetupProps {
    num: number;
    setNum: any;
    setStartTimestamp: (ts: string) => void;
};

export const Setup: FC<SetupProps> = ({num, setNum, setStartTimestamp}) => {

    console.log("Setup called ! ! !");

    const navigate = useNavigate();

    // let num = 1;
    // const [num, setNum] = useState(1);

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
                        // setNum(num + 1);
                        // console.log(num);
                        
                        setNum(num + 1);
                        setStartTimestamp(new Date().toISOString());
                        navigate('/play');
                    }
                }
            >
                Start the Game
            </Button>
        </>
    );
};