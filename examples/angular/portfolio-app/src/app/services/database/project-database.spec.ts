import { TestBed } from '@angular/core/testing';

import { ProjectDatabase } from './project-database';

describe('ProjectDatabase', () => {
  let service: ProjectDatabase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectDatabase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
