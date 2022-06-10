import { Component, OnInit } from '@angular/core';
import {Game} from '../../model/Game';
import {GameService} from '../service/GameService';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css']
})
export class GameSearchComponent implements OnInit {
  games: Game[];

  constructor(private gameService: GameService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.paginate();
  }

  paginate() {
    return this.gameService.getAllGames().subscribe((response: Game[]) => {
      this.games = response;
      this.setGameInfos();
    });
  }

  setGameInfos() {
    this.games.forEach(game => {
      console.log(game.gameVariation.emptyCaptureEnabled);
      game.firstPlayer.numberOfStonesOnPlayerStone = game.gameBoard.houses[(game.gameBoard.houses.length - 2) / 2].numberOfStones;
      game.secondPlayer.numberOfStonesOnPlayerStone = game.gameBoard.houses[game.gameBoard.houses.length - 1].numberOfStones;
      game.numberOfHousesOfEachPlayer = (game.gameBoard.houses.length - 2) / 2;
      game.numberOfStonesOnEachHouse = (this.getTotalNumberOfStones(game)) / (game.gameBoard.houses.length - 2);
    });
  }

  getTotalNumberOfStones(game: Game): number {
    let totalNumberOfStones = 0;
    game.gameBoard.houses.forEach(house => {
      totalNumberOfStones += house.numberOfStones;
    });
    return totalNumberOfStones;
  }

  continueToPlay(gameToContinue: Game) {
    const queryParams: Params = { gameId: gameToContinue.gameId };
    this.router.navigate(['/play'], {queryParams});
  }

}