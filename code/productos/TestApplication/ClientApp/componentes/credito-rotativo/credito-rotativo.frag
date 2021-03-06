 Fragment credito-rotativo { 
   Action: add
   Priority: high
   FragmentationPoints: lista-productos
   PointBracketsLan: html
   Destinations: listaProductos
   SourceCode: [ALTERCODE-FRAG]<li>
  <p>
    <button type="button" class="btn btn-outline-primary" (click)="isCollapsed2 = !isCollapsed2"
            [attr.aria-expanded]="isCollapsed2" aria-controls="collapseExample">
      Crédito rotativo Nro 12345 $250
    </button>
  </p>
  <div id="collapseExample" [ngbCollapse]="!isCollapsed2">
    <div class="card">
      <p class="card-body">
        Datos del crédito
        <br />
        Cupo total      <strong>$300</strong>
        <br />
        Valor utilizado <strong>$250</strong>
        <br />
        Cupo disponible <strong>$50</strong>
        <br />
        <br />
        Valor a pagar
        <br />
        Total   <strong>$250</strong>
        <br />
        Mínimo   <strong>$50</strong>
      </p>
      <!-- B-opciones-pagos -->
    </div>
  </div>
</li>
[/ALTERCODE-FRAG]
}
