import { Component, NgModule } from '@angular/core';
import {
  FormControl,
  FormsModule,
  NgModel,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { WeatherServiceService } from '../../Services/weather-service.service';
import { CountrySearchService } from '../../Services/country-search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, ReactiveFormsModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  cityname: string = '';
  city: string = '';
  Weather: any;
  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(
    private citySearchService: CountrySearchService,
    private weatherService: WeatherServiceService
  ) {}

  // searchCountries(value: any) {
  //   this.searchQuery = value;
  //   this.city = value;
  //   console.log(this.searchQuery, 'yehi he serachquerry');
  //   if (true) {
  //     this.citySearchService
  //       .searchCountries(this.searchQuery)
  //       .subscribe((data) => {
  //         this.searchResults = data;
  //         this.searchResults.forEach((searchResult) => {
  //           searchResult.cities = searchResult.cities.filter((city: any) => {
  //             if (city.includes('karachi')) {
  //               console.log('includes');
  //               return true; // keep cities that include 'a'
  //             }
  //             return false; // exclude cities that don't include 'a'
  //           });
  //         });
  //         console.log(data, 'data he ye');
  //       });
  //   } else {
  //     this.searchResults = [];
  //     console.log('sorry', this.searchQuery, 'hello');
  //   }
  // }

  onSelectResult(result: any) {
    console.log(result.name, 'junaid..', this.searchResults);
    this.searchQuery = result.name;

    this.searchResults = [];
  }
  generateWeather() {
    this.weatherService.getWeather(this.city).subscribe((data) => {
      this.Weather = data;
    });
    console.log(this.Weather);
  }
}
