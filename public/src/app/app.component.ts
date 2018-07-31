import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor( private _weatherService: WeatherService
    // when you don't have any API
    // private _route: ActivatedRoute,
    // private _router: Router
  ){}
  
  ngOnInit(){
    // normally the routing goes here
    // this._route.params.subscribe((params: Params) => console.log(params['id']));
  }

  // goHome(){
  //   this._router.navigate(['/home']);
  // }
}
