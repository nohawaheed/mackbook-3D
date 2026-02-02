import { TestBed } from '@angular/core/testing';

import { Mackbook } from './mackbook';

describe('Mackbook', () => {
  let service: Mackbook;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mackbook);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
