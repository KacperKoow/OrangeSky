import { Component, computed } from '@angular/core';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-location-weather',
  standalone: true,
  imports: [],
  templateUrl: './location-weather.component.html',
  styleUrl: './location-weather.component.scss',
})
export class LocationWeatherComponent {
  constructor(private weatherService: WeatherService) {}

  get weatherData() {
    return this.weatherService.weatherData;
  }
}
