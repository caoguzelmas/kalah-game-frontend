import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {GameRequest} from '../../model/GameRequest';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseUrl = environment.API_BASE_PATH;

  constructor(private httpClient: HttpClient) {
  }

  createGame(gameRequest: GameRequest): Observable<any> {
    console.table(gameRequest);
    return this.httpClient.post<any>(this.baseUrl + '/game/createGame', gameRequest);
  }

  getAllGames() {
    return this.httpClient.get(this.baseUrl + '/game/getAllGames');
  }

}
