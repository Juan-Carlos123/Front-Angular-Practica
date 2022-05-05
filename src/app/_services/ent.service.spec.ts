import { TestBed } from '@angular/core/testing';

import { EntService } from './ent.service';

describe('EntService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntService = TestBed.get(EntService);
    expect(service).toBeTruthy();
  });
});
