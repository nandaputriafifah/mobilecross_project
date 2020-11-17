import { TestBed } from '@angular/core/testing';

import { BatikService } from './batik.service';

describe('BatikService', () => {
  let service: BatikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
