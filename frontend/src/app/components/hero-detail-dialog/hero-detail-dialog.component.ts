import { Component, Inject, OnInit } from '@angular/core';
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
export class HeroDetailDialogComponent implements OnInit {
  hero?: SuperHero;
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
  }

  ngOnInit(): void {

  }

  updateHero(hero: SuperHero) {
    /*this.superHeroService
      .updateHero(hero)
      .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));*/
  }

  deleteHero(hero: SuperHero) {
    /*
    this.superHeroService
      .deleteHero(hero)
      .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
      */
  }

  createHero(hero: SuperHero) {
    /*
    this.superHeroService
      .createHero(hero)
      .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
      */
  }
}
