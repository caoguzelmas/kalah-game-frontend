import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app-layout/header/header.component';
import { FooterComponent } from './app-layout/footer/footer.component';
import {LayoutComponent} from './app-layout/layout/layout.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { GameCreateComponent } from './app-layout/modules/game-create/game-create.component';
import { GameSearchComponent } from './app-layout/modules/game-search/game-search.component';
import { GamePlayComponent } from './app-layout/modules/game-play/game-play.component';
import { HowToPlayComponent } from './app-layout/modules/how-to-play/how-to-play.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    GameCreateComponent,
    GameSearchComponent,
    GamePlayComponent,
    HowToPlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
