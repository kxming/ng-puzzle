import { TestBed } from '@angular/core/testing';

import { AttrService } from './attr.service';

describe('AttrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AttrService = TestBed.get(AttrService);
    expect(service).toBeTruthy();
  });
});
