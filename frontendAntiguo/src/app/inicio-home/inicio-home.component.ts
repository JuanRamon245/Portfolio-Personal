import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio-home',
  imports: [],
  templateUrl: './inicio-home.component.html',
  styleUrl: './inicio-home.component.css',
  standalone: true,
})
export class InicioHomeComponent {
  constructor(private http: HttpClient) {}

}
