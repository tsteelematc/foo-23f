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
  , addGameResult 
} from './game-results';

const dummyGameResults: GameResult[] = [
  true
  , false
  , true
  // , true
];

const App = () => {

  const [gameResults, setGameResults] = useState<GameResult[]>(dummyGameResults);

  const addNewGameResult = (newGameResult: GameResult) => setGameResults(
    addGameResult(gameResults, newGameResult)
  );

  const router = createHashRouter([
    {
      path: "/",
      element: <Home
        wp={getWinningPercentageDisplay(gameResults)} 
      />,
    },
    {
      path: "/setup",
      element: <Setup />,
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
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
