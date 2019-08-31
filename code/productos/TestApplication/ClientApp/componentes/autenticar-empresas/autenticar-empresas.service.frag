 Fragment autenticar-emepresas-service { 
   Action: add
   Priority: high
   FragmentationPoints: autenticacion-funciones
   PointBracketsLan: java
   Destinations: nav-menu-component
   SourceCode: [ALTERCODE-FRAG]autenticar = false;

autenticarEmpresa() {
  if (!autenticar)
    alert('Usuario incorrecto');
  else
    alert('Inicio sesión exitoso');

  autenticar = !autenticar;
}[/ALTERCODE-FRAG]
}
