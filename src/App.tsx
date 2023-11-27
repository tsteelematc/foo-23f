import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import { 
  Home
  , appTitle 
} from './Home';

import { Setup } from './Setup';
import { Play } from './Play';

import { 
  GameResult
  , getGeneralFacts
  , getLeaderboardData
  , getPreviousPlayers
  , getBadTurnData
  , getAverageGameDurationByPlayerCount
} from './foo-game-results';

import { AppBar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import TableBarOutlined from '@mui/icons-material/TableBarOutlined';
import { SettingsOutlined } from '@mui/icons-material';

import localForage from 'localforage';

const App = () => {

  const [num, setNum] = useState(1);
  const [gameResults, setGameResults] = useState<GameResult[]>([]);
  const [title, setTitle] = useState<string>(appTitle);
  const [chosenPlayers, setChosenPlayers] = useState<string[]>([]);

  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [emailAddress, setEmailAddress] = React.useState("");

  const addNewGameResult = (newGameResult: GameResult) => setGameResults(
    [
      ...gameResults
      , newGameResult
    ]
  );

  const router = createHashRouter([
    {
      path: "/",
      element: <Home 
        generalFacts={ getGeneralFacts(gameResults, Date.now())}
        leaderboard={ getLeaderboardData(gameResults) }
        setTitle={setTitle}
        badTurnData={ getBadTurnData(gameResults) }
        avgGameDurationByPlayerCountData={ getAverageGameDurationByPlayerCount(gameResults) }
      />,
    },
    {
      path: "/setup",
      element: <Setup 
        num={num}
        setNum={setNum}
        setTitle={setTitle}
        previousPlayers={ getPreviousPlayers(gameResults) }
        setChosenPlayers={setChosenPlayers}
      />,
    },
    {
      path: "/play",
      element: <Play 
        addNewGameResult={addNewGameResult}
        setTitle={setTitle}
        chosenPlayers={chosenPlayers}
      />,
    },
  ]);

  return (
    <div className="App">
      <Box
        sx={{
          flexGrow: 1
        }}
      >
        <AppBar
          position="static"
          sx={{
            overflow: 'hidden'
            , bgcolor: 'whitesmoke'
          }}
        >
          <Toolbar>
            {
              title == appTitle &&
                <TableBarOutlined 
                color={"primary"}
                sx={{
                  mr: 1
                  , fontSize: '1.5em'
                  , opacity: 0.75
                  // , display: title == appTitle ? 'inherit' : 'none'
                }}
              />
            }
            <Typography
              variant='h6'
              // color={Math.random() > 0.5 ? 'primary' : 'secondary'}
              color="primary"
              sx={{
                opacity: 0.75 
                , flexGrow: 1
                , textAlign: 'left'
              }}
            >
              {title}
            </Typography>
            <IconButton
              size='small'
              onClick={
                () => setSettingsOpen(true)
              }
            >
              <SettingsOutlined />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          pl: 2
          , pr: 2
          , textAlign: 'left'
        }}
      >
        <RouterProvider router={router} />
      </Box>
      <Dialog
        fullScreen={fullScreen}
        open={settingsOpen}
        onClose={
          () => setSettingsOpen(false)
        }
      >
        <DialogTitle>
            Settings
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your email address will be used to save/load game results. We will
            not send you any spam : - O
          </DialogContentText>
          <TextField 
              label="Enter your email address"
              variant="outlined"
              fullWidth
              value={emailAddress}
              onChange={
                  (e) => setEmailAddress(e.target.value)
              }
              sx={{
                mt: 3
              }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant={emailAddress.length > 0 ? 'contained' : 'outlined'} 
            onClick={
              async () => {
                await localForage.setItem('email', emailAddress);
                setSettingsOpen(false);
              }
            } 
            autoFocus
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default App;
