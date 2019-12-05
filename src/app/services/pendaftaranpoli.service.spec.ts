import { TestBed } from '@angular/core/testing';

import { PendaftaranpoliService } from './pendaftaranpoli.service';

describe('PendaftaranpoliService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PendaftaranpoliService = TestBed.get(PendaftaranpoliService);
    expect(service).toBeTruthy();
  });
});
