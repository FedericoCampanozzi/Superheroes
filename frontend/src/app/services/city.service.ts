import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { City } from '../models/city.dto';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private ReadCities = 'v1/City/read'
  
  constructor(private http: HttpClient) {}

  public getCities(): Observable<City[]>{
    return this.http.get<City[]>(
      `${environment.apiUrl}/${this.ReadCities}`
    );
  }
}
