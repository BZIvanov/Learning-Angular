import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawOnCanvasService {

  constructor() { }

  drawLines(n: number, context: CanvasRenderingContext2D, myCanvas: ElementRef) {
    let canvasObjects = {
      0: (context: CanvasRenderingContext2D, myCanvas: ElementRef) => {
        context.clearRect(0, 0, myCanvas.nativeElement.width, myCanvas.nativeElement.height);
      },
      1: (context: CanvasRenderingContext2D) => {
        context.strokeStyle = "#ffffff";
        context.strokeRect(55, 220, 175, 0);
      },
      2: (context: CanvasRenderingContext2D) => {
        context.strokeRect(60, 50, 1, 170);
      },
      3: (context: CanvasRenderingContext2D) => {
        context.strokeRect(55, 55, 125, 0);
      },
      4: (context: CanvasRenderingContext2D) => {
        context.strokeRect(125, 55, 0, 15);
      },
      5: (context: CanvasRenderingContext2D) => {
        context.strokeStyle = "#dc3545";
        context.beginPath();
        context.arc(125, 80, 10, 0, 2 * Math.PI);
        context.stroke();
      },
      6: (context: CanvasRenderingContext2D) => {
        context.strokeRect(125, 90, 0, 50);
      },
      7: (context: CanvasRenderingContext2D) => {
        context.beginPath();
        context.moveTo(100, 110);
        context.lineTo(125, 100);
        context.stroke();
      },
      8: (context: CanvasRenderingContext2D) => {
        context.beginPath();
        context.moveTo(125, 100);
        context.lineTo(150, 110);
        context.stroke();
      },
      9: (context: CanvasRenderingContext2D) => {
        context.beginPath();
        context.moveTo(100, 150);
        context.lineTo(125, 140);
        context.stroke();
      },
      10: function (context: CanvasRenderingContext2D) {
        context.clearRect(0, 0, 350, 250);
        context.font = "32px Righteous";
        context.fillStyle = "#ffffff"; 
        context.fillText("Game Over", 85, 130);
      }
    }
    canvasObjects[n](context, myCanvas);
  }

  resetCanvas(context: CanvasRenderingContext2D) {
    context.clearRect(0, 0, 350, 250);
  }
}
