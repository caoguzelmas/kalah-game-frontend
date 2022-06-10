import { Component, OnInit } from '@angular/core';
import {GameRequest} from '../../model/GameRequest';
import {GameService} from '../service/GameService';
import {Params, Router} from '@angular/router';
import {Game} from '../../model/Game';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {

  gameRequestBody: GameRequest;

  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit(): void {
    this.gameRequestBody = new GameRequest();
  }

  createGame() {
    this.gameService.createGame(this.gameRequestBody).subscribe((response: Game) => {
      const queryParams: Params = { gameId: response.gameId };
      this.router.navigate(['/play'], {queryParams});
    });
  }

}
