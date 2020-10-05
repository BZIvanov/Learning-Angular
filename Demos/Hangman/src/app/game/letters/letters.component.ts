import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import ILetter from 'src/app/shared/interfaces/anLetter';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss']
})
export class LettersComponent implements OnInit {
  @Input() letterObj: ILetter;
  @Output() emitLetter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  letterClick() {
    this.emitLetter.emit(this.letterObj.letter);
  }
}
