import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, throwError } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private apiKey = environment.apiKey;
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private forecastApiUrl =
    'https://api.openweathermap.org/data/2.5/forecast/daily';

  private weatherDataSubject = new BehaviorSubject<any>(null);
  weatherData$ = this.weatherDataSubject.asObservable();

  constructor(private httpClient: HttpClient) {}

  getWeatherData(city: string) {
    return this.httpClient
      .get<any>(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`)
      .pipe(
        map((data) => {
          this.weatherDataSubject.next(data);
          return data;
        }),
        catchError((error) => {
          console.error('Error fetching weather data:', error);
          return throwError(() => new Error('Failed to load weather data'));
        })
      );
  }
}
