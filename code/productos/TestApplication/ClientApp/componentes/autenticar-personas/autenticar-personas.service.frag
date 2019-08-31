 Fragment autenticar-personas-service { 
   Action: add
   Priority: high
   FragmentationPoints: autenticacion-funciones
   PointBracketsLan: java
   Destinations: nav-menu-component
   SourceCode: [ALTERCODE-FRAG]
autenticarPersona = false;

autenticarPersona() {
  if (!autenticarPersona)
    alert('Usuario incorrecto');
  else
    alert('Inicio sesión exitoso');

  autenticarPersona = !autenticarPersona;
}
[/ALTERCODE-FRAG]
}
