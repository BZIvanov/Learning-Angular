import { TestBed } from '@angular/core/testing';

import { DrawOnCanvasService } from './draw-on-canvas.service';

describe('DrawOnCanvasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrawOnCanvasService = TestBed.get(DrawOnCanvasService);
    expect(service).toBeTruthy();
  });
});
