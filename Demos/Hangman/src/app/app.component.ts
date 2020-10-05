import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import ILetter from './shared/interfaces/anLetter';
import ISecret from './shared/interfaces/secret';
import { LettersService } from './shared/services/letters.service';
import { WordsService } from './shared/services/words.service';
import { GameFlowService } from './shared/services/game-flow.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  gameArray: Array<ILetter>;
  secretWord: ISecret;
  attempts: number = 0;
  hint: string = "";
  isWinner: boolean = false;
  
  constructor(private lettersService: LettersService, 
    private wordsService: WordsService,
    private gameFlowService: GameFlowService) {
  }

  ngOnInit() {
    this.gameArray = this.lettersService.generateGameArray();
    this.secretWord = this.wordsService.getSecretWordAsObject();
  }

  letterChosen(letterChoice: string) {
    this.gameFlowService.disableIncorrectlyGuessedLetter(this.gameArray, letterChoice);
    this.attempts = this.gameFlowService.increaseWrongAttempts(this.gameArray, this.secretWord, letterChoice, this.attempts);
    this.gameFlowService.revealCorrectlyGuessedLetter(this.secretWord, letterChoice);
    this.isWinner = this.gameFlowService.checkCorrectlyGuessedWord(this.gameArray, this.secretWord)
  }

  getHint() {
    this.hint = this.secretWord.hint;
  }

  playAgain() {
    this.gameArray = this.lettersService.generateGameArray();
    this.secretWord = this.wordsService.getSecretWordAsObject();
    this.hint = "";
    this.attempts = 0;
    this.isWinner = false;
  }
}
