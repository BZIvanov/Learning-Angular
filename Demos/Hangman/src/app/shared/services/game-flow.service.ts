import { Injectable } from '@angular/core';

import ILetter from '../interfaces/anLetter';
import ISecret from '../interfaces/secret';

@Injectable({
  providedIn: 'root'
})
export class GameFlowService {

  constructor() { }

  disableIncorrectlyGuessedLetter(gameArray: Array<ILetter>, letterChoice: string): void {
    gameArray.map(el => {
      if (el.letter === letterChoice) {
        el.isAvailable = false;
        return el;
      }
      return el;
    });
  };

  increaseWrongAttempts(gameArray: Array<ILetter>, secretWord: ISecret, letterChoice: string, attempts: number): number {
    if (!secretWord.word.includes(letterChoice)) {
      attempts++;
      if (attempts >= 10) {
        gameArray.map(el => el.isAvailable = false);
      }
    }
    return attempts;
  }

  revealCorrectlyGuessedLetter(secretWord: ISecret, letterChoice: string): void {
    secretWord.letters.map(el => {
      if (el.letter === letterChoice) {
        el.isAvailable = true;
        return el;
      }
    });
  }

  checkCorrectlyGuessedWord(gameArray: Array<ILetter>, secretWord: ISecret): boolean {
    let allCorrect = true;
    secretWord.letters.forEach(x => {
      if (x.isAvailable === false) {
        allCorrect = false;
      }
    });

    if (allCorrect) {
      gameArray.map(el => el.isAvailable = false);
      return true;
    }

    return false;
  }
}
