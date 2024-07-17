import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface CountryInfo {
  name: {
    common: string;
    official: string;
  };
  cca2: string;
  region: string;
  subregion: string;
  population: number;
  capital: string[];
}

@Injectable({
  providedIn: 'root'
})
export class CountrySearchService {
  private apiUrl = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<CountryInfo[]> {
    return this.http.get<CountryInfo[]>(this.apiUrl);
  }
}