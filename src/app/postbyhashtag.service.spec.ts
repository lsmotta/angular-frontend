import { TestBed } from '@angular/core/testing';

import { PostbyhashtagService } from './postbyhashtag.service';

describe('PostbyhashtagService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostbyhashtagService = TestBed.get(PostbyhashtagService);
    expect(service).toBeTruthy();
  });
});
