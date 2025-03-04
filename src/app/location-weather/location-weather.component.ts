import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-location-weather',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './location-weather.component.html',
  styleUrl: './location-weather.component.scss',
})
export class LocationWeatherComponent implements OnInit {
  weatherData: any = null;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.weatherData$.subscribe((data) => {
      this.weatherData = data;
    });
  }
}
