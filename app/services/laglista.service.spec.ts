import { TestBed } from '@angular/core/testing';

import { LaglistaService } from './laglista.service';

describe('LaglistaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaglistaService = TestBed.get(LaglistaService);
    expect(service).toBeTruthy();
  });
});
