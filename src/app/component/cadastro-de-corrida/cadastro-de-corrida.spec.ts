import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDeCorrida } from './cadastro-de-corrida';

describe('CadastroDeCorrida', () => {
  let component: CadastroDeCorrida;
  let fixture: ComponentFixture<CadastroDeCorrida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroDeCorrida],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroDeCorrida);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
