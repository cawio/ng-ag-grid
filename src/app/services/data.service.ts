import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { Observable, delay, firstValueFrom } from 'rxjs';

export type Launch = {
  mission: string;
  company: string;
  location: string;
  date: string; // ISO date format
  time: string; // HH:mm:ss format
  rocket: string;
  price: number;
  successful: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly _launches = signal<Launch[]>([]);
  readonly launches = this._launches.asReadonly();

  constructor(private http: HttpClient) {
    this.fetchData();
  }

  async fetchData(): Promise<void> {
    const launches = await firstValueFrom(this.fetchSpaceMissionData());
    this._launches.set(launches);
  }

  private fetchSpaceMissionData(): Observable<Launch[]> {
    return this.http
      .get<Launch[]>(
        'https://www.ag-grid.com/example-assets/space-mission-data.json'
      )
      .pipe(delay(2000));
  }
}
