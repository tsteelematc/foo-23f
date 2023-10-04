import Button from '@mui/material/Button';
import SmartDisplay from '@mui/icons-material/SmartDisplay';
import { useNavigate } from "react-router-dom";
import { WinningPercentageDisplay } from './foo-game-results';
import { FC } from 'react';

interface HomeProps {
    winningPercentageDisplay: WinningPercentageDisplay;
}
export const Home: FC<HomeProps> = ({winningPercentageDisplay}) => {

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
            {`Winning Percentage: ${winningPercentageDisplay.winningPercentage}`}
        </h4>
        </>
    );
};