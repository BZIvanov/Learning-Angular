import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LettersComponent } from './game/letters/letters.component';
import { WordComponent } from './game/word/word.component';
import { CanvasObjectComponent } from './game/canvas-object/canvas-object.component';

@NgModule({
  declarations: [
    AppComponent,
    LettersComponent,
    WordComponent,
    CanvasObjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
