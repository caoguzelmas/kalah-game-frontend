import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {GameRequest} from '../../model/GameRequest';
import {Observable} from 'rxjs';
import {Game} from '../../model/Game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseUrl = environment.API_BASE_PATH;

  constructor(private httpClient: HttpClient) {
  }

  createGame(gameRequest: GameRequest): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + '/game/createGame', gameRequest);
  }

  getAllGames() {
    return this.httpClient.get(this.baseUrl + '/game/getAllGames');
  }

  getGame(gameId: number) {
    return this.httpClient.get(this.baseUrl + '/game/getGame?gameId=' + gameId);
  }

  move(gameId: string, selectedHouseIndex: number) {
    return this.httpClient.put(this.baseUrl + '/game/move?gameId=' + gameId + '&selectedHouseIndex=' + selectedHouseIndex, {});
  }

}
