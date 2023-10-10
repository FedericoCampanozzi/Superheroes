import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SuperHero } from 'src/app/models/super-hero.dto';
import { SuperHeroService } from 'src/app/services/super-hero.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { HeroDetailDialogComponent } from '../hero-detail-dialog/hero-detail-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.css']
})
export class HeroTableComponent implements OnInit, AfterViewInit {  
  displayedColumns: string[] = ["ID","Name","FirstName","LastName","City","Controls"]
  heroesDataSource = new MatTableDataSource<SuperHero>();
  @ViewChild("heroTablePaginator") paginator?: MatPaginator = undefined;
  @ViewChild(MatSort) sort?: MatSort = undefined;
  heroToEdit?: SuperHero;

  constructor(
    private superHeroService: SuperHeroService,
    private _liveAnnouncer: LiveAnnouncer,
    private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.superHeroService
      .getSuperHeroes()
      .subscribe((result: SuperHero[]) => {
        for(let i=0;i<100;i++){
          result.push(new SuperHero());
        }
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
    if(this.sort != undefined && this.paginator != undefined){
      this.heroesDataSource.sort = this.sort;
      this.heroesDataSource.paginator = this.paginator;
    }
    
    let d = document.getElementById("maxHeightJS");
    let f = document.getElementById("my-footer");
    let p = document.getElementById("my-paginator");
    let divTop = (d == null || d.getBoundingClientRect() == null ? 0 : d.getBoundingClientRect().top);
    let footerTop = (f == null || f.getBoundingClientRect() == null ? 0 : f.getBoundingClientRect().top);
    let paginatorHeight = (p == null || p.getBoundingClientRect() == null ? 0 : p.offsetHeight);
    d?.setAttribute("style","overflow-y:auto; max-height: " + (footerTop - divTop - paginatorHeight - 10) + "px;");
  }

  updateHeroList(heroes: SuperHero[]) {
    //this.heroesDataSource.data = heroes;
  }

  initNewHero() {
    //this.heroToEdit = new SuperHero();
  }

  editHero(hero: SuperHero) {
    //this.heroToEdit = hero;
  }

  deleteHero(hero: SuperHero) {
    this.superHeroService.deleteHero(hero);
  }
  
  showDetail(hero: SuperHero) {
    this.matDialog.open(HeroDetailDialogComponent, {
      data: {
        Hero: new SuperHero().copyFrom(hero),
        IsAddMode: false
      },
    });
  }
}

function getOffset( el:any ) {
  var _x = 0;
  var _y = 0;
  while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
      _x += el.offsetLeft - el.scrollLeft;
      _y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
  }
  return { top: _y, left: _x };
}