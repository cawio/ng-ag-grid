import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-example-grid',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './example-grid.component.html',
  styleUrl: './example-grid.component.scss',
})
export class ExampleGridComponent {
  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000, electric: false },
    { make: 'Ford', model: 'Mondeo', price: 32000, electric: false },
    { make: 'Porsche', model: 'Boxster', price: 72000, electric: false },
    { make: 'Tesla', model: 'Model S', price: 110000, electric: true },
  ];

  columnDefs: ColDef[] = [
    { field: 'make', sortable: true, filter: true },
    { field: 'model', sortable: true, filter: true },
    { field: 'price', sortable: true, filter: true },
    { field: 'electric', sortable: true, filter: true },
  ];
}
