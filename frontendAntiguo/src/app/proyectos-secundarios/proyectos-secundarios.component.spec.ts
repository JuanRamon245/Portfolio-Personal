import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosSecundariosComponent } from './proyectos-secundarios.component';

describe('ProyectosSecundariosComponent', () => {
  let component: ProyectosSecundariosComponent;
  let fixture: ComponentFixture<ProyectosSecundariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectosSecundariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosSecundariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
