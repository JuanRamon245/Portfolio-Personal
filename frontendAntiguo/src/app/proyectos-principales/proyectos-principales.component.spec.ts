import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosPrincipalesComponent } from './proyectos-principales.component';

describe('ProyectosPrincipalesComponent', () => {
  let component: ProyectosPrincipalesComponent;
  let fixture: ComponentFixture<ProyectosPrincipalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectosPrincipalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosPrincipalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
