import { TestBed } from '@angular/core/testing';

import { UiPopinService } from './ui-popin.service';

describe('UiPopinService', () => {
  let service: UiPopinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiPopinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
