import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { SuperHero } from '../models/super-hero.dto';
import { DataSharing } from '../shared/data-sharing';

@Injectable({
  providedIn: 'root',
})
export class SuperHeroService {
  private Create = 'v1/SuperHero/create';
  private Read = 'v2/SuperHero/read';
  private Update = 'v1/SuperHero/update';
  private Delete = 'v1/SuperHero/delete';
  
  constructor(private http: HttpClient) {}

  public getSuperHeroes(): Observable<SuperHero[]> {
    return this.http.post<SuperHero[]>(`${environment.apiUrl}/${this.Read}`, DataSharing.filterHero);
  }

  public updateHero(hero: SuperHero, idCity: number): Observable<SuperHero[]> {
    return this.http.put<SuperHero[]>(
      `${environment.apiUrl}/${this.Update}?IdCity=${idCity}`,
      hero
    );
  }

  public createHero(hero: SuperHero, idCity: number): Observable<SuperHero[]> {
    return this.http.post<SuperHero[]>(
      `${environment.apiUrl}/${this.Create}?IdCity=${idCity}`,hero,
    );
  }

  public deleteHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.delete<SuperHero[]>(
      `${environment.apiUrl}/${this.Delete}?id=${hero.id}`
    );
  }
}
