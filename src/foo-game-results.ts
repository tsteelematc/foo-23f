import { durationFormatter } from 'human-readable';

const format = durationFormatter<string>();

const justDaysFormat = durationFormatter<string>({
	allowMultiples: ["y", "mo", "d"]
});

export type TurnStatus = "Thumbs Down" | "Meh" | "Thumbs Up";

export type Turn = {
    num: number;
    status: TurnStatus;
};

export type Player = {
    name: string;
    turns: Turn[]; 
}

export type GameResult = {
    
    // won: boolean;
    winner: string;
    players: Player[];
    
    start: string;
    end: string;
};

export interface GeneralFactsDisplay {
    totalGames: number;
    lastPlayed: string; 
    shortestGame: string;
    longestGame: string;
};

export interface LeaderboardEntry {
    wins: number;
    losses: number;
    avg: number;
    name: string
};

export interface BadTurnDisplay {
    name: string;
    badTurnCount: number;
}

export interface AvgGameDurationByPlayerCountDisplay {
    playerCount: number;
    duration: string;
}

export const getGeneralFacts = (
    results: GameResult[]
    , fromDateMilliseconds: number 
): GeneralFactsDisplay => {

    const gameEndDatesInMilliseconds = results
        .map(x => Date.parse(x.end))
        .filter(x => x <= fromDateMilliseconds)
    ;

    const gameDurationsInMilliseconds = results
        .filter(x => Date.parse(x.end) <= fromDateMilliseconds)
        .map(x => getGameDuration(x))
    ;

    return {
        totalGames: results.length
        , lastPlayed: justDaysFormat(fromDateMilliseconds - Math.max(...gameEndDatesInMilliseconds))
        , shortestGame: format(Math.min(...gameDurationsInMilliseconds))
        , longestGame: format(Math.max(...gameDurationsInMilliseconds))
    };
};

export const getPreviousPlayers = (results: GameResult[]): string[] => {

    const previousPlayers = results
        .flatMap(x => x.players)
        .map(x => x.name)
    ;

    return [
        ...new Set(previousPlayers)
    ].sort(
        (a, b) => a.localeCompare(b)
    );
};

const getPlayerRecord = (
    player: string
    , results: GameResult[]
): LeaderboardEntry => {

    const wins = results.filter(x => x.winner == player).length;
    
    const gamesPlayerPlayed = results.filter(
        x => x.players.some(
            y => y.name == player
        )
    ).length;

    const losses = gamesPlayerPlayed - wins;

    return {
        wins: wins
        , losses: losses
        , avg: wins / gamesPlayerPlayed
        , name: player
    };
};

export const getLeaderboardData = (results: Array<GameResult>): Array<LeaderboardEntry> => {

    const previousPlayers = getPreviousPlayers(results);

    return previousPlayers.map(
        x => getPlayerRecord(x, results)
    ).sort(
        (a, b) => (b.avg * 1000 + b.wins + b.losses) - (a.avg * 1000 + a.wins + a.losses)
    );
};

export const getBadTurnData = (results: GameResult[]): BadTurnDisplay[] => {

    const players = getPreviousPlayers(results);

    return players.map(
        x => ({
            name: x
            , badTurnCount: results
                .flatMap(y => y.players)
                .filter(y => y.name == x)
                .flatMap(y => y.turns)
                .filter(y => y.status == "Thumbs Down").length
        })
    ).sort(
        (a, b) => b.badTurnCount - a.badTurnCount
    );
}; 

const getGameDuration = (result: GameResult) => Date.parse(result.end) - Date.parse(result.start);

const getAverageGameDuration = (results: GameResult[]) => {

    const sum = results.reduce(
        (acc, x) => acc + getGameDuration(x)
        , 0
    );

    return results.length > 0
        ? sum / results.length
        : 0
    ;

};

export const getAverageGameDurationByPlayerCount =
    (results: GameResult[]): AvgGameDurationByPlayerCountDisplay[] => {

    // Complex reduce to JS Map object, not object literal.
    // const resultsGroupedByPlayerCount = results.reduce(
    //     (acc, x) => acc.set(
    //         x.players.length
    //         , [
    //             ...(acc.get(x.players.length) ?? [])
    //             , x
    //         ]
    //     )
    //     , new Map<number, GameResult[]>()

    //     // Map<T1, T2>
    //     // Map<KEY_TYPE, VALUE_TYPE>
    // );

    const resultsGroupedByPlayerCount = (Map as any).groupBy(
        results 
        , (x: any) => x.players.length 
        // , (x: any) => x.winner
    );

    return [...resultsGroupedByPlayerCount].map(
        x => ({
            playerCount: x[0] as number
            , duration: format(getAverageGameDuration(x[1]))
        })
    ).sort(
        (a, b) => a.playerCount - b.playerCount
    );
};