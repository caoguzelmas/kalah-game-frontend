export class GameVariation {

  firstMoveOnFirstPlayer: boolean;
  flowsCounterClockwise: boolean;
  emptyCaptureEnabled: boolean;
  remainingStonesInsertionEnabled: boolean;

  setDefaultGameVariations() {
    this.firstMoveOnFirstPlayer = true;
    this.flowsCounterClockwise = true;
    this.emptyCaptureEnabled = false;
    this.remainingStonesInsertionEnabled = true;
  }
}
