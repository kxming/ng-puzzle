import { TestBed } from '@angular/core/testing';

import { BlurService } from './blur.service';

describe('BlurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlurService = TestBed.get(BlurService);
    expect(service).toBeTruthy();
  });
});
