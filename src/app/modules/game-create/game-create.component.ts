import { Component, OnInit } from '@angular/core';
import {GameRequest} from '../../model/GameRequest';
import {GameService} from '../service/GameService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {

  gameRequestBody: GameRequest;

  constructor(
    private gameService: GameService,
    private router: Router) { }

  ngOnInit(): void {
    this.gameRequestBody = new GameRequest();
  }

  createGame() {
    this.gameService.createGame(this.gameRequestBody).subscribe();
    this.router.navigate(['/play']);
  }

}
