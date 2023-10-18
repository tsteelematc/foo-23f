import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import { Home } from './Home';
import { Setup } from './Setup';
import { Play } from './Play';
import { 
  GameResult
  , getWinningPercentageDisplay
  , getGeneralGameTimeFacts
} from './foo-game-results';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import TableBarOutlined from '@mui/icons-material/TableBarOutlined'

const dummyGameResults: GameResult[] = [
  {
      won: true
      , start: "2023-10-01T17:40:46.333Z"
      , end: "2023-10-01T17:53:27.123Z"
  }
  , {
      won: false
      , start: "2023-10-09T17:55:46.333Z"
      , end: "2023-10-09T18:00:27.123Z"
  }
];

const App = () => {

  const [num, setNum] = useState(1);
  const [gameResults, setGameResults] = useState<GameResult[]>(dummyGameResults);

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
        winningPercentageDisplay= {getWinningPercentageDisplay(gameResults)}
        generalGameTimeFacts={getGeneralGameTimeFacts(gameResults, Date.now())}
      />,
    },
    {
      path: "/setup",
      element: <Setup 
        num={num}
        setNum={setNum}
      />,
    },
    {
      path: "/play",
      element: <Play 
        addNewGameResult={addNewGameResult}
      />,
    },
  ]);

  return (
    <div className="App">
      <Box
        sx={{
          flexGrow: 1
        }}>
        <AppBar
          position='static'
          sx={{
            overflow: 'hidden'
            , bgColor: 'secondary'
          }}
        >
          <Toolbar>
            <TableBarOutlined 
              color={'primary'}
              sx={{
                mr: 1
                , fontSize: '1.5em'
              }}
              />
            <Typography
              variant='h6'
              // color={Math.random() > 0.5 ? 'primary' : 'secondary'}
              color='whitesmoke'
              sx={{
                opacity: 0.75 
              }}
            >
              Foo Companion App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          pl: 1
          , pr: 3
          , textAlign: 'left'
        }}
      >
        <RouterProvider router={router} />
      </Box>
    </div>
  );
};

export default App;
