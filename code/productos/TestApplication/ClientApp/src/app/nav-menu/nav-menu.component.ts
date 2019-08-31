import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  /*B-autenticacion-funciones*/
  autenticarPersonas = false;

  autenticarPersona() {
    if (!this.autenticarPersonas)
      alert('Usuario incorrecto');
    else
      alert('Inicio sesión exitoso');

    this.autenticarPersonas = !this.autenticarPersonas;
  }
}
