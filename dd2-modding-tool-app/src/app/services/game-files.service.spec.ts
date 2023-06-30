import { TestBed } from '@angular/core/testing';

import { GameFilesService } from './game-files.service';

describe('GameFilesService', () => {
  let service: GameFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
