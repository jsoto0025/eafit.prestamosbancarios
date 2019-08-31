 Fragment tarjeta-credito-virtual { 
   Action: add
   Priority: high
   FragmentationPoints: lista-productos
   PointBracketsLan: html
   Destinations: listaProductos
   SourceCode: [ALTERCODE-FRAG]<li>
  <p>
    <button type="button" class="btn btn-outline-primary" (click)="isCollapsed = !isCollapsed"
            [attr.aria-expanded]="isCollapsed" aria-controls="collapseExample">
      Tarjeta de crédito virtual Nro 0000.0000.0000.0000
    </button>
  </p>
  <div id="collapseExample" [ngbCollapse]="!isCollapsed">
    <div class="card">
      <div class="card-body">
        Datos de la tarjeta de credito
        <br />
        Cupo total      <strong>3000</strong>
        <br />
        Valor utilizado <strong>1000</strong>
        <br />
        Cupo disponible <strong>2000</strong>
        <br />
        <br />
        Valor a pagar
        <br />
        Total   <strong>1000</strong>
        <br />
        Mínimo   <strong>100</strong>
        <!-- B-opciones-pagos -->
      </div>
    </div>
  </div>
</li>

[/ALTERCODE-FRAG]
}
