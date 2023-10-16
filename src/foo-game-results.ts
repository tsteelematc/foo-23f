import { durationFormatter } from 'human-readable';

const format = durationFormatter();

const justDaysFormat = durationFormatter({
	allowMultiples: ["y", "mo", "d"]
});

export type GameResult = {
    won: boolean;
    start: string;
    end: string;
};

export interface WinningPercentageDisplay {
    totalGames: number;
    winningPercentage: string; // Formatted to two decimal places with a % sign
};

export const getWinningPercentageDisplay = (results: GameResult[]): WinningPercentageDisplay => {

    const wins = results.filter(x => x.won).length;
    const totalGames = results.length;
    const wp = totalGames > 0
        ? (wins / totalGames) * 100
        : 0
    ;

    // console.log(wins, results.length);

    return {
        // totalGames: totalGames
        totalGames
        , winningPercentage: `${wp.toFixed(2)}%`
    };
};

export interface GeneralGameTimeFactsDisplay {
    lastPlayed: string; 
    shortestGame: string;
    longestGame: string;
};

export const getGeneralGameTimeFacts = (
    results: GameResult[]
    , fromDateMilliseconds: number 
): GeneralGameTimeFactsDisplay => {

    const gameEndDatesInMilliseconds = results
        .map(x => Date.parse(x.end))
        .filter(x => x <= fromDateMilliseconds)
    ;

    const gameDurationsInMilliseconds = results
        .filter(x => Date.parse(x.end) <= fromDateMilliseconds)
        .map(x => Date.parse(x.end) - Date.parse(x.start))
    ;

    return {
        lastPlayed: justDaysFormat(fromDateMilliseconds - Math.max(...gameEndDatesInMilliseconds)) as string
        , shortestGame: format(Math.min(...gameDurationsInMilliseconds)) as string
        , longestGame: format(Math.max(...gameDurationsInMilliseconds)) as string
    };
};