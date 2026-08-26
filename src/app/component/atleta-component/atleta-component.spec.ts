import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { AtletaComponent } from './atleta-component';
import { AtletaService } from '../../service/atleta-service';

describe('AtletaComponent', () => {

  let component: AtletaComponent;
  let fixture: ComponentFixture<AtletaComponent>;

  const atletaServiceMock = {
    listarAtleta: () => of({})
  };

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [AtletaComponent],
      providers: [
        {
          provide: AtletaService,
          useValue: atletaServiceMock
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
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AtletaComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });


  it('deve criar o componente', () => {

    expect(component).toBeTruthy();

  });


  it('deve limpar todos os campos do atleta', () => {

    component.id = 1;
    component.nome = 'João';
    component.cpf = 123456789;
    component.sexo = 'Masculino';
    component.dataNascimento = '2000-01-01';
    component.cep = 49000000;
    component.rua_logradouro = 'Rua Teste';
    component.bairro = 'Centro';
    component.cidade = 'Aracaju';
    component.uf = 'SE';

    component.limparAtributos();

    expect(component.id).toBe(0);
    expect(component.nome).toBe('');
    expect(component.cpf).toBe(0);
    expect(component.sexo).toBe('');
    expect(component.dataNascimento).toBe('');
    expect(component.cep).toBe(0);
    expect(component.rua_logradouro).toBe('');
    expect(component.bairro).toBe('');
    expect(component.cidade).toBe('');
    expect(component.uf).toBe('');

  });

});