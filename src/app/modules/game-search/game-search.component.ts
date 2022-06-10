import { Component, OnInit } from '@angular/core';
import {Game} from '../../model/Game';
import {GameService} from '../service/GameService';
import {Router, ActivatedRoute, Params} from '@angular/router';

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
      this.setPlayerScores();
    });
  }

  setPlayerScores() {
    this.games.forEach(game => {
      console.log(game.gameVariation.emptyCaptureEnabled);
      game.firstPlayer.numberOfStonesOnPlayerStone = game.gameBoard.houses[(game.gameBoard.houses.length - 2) / 2].numberOfStones;
      game.secondPlayer.numberOfStonesOnPlayerStone = game.gameBoard.houses[game.gameBoard.houses.length - 1].numberOfStones;

      console.table(this.games);
    });
  }

  continueToPlay(gameToContinue: Game) {
    const queryParams: Params = { gameId: gameToContinue.gameId };
    this.router.navigate(['/play'], {queryParams});


    /*this.route.queryParams.subscribe(params => {
      gameToContinue.gameId = params.gameId;
      this.router.navigate(['/play']);
    });*/
   // this.router.navigate(['/play'], {state: {gameId: gameToContinue.gameId}});
  }

}
