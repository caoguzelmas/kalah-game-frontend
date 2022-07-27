import {Game} from './Game';

export class GameResponse {

  game: Game;
  gameList: Game[];
  isSuccess: boolean;
  message: string;
}
