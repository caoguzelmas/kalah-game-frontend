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
  message: string;
  numberOfHousesOfEachPlayer: number;
  numberOfStonesOnEachHouse: number;

}
