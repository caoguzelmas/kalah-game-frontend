import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameCreateComponent} from './app-layout/modules/game-create/game-create.component';
import {GamePlayComponent} from './app-layout/modules/game-play/game-play.component';
import {GameSearchComponent} from './app-layout/modules/game-search/game-search.component';
import {HowToPlayComponent} from './app-layout/modules/how-to-play/how-to-play.component';


const routes: Routes = [
  { path: 'create', component: GameCreateComponent},
  { path: 'play', component: GamePlayComponent},
  { path: 'search', component: GameSearchComponent},
  { path: 'how-to-play', component: HowToPlayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
