import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Game} from '../../model/Game';
import {GameService} from '../service/GameService';
import {House} from '../../model/House';
import {GameResponse} from '../../model/GameResponse';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements OnInit, OnDestroy {
  activeGame: Game;
  firstPlayerHouses: House[];
  firstPlayerStore: House[];
  secondPlayerHouses: House[];
  secondPlayerStore: House[];
  sideBarActive = false;

  constructor(private gameService: GameService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      const gameId = param.gameId !== undefined ?
        param.gameId : localStorage.getItem('gameId');

      if (gameId) {
        this.gameService.getGame(gameId).subscribe((response: GameResponse) => {
          this.activeGame = response.game;
          this.setPlayerStores();
          this.setPlayerHouses();

          if (this.activeGame.winnerPlayerId !== null) {
            this.sideBarActive = true;
            this.activeGame.firstPlayer.numberOfStonesOnPlayerStone = this.activeGame
              .gameBoard.houses[(this.activeGame.gameBoard.houses.length - 2) / 2].numberOfStones;
            this.activeGame.secondPlayer.numberOfStonesOnPlayerStone = this.activeGame
              .gameBoard.houses[this.activeGame.gameBoard.houses.length - 1].numberOfStones;
          }
        });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.activeGame !== undefined) {
      localStorage.setItem('gameId', this.activeGame.gameId.toString());
    }
  }

  setPlayerStores() {
    this.firstPlayerStore = [];
    this.secondPlayerStore = [];
    this.firstPlayerStore.push(this.activeGame.gameBoard.houses[(this.activeGame.gameBoard.houses.length - 2) / 2]);
    this.secondPlayerStore.push(this.activeGame.gameBoard.houses[this.activeGame.gameBoard.houses.length - 1]);
  }

  setPlayerHouses() {
    this.firstPlayerHouses = this.activeGame.gameBoard.houses.slice(0, this.firstPlayerStore[0].houseId);
    this.secondPlayerHouses = this.activeGame.gameBoard.houses
      .slice(this.firstPlayerStore[0].houseId + 1, this.secondPlayerStore[0].houseId).reverse();
  }

  moveRequest(selectedIndex: number) {
    this.gameService.move(this.activeGame.gameId, selectedIndex).subscribe((response: GameResponse) => {

      if (response.message !== 'Success') {
        console.log(response.message);
    } else {
        this.activeGame = response.game;
        this.ngOnInit();
      }
    });
  }

  clickNewGame() {
    this.router.navigate(['/create']);
  }
}
