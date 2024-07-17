import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService {

  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    const apiKey = '6d8a6f6486d456ea13671547aa8aa60a';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    return this.http.get(url);
  }
}
