import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Game} from '../../model/Game';
import {GameService} from '../service/GameService';
import {House} from '../../model/House';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements OnInit, OnDestroy {
  activeGame: Game;
  firstPlayerHouses: House[];
  firstPlayerStore: House;
  secondPlayerHouses: House[];
  secondPlayerStore: House;

  constructor(private gameService: GameService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      const gameId = param.gameId !== undefined ?
        param.gameId : localStorage.getItem('gameId');

      this.gameService.getGame(gameId).subscribe((response: Game) => {
        this.activeGame = response;
        this.setPlayerStores();
        this.setPlayerHouses();
        console.log(this.activeGame);
        console.log(this.activeGame.firstPlayer.activePlayer);
        console.log(this.activeGame.secondPlayer.activePlayer);
      });
    });
  }

  ngOnDestroy(): void {
    if (this.activeGame !== undefined) {
      localStorage.setItem('gameId', this.activeGame.gameId.toString());
    }
  }

  setPlayerStores() {
    this.firstPlayerStore = this.activeGame.gameBoard.houses[(this.activeGame.gameBoard.houses.length - 2) / 2];
    this.secondPlayerStore = this.activeGame.gameBoard.houses[this.activeGame.gameBoard.houses.length - 1];
  }

  setPlayerHouses() {
    this.firstPlayerHouses = this.activeGame.gameBoard.houses.slice(0, this.firstPlayerStore.houseId);
    this.secondPlayerHouses = this.activeGame.gameBoard.houses
      .slice(this.firstPlayerStore.houseId + 1, this.secondPlayerStore.houseId).reverse();
  }

  moveRequest(selectedIndex: number) {
    this.gameService.move(this.activeGame.gameId, selectedIndex).subscribe((response: Game) => {
      if (response.message !== '') {
        console.log(response.message);
    } else {
        this.activeGame = response;
        this.ngOnInit();
      }
    });
  }
}
