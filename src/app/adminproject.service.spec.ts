import { TestBed } from '@angular/core/testing';

import { AdminprojectService } from './adminproject.service';

describe('AdminprojectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminprojectService = TestBed.get(AdminprojectService);
    expect(service).toBeTruthy();
  });
});
