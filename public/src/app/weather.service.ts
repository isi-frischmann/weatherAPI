import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // apiKey from the weather API https://openweathermap.org/
  apiKey: String;

  constructor(private _http: HttpClient) {
    this.apiKey = "ffda7b6d4f2afecfab666698a6544ded";
   }

  //  Get weather from SAN JOSE
  getWeatherSanJose(){
    console.log('In Weather from San Jose');
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?id=5392171&APPID=ffda7b6d4f2afecfab666698a6544ded')
  }

  //  Get weather from Seattle
  getWeatherSeattle(){
    console.log("in Weather from Seattle");
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=seattle&APPID=ffda7b6d4f2afecfab666698a6544ded')
  }

  getWeatherBurbank(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?id=4885983&APPID=ffda7b6d4f2afecfab666698a6544ded');
  }
}
