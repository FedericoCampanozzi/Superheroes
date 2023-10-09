import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'SuperHero.UI';
  mode = new FormControl('over');
  open = true;

  @ViewChild("sidefilter") sidenav?: MatSidenav = undefined;

  public constructor(){
  }

  ngAfterViewInit() {
    if(this.sidenav != undefined){
      this.sidenav?.open();
    }
  }

  toggle(){
    this.sidenav?.toggle();
  }

  cerca(){
    
    this.sidenav?.toggle();
  }
}
