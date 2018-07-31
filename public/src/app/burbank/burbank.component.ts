import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather: any;
  humidity: any;
  celcius: any;
  status_main: any;
  status_description: any;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.showWeatherBurbank();
  }

  showWeatherBurbank(){
    const getWeatherObservable = this._weatherService.getWeatherBurbank();
    getWeatherObservable.subscribe(weather => {
      this.weather = weather;
      const changeKelvin = this.weather['main'].temp;

      this.humidity = this.weather['main'].humidity;
      this.celcius = Math.round(changeKelvin - 273);
      this.status_main = this.weather.weather[0].main;
      this.status_description = this.weather.weather[0].description;
    })
  }
}
