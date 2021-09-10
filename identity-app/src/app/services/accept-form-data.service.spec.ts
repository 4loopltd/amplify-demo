import { TestBed } from '@angular/core/testing';

import { AcceptFormDataService } from './accept-form-data.service';

describe('AcceptFormDataService', () => {
  let service: AcceptFormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcceptFormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
