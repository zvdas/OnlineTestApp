import { TestBed } from '@angular/core/testing';

import { CrudDatabaseService } from './crud-database.service';

describe('CrudDatabaseService', () => {
  let service: CrudDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
