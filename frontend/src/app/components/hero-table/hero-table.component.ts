import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SuperHero } from '../../models/super-hero.dto';
import { SuperHeroService } from '../../services/super-hero.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { HeroDetailDialogComponent } from '../hero-detail-dialog/hero-detail-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UtilityFunction } from '../../utility-function';

@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.css']
})
export class HeroTableComponent implements OnInit, AfterViewInit {  
  UtilityFunction: UtilityFunction = new UtilityFunction();
  
  displayedColumns: string[] = ["ID","DateCreate","Name","FirstName","LastName","City","IsMainCharacter","Controls"];
  heroesDataSource = new MatTableDataSource<SuperHero>();
  @ViewChild(MatSort) sort?: MatSort = undefined;

  constructor(
    private superHeroService: SuperHeroService,
    private _liveAnnouncer: LiveAnnouncer,
    private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.superHeroService
      .getSuperHeroes()
      .subscribe((result: SuperHero[]) => {
        this.heroesDataSource.data = result;
      });
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngAfterViewInit() {
    if(this.sort != undefined){
      this.heroesDataSource.sort = this.sort;
    }
    
    let d = document.getElementById("maxHeightJS");
    let f = document.getElementById("my-footer");
    let p = document.getElementById("myRef");
    let divTop = (d == null || d.getBoundingClientRect() == null ? 0 : d.getBoundingClientRect().top);
    let footerTop = (f == null || f.getBoundingClientRect() == null ? 0 : f.getBoundingClientRect().top);
    let paginatorHeight = (p == null || p.getBoundingClientRect() == null ? 0 : p.offsetHeight);
    d?.setAttribute("style","overflow-y:auto; height: " + (footerTop - divTop - paginatorHeight - 10) + "px;");
  }
  
  deleteHero(hero: SuperHero) {
    this.superHeroService.deleteHero(hero)
    .subscribe((heroes: SuperHero[]) => this.heroesDataSource.data = heroes);
  }
  
  showDetail(hero: SuperHero, mode:boolean) {
    let dialogRef = this.matDialog.open(HeroDetailDialogComponent, {
      data: {
        Hero: mode ? new SuperHero() : new SuperHero().copyFrom(hero),
        IsAddMode: mode
      },
    });

    dialogRef.afterClosed().subscribe(res => {
      this.superHeroService.getSuperHeroes()
      .subscribe((result: SuperHero[]) => {
        this.heroesDataSource.data = result;
      });
    });
  }

  showDetailAdd() {
    this.showDetail(new SuperHero(), true);
  }
}