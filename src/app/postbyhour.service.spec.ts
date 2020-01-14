import { TestBed } from '@angular/core/testing';

import { PostbyhourService } from './postbyhour.service';

describe('PostbyhourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostbyhourService = TestBed.get(PostbyhourService);
    expect(service).toBeTruthy();
  });
});
