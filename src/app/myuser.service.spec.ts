import { TestBed } from '@angular/core/testing';

import { MyuserService } from './myuser.service';

describe('MyuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyuserService = TestBed.get(MyuserService);
    expect(service).toBeTruthy();
  });
});
