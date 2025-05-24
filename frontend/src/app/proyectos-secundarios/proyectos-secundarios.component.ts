import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos-secundarios',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './proyectos-secundarios.component.html',
  styleUrl: './proyectos-secundarios.component.css'
})
export class ProyectosSecundariosComponent {
  recursos = [
    { 
      nombre: 'En proceso', 
      descripcion: 'Actualmente no hay más proyectos, en un futuro se iran añadiendo y expandiendo este apartado', 
      img: 'undraw_server-error_syuz.svg',
      tecnologias: [
      ]
    }
  ];
}
