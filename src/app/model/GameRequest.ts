import {GameVariation} from './GameVariation';

export class GameRequest implements GameVariation{

  numberOfHouses: number;
  numberOfStones: number;
  emptyCaptureEnabled: boolean;
  firstMoveOnFirstPlayer: boolean;
  flowsCounterClockwise: boolean;
  remainingStonesInsertionEnabled: boolean;

  constructor() {
    this.numberOfHouses = 6;
    this.numberOfStones = 4;
    this.flowsCounterClockwise = true;
    this.firstMoveOnFirstPlayer = true;
    this.emptyCaptureEnabled = false;
    this.remainingStonesInsertionEnabled = true;
  }


}
