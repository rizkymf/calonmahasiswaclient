import { TestBed } from '@angular/core/testing';

import { DatamhsService } from './datamhs.service';

describe('DatamhsService', () => {
  let service: DatamhsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatamhsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
