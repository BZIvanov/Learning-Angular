import { Injectable } from '@angular/core';
import IWord from '../interfaces/anWord';
import ILetter from '../interfaces/anLetter';

@Injectable({
  providedIn: 'root'
})
export class WordsService {
  words: Array<IWord> = [{ word: "bulgaria", hint: "Country in east Europe" }, { word: "angular", hint: "The best JS framework" },
  { word: "spring water", hint: "Something good to drink" }, { word: "unbelievable", hint: "Something amazing" }, 
  { word: "wild guess", hint: "Lucky choice" }, { word: "pineapple", hint: "Something to eat" }
]

  constructor() { }

  getSecretWordAsObject() {
    let randomIndex = Math.floor(Math.random() * this.words.length);
    let word = this.words[randomIndex]["word"];
    let hint = this.words[randomIndex]["hint"];
    let result = word.split("").map((x, i) => {
      if (i === 0 || i === word.length - 1) {
        return {
          letter: x,
          isAvailable: true
        }
      } else {
        if (x === " ") {
          return {
            letter: x,
            isAvailable: true
          }
        }
        return {
          letter: x,
          isAvailable: false
        }
      }
    });

    return {
      letters: result,
      word,
      hint
    };
  }
}
