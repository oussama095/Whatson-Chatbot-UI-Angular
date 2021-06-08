import { TestBed } from '@angular/core/testing';

import { WatsonServiceService } from './watson.service';

describe('WatsonServiceService', () => {
  let service: WatsonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatsonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
