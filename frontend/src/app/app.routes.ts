import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';

export const rutas: Routes = [
    { path: '', component: InicioComponent },
    { path: 'proyectos', component: ProyectosComponent},
    { path: 'tecnologias', component: TecnologiasComponent}
];