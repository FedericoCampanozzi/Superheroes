import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailDialogComponent } from './hero-detail-dialog.component';

describe('HeroDetailDialogComponent', () => {
  let component: HeroDetailDialogComponent;
  let fixture: ComponentFixture<HeroDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDetailDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
