import { TestBed } from '@angular/core/testing';

import { ObatService } from './obat.service';

describe('ObatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObatService = TestBed.get(ObatService);
    expect(service).toBeTruthy();
  });
});
