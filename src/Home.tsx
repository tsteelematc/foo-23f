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
import Grid from '@mui/material/Unstable_Grid2';

interface HomeProps {
    winningPercentageDisplay: WinningPercentageDisplay
}

export const Home: FC<HomeProps> = ({winningPercentageDisplay}) => {

    const navigate = useNavigate();

    return (
        <>
        <Box
            sx={{mt: 3, mb: 3, backgroundColor: 'inherit', display: 'flex', flexDirection: 'row'}}
        >
            <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={
                    () => navigate('/setup')
                }
                sx={{ width: {xs: '100%', md: 'inherit'}, pt: 3, pb: 3}}
            >
                <Typography fontSize={20}>
                    <b>
                        Play a Game of Foo
                    </b>
                </Typography>
            </Button>
        </Box>
        <Grid container spacing={3}>
            <Grid xs={12} md={6}>
                <Paper 
                    elevation={3} 
                    sx={{ overflow: "hidden"}}
                >
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
            </Grid>
            <Grid xs={12} md={6}>
                <Paper 
                    elevation={3} 
                    sx={{ overflow: "hidden"}}>
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
            </Grid>
            <Grid xs={12} md={6}>
                <Paper 
                    elevation={3} 
                    sx={{ overflow: "hidden"}}>
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
            </Grid>
            <Grid xs={12} md={6}>
                <Paper 
                    elevation={3} 
                    sx={{ overflow: "hidden"}}>
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
            </Grid>
            <Grid xs={12} md={6}>
                <Paper 
                    elevation={3} 
                    sx={{ overflow: "hidden"}}>
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
            </Grid>
            <Grid xs={12} md={6}>
                <Paper 
                    elevation={3} 
                    sx={{ overflow: "hidden"}}>
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
            </Grid>
            <Grid xs={12} md={6}>
                <Paper 
                    elevation={3} 
                    sx={{ overflow: "hidden"}}>
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
            </Grid>
            <Grid xs={12} md={6}>
                <Paper 
                    elevation={3} 
                    sx={{ overflow: "hidden"}}>
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
            </Grid>
        </Grid>
      </>
    );
};