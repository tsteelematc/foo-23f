import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export const Play = () => {

    const nav = useNavigate();

    return (
        <>
        <h3>
            Play &amp; Collect Data
        </h3>
        <Button
            variant="outlined"
            size="large"
            onClick={
                () => nav(-2)
            }
        >
            Done
        </Button>
        </>
    );
};