import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './app-layout/header/header.component';
import { FooterComponent } from './app-layout/footer/footer.component';
import {LayoutComponent} from './app-layout/layout/layout.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { GameCreateComponent } from './modules/game-create/game-create.component';
import { GameSearchComponent } from './modules/game-search/game-search.component';
import { GamePlayComponent } from './modules/game-play/game-play.component';
import { HowToPlayComponent } from './modules/how-to-play/how-to-play.component';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {InputSwitchModule} from 'primeng/inputswitch';
import {FormsModule} from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {CheckboxModule} from 'primeng/checkbox';

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
    BrowserAnimationsModule,
    TabMenuModule,
    PanelModule,
    ButtonModule,
    InputSwitchModule,
    FormsModule,
    InputNumberModule,
    HttpClientModule,
    CommonModule,
    TableModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
