import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { City } from './models/city.dto';
import { CityService } from './services/city.service';
import { HeroTableComponent } from './components/hero-table/hero-table.component';
import { DataSharing } from './shared/data-sharing';

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
  filter = DataSharing.filterHero;

  @ViewChild("sidefilter") sidenav?: MatSidenav = undefined;
  @ViewChild("heroTable") heroTable?: HeroTableComponent = undefined;

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
    console.log("this.filter=",this.filter);
    this.sidenav?.toggle();
    this.heroTable?.CercaEvent();
  }
}
