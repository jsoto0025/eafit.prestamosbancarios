 Fragment credito-empresas { 
   Action: add
   Priority: high
   FragmentationPoints: lista-productos
   PointBracketsLan: html
   Destinations: listaProductos
   SourceCode: [ALTERCODE-FRAG]<li>
  <p>
    <button type="button" class="btn btn-outline-primary" (click)="isCollapsed3 = !isCollapsed3"
            [attr.aria-expanded]="isCollapsed3" aria-controls="collapseExample">
      Crédito empresas Nro 12345 $5000
    </button>
  </p>
  <div id="collapseExample" [ngbCollapse]="!isCollapsed3">
    <div class="card">
      <div class="card-body">
        Datos del crédito
        <br />
        Valor desembolsado      <strong>$5000</strong>
        <br />
        <br />
        Valor a pagar
        <br />
        Total   <strong>$2500</strong>
        <br />
        Mínimo   <strong>$50</strong>
        <!-- B-opciones-pagos -->
      </div>
    </div>
  </div>
</li>
[/ALTERCODE-FRAG]
}
