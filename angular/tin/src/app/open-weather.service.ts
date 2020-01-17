import { Injectable } from '@angular/core';
import { IOpenWeather } from './open-weather';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  private _urlCurrentWeather: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  

  getCurrentWeather(latitude, longitude): Observable<IOpenWeather[]> {
    const httpOptions = {
      params: new HttpParams()
      .set('lat', latitude)
      .set('lon', longitude)
      .set('APPID', 'efb2be66ec5d0327c45efe9ae636b127')
    };

    return this.http.get<IOpenWeather[]>(this._urlCurrentWeather, httpOptions);
  }
}
