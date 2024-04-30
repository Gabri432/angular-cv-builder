import { TestBed } from '@angular/core/testing';

import { GenerateCVService } from './generate-cv.service';

describe('GenerateCVService', () => {
  let service: GenerateCVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateCVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
