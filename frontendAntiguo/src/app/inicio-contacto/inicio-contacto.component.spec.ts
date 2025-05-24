import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioContactoComponent } from './inicio-contacto.component';

describe('InicioContactoComponent', () => {
  let component: InicioContactoComponent;
  let fixture: ComponentFixture<InicioContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioContactoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
