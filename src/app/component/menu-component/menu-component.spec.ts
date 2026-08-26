import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { MenuComponent } from './menu-component';

describe('MenuComponent', () => {

  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [MenuComponent],
      providers: [
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

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('deve criar o componente', () => {

    expect(component).toBeTruthy();

  });

});