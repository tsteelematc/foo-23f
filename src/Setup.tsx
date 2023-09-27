import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export const Setup = () => {

    const navigate = useNavigate();

    return (
        <>
            <h3>
                Setup a Game of Foo
            </h3>
            <Button
                variant="outlined"
                size="large"
                onClick={
                    () => navigate('/play')
                }
            >
                Start the Game
            </Button>
        </>
    );
};