import { TestBed } from '@angular/core/testing';

import { ScrollConfigService } from './scroll-config.service';

describe('ScrollConfigService', () => {
  let service: ScrollConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
