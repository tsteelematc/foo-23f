import Button from '@mui/material/Button';
import SmartDisplay from '@mui/icons-material/SmartDisplay';
import { useNavigate } from "react-router-dom";
import { WinningPercentageDisplay } from './foo-game-results';
import { FC } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

interface HomeProps {
    winningPercentageDisplay: WinningPercentageDisplay
}

export const Home: FC<HomeProps> = ({winningPercentageDisplay}) => {

    const navigate = useNavigate();

    return (
        <>
        <Box
            sx={{mt: 3, backgroundColor: 'inherit'}}
        >
            <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={
                <SmartDisplay />
                }
                onClick={
                    () => navigate('/setup')
                }
                sx={{ width: '100%'}}
            >
                Play a Game of Foo
            </Button>
        </Box>
        <Card sx={{mt: 3, boxShadow: 5}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    General
                </Typography>
                <h4>
                    {`Total Games: ${winningPercentageDisplay.totalGames}`}
                </h4>
                <h4>
                    {`Winning Percentage: ${winningPercentageDisplay.winningPercentage}`}
                </h4>
            </CardContent>
        </Card>
        <Card sx={{mt: 3, boxShadow: 5}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    General
                </Typography>
                <h4>
                    {`Total Games: ${winningPercentageDisplay.totalGames}`}
                </h4>
                <h4>
                    {`Winning Percentage: ${winningPercentageDisplay.winningPercentage}`}
                </h4>
            </CardContent>
        </Card>
        <Card sx={{mt: 3, boxShadow: 5}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    General
                </Typography>
                <h4>
                    {`Total Games: ${winningPercentageDisplay.totalGames}`}
                </h4>
                <h4>
                    {`Winning Percentage: ${winningPercentageDisplay.winningPercentage}`}
                </h4>
            </CardContent>
        </Card>
        <Card sx={{mt: 3, boxShadow: 5}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    General
                </Typography>
                <h4>
                    {`Total Games: ${winningPercentageDisplay.totalGames}`}
                </h4>
                <h4>
                    {`Winning Percentage: ${winningPercentageDisplay.winningPercentage}`}
                </h4>
            </CardContent>
        </Card>
        <Card sx={{mt: 3, boxShadow: 5}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    General
                </Typography>
                <h4>
                    {`Total Games: ${winningPercentageDisplay.totalGames}`}
                </h4>
                <h4>
                    {`Winning Percentage: ${winningPercentageDisplay.winningPercentage}`}
                </h4>
            </CardContent>
        </Card>
        <Card sx={{mt: 3, boxShadow: 5}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    General
                </Typography>
                <h4>
                    {`Total Games: ${winningPercentageDisplay.totalGames}`}
                </h4>
                <h4>
                    {`Winning Percentage: ${winningPercentageDisplay.winningPercentage}`}
                </h4>
            </CardContent>
        </Card>
        <Card sx={{mt: 3, boxShadow: 5}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    General
                </Typography>
                <h4>
                    {`Total Games: ${winningPercentageDisplay.totalGames}`}
                </h4>
                <h4>
                    {`Winning Percentage: ${winningPercentageDisplay.winningPercentage}`}
                </h4>
            </CardContent>
        </Card>
        <Card sx={{mt: 3, boxShadow: 5}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    General
                </Typography>
                <h4>
                    {`Total Games: ${winningPercentageDisplay.totalGames}`}
                </h4>
                <h4>
                    {`Winning Percentage: ${winningPercentageDisplay.winningPercentage}`}
                </h4>
            </CardContent>
        </Card>
        <Card sx={{mt: 3, boxShadow: 5}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    General
                </Typography>
                <h4>
                    {`Total Games: ${winningPercentageDisplay.totalGames}`}
                </h4>
                <h4>
                    {`Winning Percentage: ${winningPercentageDisplay.winningPercentage}`}
                </h4>
            </CardContent>
        </Card>        
        
        </>
    );
};