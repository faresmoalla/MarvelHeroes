import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarvelHeroesComponent } from './marvel-heroes/marvel-heroes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MarvelHeroesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  exports: [
    MarvelHeroesComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
