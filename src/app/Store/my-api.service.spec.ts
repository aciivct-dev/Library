import { TestBed } from '@angular/core/testing';

import { MyApiServiceTsService } from './my-api.service';

describe('MyApiServiceTsService', () => {
  let service: MyApiServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyApiServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
