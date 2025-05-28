import { Component , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-inicio-contacto',
  imports: [],
  templateUrl: './inicio-contacto.component.html',
  styleUrl: './inicio-contacto.component.css'
})
export class InicioContactoComponent {

  @Output() textoCopiado = new EventEmitter<void>();

  /* Codigo para poder enviar al portapapeles el mensaje */
  copiarTexto(valor: string) {
    navigator.clipboard.writeText(valor).then(() => {
      this.textoCopiado.emit();
    }).catch(err => {
      console.error("Error al copiar:", err);
    });
  }

}
