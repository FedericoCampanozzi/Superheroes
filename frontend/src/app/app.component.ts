import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { City } from './models/city.dto';
import { CityService } from './services/city.service';
import { FilterHeroDTO } from './models/filter-hero.dto';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'SuperHero.UI';
  mode = new FormControl('over');
  open = true;
  cities: City[] = [];
  filter: FilterHeroDTO = new FilterHeroDTO();

  @ViewChild("sidefilter") sidenav?: MatSidenav = undefined;

  public constructor(private CityService: CityService){
  }

  ngOnInit(): void {
    this.CityService
    .getCities()
    .subscribe((result: City[]) => {
      this.cities = result;
    });
  }
  
  toggle(){
    this.sidenav?.toggle();
  }

  cerca(){
    this.sidenav?.toggle();
  }
}
