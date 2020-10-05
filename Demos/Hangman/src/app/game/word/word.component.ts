import { Component, OnInit, Input } from '@angular/core';

import ILetter from 'src/app/shared/interfaces/anLetter';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {
  @Input() letterObj: ILetter;

  constructor() { }

  ngOnInit() {
  }

}
