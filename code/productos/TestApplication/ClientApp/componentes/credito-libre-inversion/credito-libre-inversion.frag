 Fragment credito-libre-inversion { 
   Action: add
   Priority: high
   FragmentationPoints: lista-productos
   PointBracketsLan: html
   Destinations: listaProductos
   SourceCode: [ALTERCODE-FRAG]<li>
  <p>
    <button type="button" class="btn btn-outline-primary" (click)="isCollapsed4 = !isCollapsed4"
            [attr.aria-expanded]="isCollapsed4" aria-controls="collapseExample">
      Crédito libre Inversión Nro 12345 $450
    </button>
  </p>
  <div id="collapseExample" [ngbCollapse]="!isCollapsed4">
    <div class="card">
      <div class="card-body">
        Datos del crédito
        <br />
        Valor desembolsado      <strong>$450</strong>
        <br />
        <br />
        Valor a pagar
        <br />
        Total   <strong>$150</strong>
        <br />
        Mínimo   <strong>$40</strong>
        <!-- B-opciones-pagos -->
      </div>
    </div>
  </div>
</li>
[/ALTERCODE-FRAG]
}
