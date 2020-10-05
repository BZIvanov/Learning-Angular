import { TestBed } from '@angular/core/testing';

import { GameFlowService } from './game-flow.service';

describe('GameFlowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameFlowService = TestBed.get(GameFlowService);
    expect(service).toBeTruthy();
  });
});
