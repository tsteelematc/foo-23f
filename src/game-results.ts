export type GameResult = boolean;

export const addGameResult = (results: GameResult[], newResult: GameResult): GameResult[] => [
    ...results 
    , newResult
];

export type WinningPercentageDisplay = {
    totalGames: number;
    winningPercentage: string;
};

export const getWinningPercentageDisplay = (results: GameResult[]): WinningPercentageDisplay => {

    const wins = results.filter(x => x).length;
    const totalGames = results.length;
    const winningPercentage = totalGames > 0
        ? (wins / totalGames) * 100
        : 0
    ;

    // console.log(wins, results.length);

    return {
        totalGames
        , winningPercentage: `${winningPercentage.toFixed(2)}%` 
    };
};