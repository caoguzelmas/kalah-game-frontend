import { Component, OnInit } from '@angular/core';
import {Game} from '../../model/Game';
import {GameService} from '../service/GameService';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css']
})
export class GameSearchComponent implements OnInit {
  games: Game[];
  selectedGame: Game;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.paginate();
  }

  paginate() {
    return this.gameService.getAllGames().subscribe((response: Game[]) => {
      this.games = response;
      this.setPlayerScores();
    });
  }

  setPlayerScores() {
    this.games.forEach(game => {
      console.log(game.gameVariation.emptyCaptureEnabled)
      game.firstPlayer.numberOfStonesOnPlayerStone = game.gameBoard.houses[(game.gameBoard.houses.length - 2) / 2].numberOfStones;
      game.secondPlayer.numberOfStonesOnPlayerStone = game.gameBoard.houses[game.gameBoard.houses.length - 1].numberOfStones;

      console.table(this.games);
    });
  }

}
