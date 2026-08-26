import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { App } from './app';

describe('App', () => {

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [App],
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

  });

  it('deve criar o aplicativo', () => {

    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();

  });

});