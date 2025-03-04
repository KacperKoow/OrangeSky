import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LocationWeatherComponent } from './location-weather/location-weather.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBarComponent, LocationWeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'orange-sky';
}
