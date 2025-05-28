import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos-principales',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './proyectos-principales.component.html',
  styleUrl: './proyectos-principales.component.css'
})
export class ProyectosPrincipalesComponent {
  recursos = [
    { 
      nombre: 'Aplicacion de gestion de restaurantes', 
      descripcion: 'Aplicacion movil, diseñada para la gestion interna de un local, como puede ser un bar o restaurante, para que se tenga una gestión virtual de las comandas entre los trabajadores.', 
      img: 'undraw_mobile-application_uc2q.svg',
      enlace: 'https://github.com/JuanRamon245',
      tecnologias: [
        { 
          nombre: 'Firebase', 
          logo: 'logos/firebaseLogo.png' 
        }, {
          nombre: 'Android Studio',
          logo: 'logos/androidLogo.png' 
        }, {
          nombre: 'Git',
          logo: 'logos/gitLogo.png' 
        }
      ]
    }, { 
      nombre: 'Acortador de URLs', 
      descripcion: 'Web con funcion de acortar URLs, introduciondose primero una y luego se proporciona la acortada, pudiendose usar hasta 10 veces y tras esto se eliminará la URL acortada. En este proyecto me encargue yo del Back.', 
      img: 'undraw_building-websites_k2zp.svg',
      enlace: 'https://github.com/JuanRamon245/aplicacionRecortarURLs',
      tecnologias: [
        { 
          nombre: 'Fork', 
          logo: 'logos/forkLogo.png' 
        },
        { 
          nombre: 'Java', 
          logo: 'logos/javaLogo.png' 
        },
        { 
          nombre: 'Jakarta EE', 
          logo: 'logos/jakartaLogo.png' 
        },
        { 
          nombre: 'PHPMyAdmin', 
          logo: 'logos/PhpMyAdminLogo.png' 
        },
        { 
          nombre: 'IntelliJ', 
          logo: 'logos/intellijLogo.png' 
        }
      ]
    }, { 
      nombre: 'TIenda online', 
      descripcion: 'Tienda online, que se puede hacer compras y gestionar el pedido del usuario, pagar y funciones basicas que podria tener una web de estas caracteristicas.', 
      img: 'undraw_website_27ju.svg',
      enlace: 'https://github.com/JuanRamon245/Tienda-online-prototipo',
      tecnologias: [
        { 
          nombre: 'Fork', 
          logo: 'logos/forkLogo.png' 
        },
        { 
          nombre: 'Java', 
          logo: 'logos/javaLogo.png' 
        },
        { 
          nombre: 'Jakarta EE', 
          logo: 'logos/jakartaLogo.png' 
        },
        { 
          nombre: 'MySQL', 
          logo: 'logos/mySQlLogo.png' 
        },
        { 
          nombre: 'IntelliJ', 
          logo: 'logos/intellijLogo.png' 
        }
      ]
    },
  ];
}
