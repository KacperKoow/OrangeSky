import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LocationWeatherComponent } from './location-weather/location-weather.component';
import { ForecastListComponent } from './forecast-list/forecast-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBarComponent, LocationWeatherComponent, ForecastListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'orange-sky';
}
