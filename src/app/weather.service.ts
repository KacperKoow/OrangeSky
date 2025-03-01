import { Injectable, Input } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  weatherData?: {
    city: string;
    temperature: number;
    windSpeed: number;
    humidity: number;
  };
  colcectWeatherData(location: string) {
    if (location.toLowerCase() === 'warszawa') {
      this.weatherData = {
        city: 'Warszawa',
        temperature: 12,
        windSpeed: 15,
        humidity: 80,
      };
    } else if (location.toLowerCase() === 'londyn') {
      this.weatherData = {
        city: 'Londyn',
        temperature: 8,
        windSpeed: 20,
        humidity: 75,
      };
    } else {
      console.log('blad');
    }
  }
}
