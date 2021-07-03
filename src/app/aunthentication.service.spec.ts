import { TestBed } from '@angular/core/testing';

import { AunthenticationService } from './aunthentication.service';

describe('AunthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AunthenticationService = TestBed.get(AunthenticationService);
    expect(service).toBeTruthy();
  });
});
