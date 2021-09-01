import { TestBed } from '@angular/core/testing';

import { InviteFormDataService } from './invite-form-data.service';

describe('InviteFormDataService', () => {
  let service: InviteFormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InviteFormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
