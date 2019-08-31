 Fragment cuenta-ahorros { 
   Action: add
   Priority: low
   FragmentationPoints: lista-pagos
   PointBracketsLan: html
   Destinations: listaProductos
   SourceCode: [ALTERCODE-FRAG]<button style="margin:10px;" class="btn btn-outline-primary" (click)="isCollapsed5 = !isCollapsed5"
        [attr.aria-expanded]="isCollapsed5">
  Cuenta de ahorros
</button>
<div id="collapseExample" [ngbCollapse]="!isCollapsed5">
  <div class="card">
    <p class="card-body">
      Tipo de usuario
      <br />
      <select>
        <option>Persona natural</option>
        <option>Persona jurídica</option>
        <option>Empresa</option>
      </select>
      <br />
      Banco
      <br />
      <select>
        <option>Bancolombia</option>
        <option>Banco de bogotá</option>
        <option>Tequendama</option>
      </select>
      <br />
      <button style="margin-top:15px;" class="btn btn-outline-primary">Pagar</button>
    </p>
  </div>
</div>
[/ALTERCODE-FRAG]
}
