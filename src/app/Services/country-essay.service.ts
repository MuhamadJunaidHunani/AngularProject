// // country.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// export interface Country {
//   name: {
//     common: string;
//     official: string;
//   };
//   cca2: string;
//   region: string;
//   subregion: string;
//   population: number;
//   capital: string[];
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class CountryService {
//   private apiUrl = 'https://restcountries.com/v3.1/all';

//   constructor(private http: HttpClient) {}

//   getCountries(): Observable<Country[]> {
//     return this.http.get<Country[]>(this.apiUrl);
//   }
// }
