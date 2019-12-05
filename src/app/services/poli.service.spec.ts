import { TestBed } from '@angular/core/testing';

import { PoliService } from './poli.service';

describe('PoliService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoliService = TestBed.get(PoliService);
    expect(service).toBeTruthy();
  });
});
