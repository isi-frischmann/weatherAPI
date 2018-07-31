import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  weather: any;
  humidity: any;
  celcius: any;
  status_main: any;
  status_description: any;

  constructor( private _weatherService: WeatherService) { }

  ngOnInit() {
    this.showWeatherSanJose();
  }

  showWeatherSanJose(){
    console.log("Get request from server for showWeather");
    const getWeatherObservable = this._weatherService.getWeatherSanJose();
    getWeatherObservable.subscribe(res => {
      this.weather = res;
      const changeKelvin = this.weather['main'].temp;
      
      this.humidity = this.weather['main'].humidity;
      console.log('Weather: ', changeKelvin);
      this.celcius = Math.round(changeKelvin - 273);
      this.status_main = this.weather.weather[0].main;
      this.status_description = this.weather.weather[0].description;
    })
  }
}
