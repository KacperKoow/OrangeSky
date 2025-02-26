import { Component } from '@angular/core';
import { ForcastDayComponent } from './forcast-day/forcast-day.component';

@Component({
  selector: 'app-forecast-list',
  standalone: true,
  imports: [ForcastDayComponent],
  templateUrl: './forecast-list.component.html',
  styleUrl: './forecast-list.component.scss',
})
export class ForecastListComponent {}
