import { Component, HostListener, signal } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MenuLateralComponent } from "./menu-lateral/menu-lateral.component";
import { InicioComponent } from './inicio/inicio.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, HttpClientModule, MenuLateralComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  menuCerrado = signal<boolean>(true);
  screenWidth = signal<number>(window.innerWidth);

  //Cerrar el menu automaticamente si el tamaño de la ventana es inferior a 768 pixeles
  @HostListener('window:resize')
  onResize() {
    this.screenWidth.set(window.innerWidth);
    if (this.screenWidth() < 768) {
      this.menuCerrado.set(true);
    }
  }
  
  estadomenuCerrado(menuCerrado: boolean): void {
    this.menuCerrado.set(menuCerrado);
  }
}
