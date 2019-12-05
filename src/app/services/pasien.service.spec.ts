import { TestBed } from '@angular/core/testing';

import { PasienService } from './pasien.service';

describe('PasienService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PasienService = TestBed.get(PasienService);
    expect(service).toBeTruthy();
  });
});
