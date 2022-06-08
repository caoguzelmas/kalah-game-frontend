import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameCreateComponent} from './modules/game-create/game-create.component';
import {GamePlayComponent} from './modules/game-play/game-play.component';
import {GameSearchComponent} from './modules/game-search/game-search.component';
import {HowToPlayComponent} from './modules/how-to-play/how-to-play.component';


const routes: Routes = [
  { path: 'create', component: GameCreateComponent},
  { path: 'play', component: GamePlayComponent},
  { path: 'search', component: GameSearchComponent},
  { path: 'how-to-play', component: HowToPlayComponent},
  { path: '', redirectTo: 'create', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
