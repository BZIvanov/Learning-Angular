import { Injectable } from '@angular/core';

import ILetter from '../interfaces/anLetter';

@Injectable({
  providedIn: 'root'
})
export class LettersService {
  letters: Array<ILetter> = [{ letter: "a", isAvailable: true }, { letter: "b", isAvailable: true },
  { letter: "c", isAvailable: true }, { letter: "d", isAvailable: true }, { letter: "e", isAvailable: true },
  { letter: "f", isAvailable: true }, { letter: "g", isAvailable: true }, { letter: "h", isAvailable: true },
  { letter: "i", isAvailable: true }, { letter: "j", isAvailable: true }, { letter: "k", isAvailable: true },
  { letter: "l", isAvailable: true }, { letter: "m", isAvailable: true }, { letter: "n", isAvailable: true },
  { letter: "o", isAvailable: true }, { letter: "p", isAvailable: true }, { letter: "q", isAvailable: true },
  { letter: "r", isAvailable: true }, { letter: "s", isAvailable: true }, { letter: "t", isAvailable: true },
  { letter: "u", isAvailable: true }, { letter: "v", isAvailable: true }, { letter: "w", isAvailable: true },
  { letter: "x", isAvailable: true }, { letter: "y", isAvailable: true }, { letter: "z", isAvailable: true },]

  constructor() { }

  generateGameArray() {
    let result: Array<ILetter> = [];
    this.letters.forEach(el => {
      result.push(Object.assign({}, el));
    });
    return result;
  }
}
