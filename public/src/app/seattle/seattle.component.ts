import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather: any;
  humidity: any;
  celcius: any;
  status_main: any;
  status_description: any;

  constructor( private _weatherService: WeatherService) { }

  ngOnInit() {
    this.showWeatherSeattle();
  }

  showWeatherSeattle(){
    const getWeatherObservable = this._weatherService.getWeatherSeattle();
    getWeatherObservable.subscribe(res => {
      console.log("I'm in the seattle weather");
      this.weather = res;

      const changeKelvin = this.weather['main'].temp;

      this.humidity = this.weather['main'].humidity;
      this.celcius = Math.round(changeKelvin - 273);
      this.status_main = this.weather.weather[0].main;
      this.status_description = this.weather.weather[0].description;
    })
  }

}
