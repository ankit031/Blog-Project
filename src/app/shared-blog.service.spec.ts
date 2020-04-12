import { TestBed } from '@angular/core/testing';

import { SharedBlogService } from './shared-blog.service';

describe('SharedBlogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedBlogService = TestBed.get(SharedBlogService);
    expect(service).toBeTruthy();
  });
});
