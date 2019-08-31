 Fragment autenticar-emepresas { 
   Action: add
   Priority: high
   FragmentationPoints: menu-autenticar
   PointBracketsLan: html
   Destinations: nav-menu-presentacion
   SourceCode: [ALTERCODE-FRAG]<li class="nav-item">
  <div ngbDropdown class="d-inline-block">
    <button class="btn btn-outline-primary" id="dropdownBasic1" ngbDropdownToggle>Acceder empresas</button>
    <div ngbDropdownMenu aria-labelledby="dropdownBasic1">
      <div class="container">
        <label>NIT</label>
        <input type="text" />
        <label>Clave Segura</label>
        <input type="text" />
        <label>Código personal</label>
        <input type="text" />
        <button (click)="autenticarEmpresa()" type="button" style="margin-top:10px;" class="btn btn-outline-primary">Entrar a empresas</button>
      </div>
    </div>
  </div>
</li>[/ALTERCODE-FRAG]
}
