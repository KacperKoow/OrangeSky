import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  enteredLocation = '';
  weatherData: any = null; // Dane do przekazania do location-weather

  constructor(private weatherService: WeatherService) {}

  onSubmit() {
    if (this.enteredLocation.trim()) {
      this.weatherService.getWeatherData(this.enteredLocation).subscribe();
    }
  }
}
