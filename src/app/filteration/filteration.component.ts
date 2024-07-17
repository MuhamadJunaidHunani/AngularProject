import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  CountryInfo,
  CountrySearchService,
} from '../Services/country-search.service';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-filteration',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './filteration.component.html',
  styleUrl: './filteration.component.css',
})
export class FilterationComponent implements OnInit {
  constructor(private countryService: CountrySearchService) {}

  countryInfo: CountryInfo[] = [];
  result: CountryInfo[] = [];
  inputValue: string = '';
  Continent: string = '';
  Currency: string = '';
  Area: number = 0;
  Population: number = 0;
  Language: string = '';
  Capital: string = '';
  Timezone: string = '';
  isVisible: boolean = false;
  DataVisible: boolean = false;
  flagUrl: any;
  placeUrl: any;

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((data) => {
      this.countryInfo = data;
      console.log(this.countryInfo);
    });
  }

  filterNames(value: string) {
    this.isVisible = true;
    this.result = this.countryInfo;
    this.result = this.countryInfo.filter((country) =>
      country.name.common.toLowerCase().includes(value.toLowerCase())
    );
  }

  onSelect(SearchCountry: any) {
    this.isVisible = false;
    this.DataVisible = true;
    this.inputValue = SearchCountry.name.common;
    this.result = [SearchCountry.name.common];
    this.flagUrl = SearchCountry.flags.png;
    this.placeUrl = SearchCountry.coatOfArms.png;
    this.Continent = SearchCountry.continents[0];
    this.Currency = SearchCountry.currencies[Object.keys(SearchCountry.currencies)[0]].name + ' ' +SearchCountry.currencies[Object.keys(SearchCountry.currencies)[0]]?.symbol;
    this.Area = SearchCountry.area;
    this.Population = SearchCountry.population;
    this.Language = SearchCountry.languages[Object.keys(SearchCountry.languages)[0]];
    this.Capital = SearchCountry.capital[0];
    this.Timezone = SearchCountry.timezones[0];
  }
}
