import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { WinningPercentageDisplay } from './foo-game-results';
import { FC } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import { Paper, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

interface HomeProps {
    winningPercentageDisplay: WinningPercentageDisplay
}

export const Home: FC<HomeProps> = ({winningPercentageDisplay}) => {

    const navigate = useNavigate();

    return (
        <>
        <Box
            sx={{mt: 3, mb: 3, backgroundColor: 'inherit'}}
        >
            <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={
                    () => navigate('/setup')
                }
                sx={{ width: '100%', pt: 3, pb: 3}}
            >
                <Typography fontSize={20}>
                    <b>
                        Play a Game of Foo
                    </b>
                </Typography>
            </Button>
        </Box>
        <Paper elevation={3} sx={{mb: 3}}>
            <CardContent>
                <Typography sx={{ fontSize: 20 }} color="text.disabled" gutterBottom>
                    GENERAL
                </Typography>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <Typography sx={{ fontSize: 20}}>
                                    Total Games
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography sx={{ fontSize: 20}}>
                                    {winningPercentageDisplay.totalGames}
                                </Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>
                                <Typography sx={{ fontSize: 20}}>
                                    Winning %
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography sx={{ fontSize: 20}}>
                                    {winningPercentageDisplay.winningPercentage}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Paper>
        <Card sx={{mb: 3, boxShadow: 5}}>
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
        <Card sx={{mb: 3, boxShadow: 5}}>
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
        <Card sx={{mb: 3, boxShadow: 5}}>
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
        <Card sx={{mb: 3, boxShadow: 5}}>
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
        <Card sx={{mb: 3, boxShadow: 5}}>
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
        <Card sx={{mb: 3, boxShadow: 5}}>
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
        <Card sx={{mb: 3, boxShadow: 5}}>
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
        <Card sx={{mb: 3, boxShadow: 5}}>
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