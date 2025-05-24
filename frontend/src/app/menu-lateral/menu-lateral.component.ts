import { CommonModule } from '@angular/common';
import { Component, input, output, ViewChild, ElementRef } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})

//Links para viajar o interactuar en el menu
export class MenuLateralComponent {
  menuCerrado = input.required<boolean>();
  estadomenuCerrado = output<boolean>();
  @ViewChild('gearIcon', { static: false }) gearIcon!: ElementRef;

  items = [
    {
      routeLink: '',
      label: 'INICIO',
      isLink: true,
    },
    {
      routeLink: 'proyectos',
      label: 'PROYECTOS',
      isLink: true,
    },
    {
      routeLink: 'tecnologias',
      label: 'TECNOLOGIAS',
      isLink: true,
    }
  ];


  cerrarMenu(): void {
    this.estadomenuCerrado.emit(!this.menuCerrado());

    const icon = this.gearIcon.nativeElement;

    icon.classList.remove('girar');

    void icon.offsetWidth;

    icon.classList.add('girar');
    }
}
