import Button from '@mui/material/Button';
import SmartDisplay from '@mui/icons-material/SmartDisplay';
import { useNavigate } from "react-router-dom";
import { WinningPercentageDisplay } from './game-results';
import { FC } from 'react';

interface HomeProps {
    wp: WinningPercentageDisplay
}

export const Home: FC<HomeProps> = ({
    wp
}) => {

    const navigate = useNavigate();

    return (
        <>
        <h3>
            Foo Companion App
        </h3>
        <Button
            variant="outlined"
            size="large"
            startIcon={
            <SmartDisplay />
            }
            onClick={
                () => navigate('/setup')
            }
        >
            Play a Game of Foo
        </Button>
        <h4>
            Total Games: {wp.totalGames}
        </h4>
        <h4>
            Winning Percentaged: {wp.winningPercentage}
        </h4>
        </>
    );
};