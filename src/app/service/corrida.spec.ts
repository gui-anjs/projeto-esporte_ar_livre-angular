import { TestBed } from '@angular/core/testing';

import { CorridaService } from './corrida';

describe('CorridaService', () => {

  let service: CorridaService;

  beforeEach(() => {

    TestBed.configureTestingModule({});

    service = TestBed.inject(CorridaService);

  });

  it('deve criar o serviço', () => {

    expect(service).toBeTruthy();

  });

});