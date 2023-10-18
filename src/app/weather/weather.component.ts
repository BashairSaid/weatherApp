import { Component,OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { subscribeOn } from 'rxjs';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent   {
  myweather : any; 
  temperature : number =0;
  feelslikeTemp : number=0;
  humidity: number =0;
  pressure: number=0;
  summary : string ='';
  iconURL : String ='';
  city: string = '' ;
  IsChangeLocation=false;

  

  constructor( private weatherService : WeatherService ){}

  changeLocation(){
    debugger
    this.IsChangeLocation=this.IsChangeLocation==true?false:true;
  }

  getWeatherByCity() {
    debugger
    
    this.weatherService.getweather(this.city).subscribe({
      next: (res) =>{
        console.log(res)
        this.myweather =res ;
        console.log(this.myweather);
        this.temperature= this.myweather.main.temp;
        this.feelslikeTemp= this.myweather.main.feels_like;
        this.humidity= this.myweather.main.humidity;
        this.pressure= this.myweather.main.pressure;
        this.summary= this.myweather.weather[0].main;
        this.iconURL='https://openweathermap.org/img/wn/'+ this.myweather.weather[0].icon + '@2x.png';
        
        
      },

      error:(error)  => console.log(error.message),
      complete:() => console.info('API call completed')
    })

    
  }

  

 


}

