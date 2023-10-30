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
} from './foo-game-results';

import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import TableBarOutlined from '@mui/icons-material/TableBarOutlined';

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
  const [title, setTitle] = useState<string>(appTitle);

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
        setTitle={setTitle}
      />,
    },
    {
      path: "/setup",
      element: <Setup 
        num={num}
        setNum={setNum}
        setTitle={setTitle}
      />,
    },
    {
      path: "/play",
      element: <Play 
        addNewGameResult={addNewGameResult}
        setTitle={setTitle}
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
              }}
            >
              {title}
            </Typography>
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
    </div>
  );
};

export default App;
