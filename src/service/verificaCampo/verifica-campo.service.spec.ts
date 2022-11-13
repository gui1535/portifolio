import { TestBed } from '@angular/core/testing';

import { VerificaCampoService } from './verifica-campo.service';

describe('VerificaCampoService', () => {
  let service: VerificaCampoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerificaCampoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
