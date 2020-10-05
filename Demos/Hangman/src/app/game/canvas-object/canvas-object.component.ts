import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

import { DrawOnCanvasService } from 'src/app/shared/services/draw-on-canvas.service';

@Component({
  selector: 'app-canvas-object',
  templateUrl: './canvas-object.component.html',
  styleUrls: ['./canvas-object.component.scss']
})
export class CanvasObjectComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('myCanvas', {static: false}) myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;
  @Input() attempts: number;

  constructor(private canvasService: DrawOnCanvasService) { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.attempts.currentValue > 0) {
      this.canvasService.drawLines(this.attempts, this.context, this.myCanvas);
    }
    if (changes.attempts.previousValue && changes.attempts.currentValue === 0) {
      this.canvasService.drawLines(this.attempts, this.context, this.myCanvas);
    }
  }

  ngAfterViewInit() {
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
  }
}
