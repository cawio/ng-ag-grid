import { Component, Signal, effect } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { DataService, Launch } from '../../services/data.service';
import { CompanyLogoRendererComponent } from '../../company-logo-renderer/company-logo-renderer.component';

@Component({
  selector: 'app-example-grid',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './example-grid.component.html',
  styleUrl: './example-grid.component.scss',
})
export class ExampleGridComponent {
  rowData: Signal<Launch[] | undefined>;
  defaultColDef: ColDef = {
    resizable: true,
    sortable: true,
    filter: true,
  };
  columnDefs: ColDef[] = [
    { field: 'mission' },
    { field: 'company', cellRenderer: CompanyLogoRendererComponent },
    { field: 'location' },
    { field: 'date' },
    {
      field: 'price',
      valueFormatter: (params) => {
        return `${params.value} €`;
      },
    },
    { field: 'successful' },
    { field: 'rocket' },
  ];

  constructor(private dataService: DataService) {
    this.rowData = this.dataService.launches;
  }

  onGridReady(params: GridReadyEvent) {
    params.api.sizeColumnsToFit();
  }
}
