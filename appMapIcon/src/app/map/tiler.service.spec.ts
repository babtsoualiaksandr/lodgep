import { TestBed } from '@angular/core/testing';

import { TilerService } from './tiler.service';

describe('TilerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TilerService = TestBed.get(TilerService);
    expect(service).toBeTruthy();
  });
});
