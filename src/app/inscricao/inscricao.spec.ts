import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { InscricaoComponent } from './inscricao';
import { AtletaService } from '../service/atleta-service';
import { CorridaService } from '../service/corrida';

describe('InscricaoComponent', () => {

  let component: InscricaoComponent;
  let fixture: ComponentFixture<InscricaoComponent>;

  const atletaServiceMock = {
    listarAtletas: () => of([])
  };

  const corridaServiceMock = {
    listarCorridas: () => of([])
  };

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [InscricaoComponent],
      providers: [
        {
          provide: AtletaService,
          useValue: atletaServiceMock
        },
        {
          provide: CorridaService,
          useValue: corridaServiceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(InscricaoComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('deve criar o componente', () => {

    expect(component).toBeTruthy();

  });

});