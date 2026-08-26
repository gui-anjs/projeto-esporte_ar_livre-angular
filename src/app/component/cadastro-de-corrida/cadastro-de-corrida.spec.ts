import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { CadastroDeCorrida } from './cadastro-de-corrida';
import { CorridaService } from '../../service/corrida';

describe('CadastroDeCorrida', () => {

  let component: CadastroDeCorrida;
  let fixture: ComponentFixture<CadastroDeCorrida>;

  const corridaServiceMock = {
    listarCorrida: () => ({
      subscribe: () => {}
    })
  };

  const routerMock = {
    navigate: () => {}
  };

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [CadastroDeCorrida],
      providers: [
        {
          provide: CorridaService,
          useValue: corridaServiceMock
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => null
              }
            }
          }
        },
        {
          provide: Router,
          useValue: routerMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroDeCorrida);
    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('deve criar o componente', () => {

    expect(component).toBeTruthy();

  });

});