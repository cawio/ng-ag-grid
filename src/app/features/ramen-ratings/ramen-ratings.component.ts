import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-ramen-ratings',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './ramen-ratings.component.html',
  styleUrl: './ramen-ratings.component.scss'
})
export class RamenRatingsComponent {
  ramenRatings = this.dataService.ramenRatings;
  columnDefs: ColDef[] = [
    { field: 'brand' },
    { field: 'variety' },
    { field: 'style' },
    { field: 'country' },
    { field: 'stars' },
    { field: 'topTen' },
  ];

  constructor(private dataService: DataService) { }

  onGridReady(params: any) {
    params.api.sizeColumnsToFit();
  }
}
