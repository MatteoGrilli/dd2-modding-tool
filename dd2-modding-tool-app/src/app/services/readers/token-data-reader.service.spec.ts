import { TestBed } from '@angular/core/testing';

import { TokenDataReaderService } from './token-data-reader.service';

describe('TokenDataReaderService', () => {
  let service: TokenDataReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenDataReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
