import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { City } from 'src/app/models/city.dto';
import { SuperHero } from 'src/app/models/super-hero.dto';
import { CityService } from 'src/app/services/city.service';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-hero-detail-dialog',
  templateUrl: './hero-detail-dialog.component.html',
  styleUrls: ['./hero-detail-dialog.component.css'],
})
export class HeroDetailDialogComponent {
  hero: SuperHero;
  editMode = false;
  addMode = false;
  cities: City[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<HeroDetailDialogComponent>,
    private superHeroService: SuperHeroService,
    private cityService: CityService) {
    this.hero = data.Hero
    this.cityService.getCities().subscribe(res => {
      this.cities = res;
    });
    this.addMode = data.IsAddMode;
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

  changeMode(save: boolean){
    if(this.addMode){
      if(save){
        this.superHeroService.createHero(this.hero)
        .subscribe((heroes: SuperHero[]) => console.log(heroes));
      }
      this.dialogRef.close(true);
    }
    else {
      if(this.editMode && save){
        this.superHeroService.updateHero(this.hero)
        .subscribe((heroes: SuperHero[]) => console.log(heroes));
      } 
      this.editMode = !this.editMode;
    }
  }

  exitDialog(){
    this.dialogRef.close(true);
  }
}
