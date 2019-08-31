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
  private autenticar = false;

  autenticarEmpresa() {
    if (!autenticar)
      alert('Usuario incorrecto');
    else
      alert('Inicio sesión exitoso');

    autenticar = !autenticar;
  }
}
