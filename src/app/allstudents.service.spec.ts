import { TestBed } from '@angular/core/testing';

import { AllstudentsService } from './allstudents.service';

describe('AllstudentsService', () => {
  let service: AllstudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllstudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
