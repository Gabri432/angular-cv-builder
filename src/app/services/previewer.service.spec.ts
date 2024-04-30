import { TestBed } from '@angular/core/testing';

import { PreviewerService } from './previewer.service';

describe('PreviewerService', () => {
  let service: PreviewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
