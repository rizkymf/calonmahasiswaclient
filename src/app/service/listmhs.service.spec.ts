import { TestBed } from '@angular/core/testing';

import { ListmhsService } from './listmhs.service';

describe('ListmhsService', () => {
  let service: ListmhsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListmhsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
