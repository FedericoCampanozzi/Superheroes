import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { City } from '../../models/city.dto';
import { SuperHero } from '../../models/super-hero.dto';
import { CityService } from '../../services/city.service';
import { SuperHeroService } from '../../services/super-hero.service';
import { UtilityFunction } from '../../shared/utility-function';

@Component({
  selector: 'app-hero-detail-dialog',
  templateUrl: './hero-detail-dialog.component.html',
  styleUrls: ['./hero-detail-dialog.component.css'],
})
export class HeroDetailDialogComponent {
  UtilityFunction: UtilityFunction = new UtilityFunction();
  hero: SuperHero;
  editMode = false;
  addMode = false;
  cities: City[] = [];
  selectedCity: number = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<HeroDetailDialogComponent>,
    private superHeroService: SuperHeroService,
    private cityService: CityService) {
    this.hero = data.Hero;
    this.selectedCity = data.Hero.idCity;
    this.cityService.getCities().subscribe(res => {
      this.cities = res;
    });
    this.addMode = data.IsAddMode;
  }

  changeMode(save: boolean){
    if(this.addMode){
      if(save){
        this.hero.dateCreate = new Date();
        this.hero.lastDateUpdate = new Date();
        this.superHeroService.createHero(this.hero, this.selectedCity)
        .subscribe((heroes: SuperHero[]) => {
          this.dialogRef.close(heroes);
        });
      }
    }
    else {
      if(this.editMode && save){
        this.hero.lastDateUpdate = new Date();
        console.log(this.hero);
        this.superHeroService.updateHero(this.hero, this.selectedCity)
        .subscribe((heroes: SuperHero[]) => {});
      } 
      this.editMode = !this.editMode;
    }
  }

  exitDialog(){
    this.dialogRef.close();
  }
}
