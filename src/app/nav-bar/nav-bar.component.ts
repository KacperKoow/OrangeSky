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

  constructor(private weatherService: WeatherService) {}

  onSubmit() {
    this.weatherService.colcectWeatherData(this.enteredLocation);
  }
}
