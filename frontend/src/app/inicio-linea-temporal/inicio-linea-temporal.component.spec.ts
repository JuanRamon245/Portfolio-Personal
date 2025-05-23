import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioLineaTemporalComponent } from './inicio-linea-temporal.component';

describe('InicioLineaTemporalComponent', () => {
  let component: InicioLineaTemporalComponent;
  let fixture: ComponentFixture<InicioLineaTemporalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioLineaTemporalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioLineaTemporalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
