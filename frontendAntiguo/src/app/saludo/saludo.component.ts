import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css'],
  standalone: true,
  imports: []
})
export class SaludoComponent {
  constructor(private http: HttpClient) {}

  mostrarMensaje() {
    this.http.get('http://localhost:8080/api/hello', { responseType: 'text' })
      .subscribe((mensaje) => {
        alert(mensaje); // Aquí mostramos el "bocadillo"
      });
  }
}
