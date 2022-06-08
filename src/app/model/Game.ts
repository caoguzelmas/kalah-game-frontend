import {Player} from './Player';
import {GameBoard} from './GameBoard';
import {GameVariation} from './GameVariation';

export class Game {

  gameId: number;
  firstPlayer: Player;
  secondPlayer: Player;
  gameBoard: GameBoard;
  winnerPlayerId: number;
  gameVariation: GameVariation;

  getStoreIndexOfFirstPlayer() {
    return (this.gameBoard.houses.length - 2) / 2;
  }

  getStoreIndexOfSecondPlayer(): number {
    return (this.gameBoard.houses.length - 1);
  }

}
