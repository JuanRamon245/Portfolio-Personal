import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tecnologias',
  imports: [CommonModule],
  templateUrl: './tecnologias.component.html',
  styleUrl: './tecnologias.component.css'
})
export class TecnologiasComponent {
  frontendWeb = [
    {
      nombre: 'Angular',
      logo: 'logos/angularLogo.png',
      nivelConocimientos: 2
    },
    {
      nombre: 'JavaScript',
      logo: 'logos/javascriptLogo.png',
      nivelConocimientos: 2
    },
    {
      nombre: 'HTML',
      logo: 'logos/htmlLogo.png',
      nivelConocimientos: 2
    },
    {
      nombre: 'CSS',
      logo: 'logos/cssLogo.png',
      nivelConocimientos: 2
    }
  ];

  backendWeb = [
    {
      nombre: 'Spring',
      logo: 'logos/springLogo.png',
      nivelConocimientos: 2
    },
    {
      nombre: 'Springboot',
      logo: 'logos/springbootLogo.png',
      nivelConocimientos: 2
    }
  ];

  desarrolloMovil = [
    {
      nombre: 'AndroidStudio',
      logo: 'logos/androidLogo.png',
      nivelConocimientos: 3
    }
  ];

  desarrolloEscritorio = [
    {
      nombre: 'Java',
      logo: 'logos/javaLogo.png',
      nivelConocimientos: 3
    },
    {
      nombre: 'Python',
      logo: 'logos/pythonLogo.png',
      nivelConocimientos: 2
    }
  ];

  herramientas = [
    {
      nombre: 'Hibernate',
      logo: 'logos/hibernateLogo.svg',
      nivelConocimientos: 3
    },
    {
      nombre: 'Github',
      logo: 'logos/gitLogo.png',
      nivelConocimientos: 3
    },
    {
      nombre: 'Fork',
      logo: 'logos/forkLogo.png',
      nivelConocimientos: 3
    },
    {
      nombre: 'PHPMyAdmin',
      logo: 'logos/PhpMyAdminLogo.png',
      nivelConocimientos: 3
    },
    {
      nombre: 'MySQL',
      logo: 'logos/mySQlLogo.png',
      nivelConocimientos: 3
    },
    {
      nombre: 'JakartaEE',
      logo: 'logos/jakartaLogo.png',
      nivelConocimientos: 2
    },
    {
      nombre: 'Firebase',
      logo: 'logos/firebaseLogo.png',
      nivelConocimientos: 2
    },
    {
      nombre: 'Postman',
      logo: 'logos/postmanLogo.svg',
      nivelConocimientos: 3
    },
  ];

  IDEs = [
    {
      nombre: 'Eclipse',
      logo: 'logos/eclipseLogo.svg',
      nivelConocimientos: 3
    },
    {
      nombre: 'IntelliJ',
      logo: 'logos/intellijLogo.png',
      nivelConocimientos: 2
    },
    {
      nombre: 'VSCode',
      logo: 'logos/vscodeLogo.png',
      nivelConocimientos: 2
    },
    {
      nombre: 'Spyder',
      logo: 'logos/spyderLogo.png',
      nivelConocimientos: 1
    }
  ];

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}
