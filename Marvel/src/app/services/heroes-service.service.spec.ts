import { TestBed } from '@angular/core/testing';

import { HeroesServiceService } from './heroes-service.service';

describe('HeroesServiceService', () => {
  let service: HeroesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
