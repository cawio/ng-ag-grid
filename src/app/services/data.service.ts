import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { map } from 'rxjs';
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

export type RamenRating = {
  id: number;
  brand: string;
  variety: string;
  style: string;
  country: string;
  stars: number;
  topTen: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly _launches = signal<Launch[]>([]);
  readonly launches = this._launches.asReadonly();
  private readonly _ramenRatings = signal<RamenRating[]>([]);
  readonly ramenRatings = this._ramenRatings.asReadonly();

  constructor(private http: HttpClient) {
    this.fetchData();
  }

  async fetchData(): Promise<void> {
    const launches = await firstValueFrom(this.fetchSpaceMissionData());
    this._launches.set(launches);
    const ramenRatings = await firstValueFrom(this.readRamenRatingData());
    this._ramenRatings.set(ramenRatings);
  }

  private fetchSpaceMissionData(): Observable<Launch[]> {
    return this.http
      .get<Launch[]>(
        'https://www.ag-grid.com/example-assets/space-mission-data.json'
      )
      .pipe(delay(2000));
  }

  private readRamenRatingData(): Observable<RamenRating[]> {
    return this.http.get(
      'assets/data/ramen-ratings.csv', { responseType: 'text' }
    ).pipe(
      map((data: string) => {
        const ramenRatings: RamenRating[] = [];
        const lines = data.split('\n');
        for (let i = 1; i < lines.length; i++) {
          const line = lines[i];
          if (line) {
            const parts = line.split(',');
            ramenRatings.push({
              id: Number(parts[0]),
              brand: parts[1],
              variety: parts[2],
              style: parts[3],
              country: parts[4],
              stars: Number(parts[5]),
              topTen: parts[6]
            });
          }
        }
        return ramenRatings;
      })
    );
  }
}
