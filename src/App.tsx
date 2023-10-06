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
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { GameResult, getWinningPercentageDisplay } from './foo-game-results';

import TableBarTwoTone from '@mui/icons-material/TableBarTwoTone';

const dummyGameResults: GameResult[] = [
  true
  , false
  , true
  , true
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
        winningPercentageDisplay = {getWinningPercentageDisplay(gameResults)}
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
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <TableBarTwoTone color="primary" sx={{mr: 1}} />
            <Typography variant="h6" color="primary" component="div" sx={{ flexGrow: 1, textAlign: "left" }}>
              Foo Companion App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{pl: 2, pr: 2, textAlign: "left"}}>
        <RouterProvider router={router} />
      </Box>
    </div>
  );
};

export default App;
